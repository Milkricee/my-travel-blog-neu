"use client";

import { useState, useEffect, useCallback } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  Timestamp,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

const db = getFirestore();

function obfuscateEmail(email: string): string {
  const [user, domain] = email.split("@");
  return `${user[0]}***@${domain}`;
}

export default function Comments({ pageId }: { pageId: string }) {
  interface Comment {
    id: string;
    user: string;
    text: string;
    timestamp: {
      seconds: number;
      nanoseconds: number;
    };
  }

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true); // Standardmäßig auf true setzen
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Überwachung des Authentifizierungsstatus
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ? { email: currentUser.email || "Anonym" } : null);
    });
    return () => unsubscribe();
  }, []);

  // Kommentare abrufen (immer, auch wenn nicht eingeloggt)
  const fetchComments = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const q = query(
        collection(db, "comments"),
        where("pageId", "==", pageId),
        orderBy("timestamp", "desc")
      );
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          user: data.user,
          text: data.text,
          timestamp: data.timestamp,
        };
      });
      setComments(commentsData);
    } catch (error) {
      console.error("Fehler beim Abrufen der Kommentare:", error);
      setError(
        "Fehler beim Laden der Kommentare. Bitte versuche es später erneut."
      );
    } finally {
      setLoading(false);
    }
  }, [pageId]);

  // Kommentar speichern
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    if (!user) return; // Sicherheitscheck

    try {
      await addDoc(collection(db, "comments"), {
        user: obfuscateEmail(user.email),
        text: newComment.trim(),
        timestamp: Timestamp.now(),
        pageId,
      });
      setNewComment("");
      fetchComments(); // Nach dem Speichern erneut abrufen
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Kommentars:", error);
      setError(
        "Kommentar konnte nicht hinzugefügt werden. Versuche es später erneut."
      );
    }
  };

  // Kommentar löschen (nur eigene)
  const handleDeleteComment = async (commentId: string) => {
    try {
      await deleteDoc(doc(db, "comments", commentId));
      fetchComments();
    } catch (error) {
      console.error("Fehler beim Löschen des Kommentars:", error);
      setError("Fehler beim Löschen des Kommentars.");
    }
  };

  // Kommentare immer abrufen (unabhängig von Login)
  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return (
    <div
      id="comments"
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">
        Kommentare
      </h2>

      {/* Fehler anzeigen */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Kommentare für ALLE Besucher sichtbar */}
      {loading ? (
        <p className="text-center text-gray-500">Lade Kommentare...</p>
      ) : comments.length === 0 ? (
        <p className="text-center text-gray-500">
          Noch keine Kommentare vorhanden.
        </p>
      ) : (
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="p-4 border rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">
                  Von: {comment.user}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(comment.timestamp?.seconds * 1000).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-800">{comment.text}</p>

              {/* Lösch-Button nur für den eigenen Kommentar anzeigen */}
              {user?.email && obfuscateEmail(user.email) === comment.user && (
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Kommentar löschen
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Kommentarformular NUR für eingeloggte Nutzer */}
      {user ? (
        <form onSubmit={handleAddComment} className="mt-6">
          <textarea
            placeholder="Schreibe einen Kommentar..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 border rounded-lg mb-4 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Kommentar hinzufügen
          </button>
        </form>
      ) : (
        <p className="text-gray-500 text-sm mt-4">
          <Link href="/login" className="text-blue-500 hover:underline">
            Melde dich an
          </Link>
          , um einen Kommentar zu hinterlassen.
        </p>
      )}
    </div>
  );
}
