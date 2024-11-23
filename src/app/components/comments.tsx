"use client";

import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs, query, orderBy, addDoc, Timestamp } from "firebase/firestore";
import { auth } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const db = getFirestore();

function obfuscateEmail(email: string): string {
  const [user, domain] = email.split("@");
  return `${user[0]}***@${domain}`;
}

export default function Comments() {
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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<{ email: string } | null>(null); // Benutzerstatus

  // Überwachung des Authentifizierungsstatus
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({ email: currentUser.email || "Anonym" });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Kommentare abrufen
  const fetchComments = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "comments"), orderBy("timestamp", "desc"));
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
    } finally {
      setLoading(false);
    }
  };

  // Kommentar speichern
  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      await addDoc(collection(db, "comments"), {
        user: obfuscateEmail(user?.email || "Anonym"),
        text: newComment.trim(),
        timestamp: Timestamp.now(),
      });
      setNewComment("");
      fetchComments(); // Kommentare nach dem Hinzufügen erneut abrufen
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Kommentars:", error);
    }
  };

  // Kommentare beim Laden der Komponente abrufen
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-2">Kommentare</h2>

      {/* Kommentarformular */}
      {user ? (
        <form onSubmit={handleAddComment} className="mb-8">
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
        <p className="text-center text-gray-500 mb-8">
          <a href="/login" className="text-blue-500 font-medium underline hover:text-blue-700">
            Melde dich an
          </a>, um einen Kommentar zu hinterlassen.
        </p>
      )}

      {/* Kommentare anzeigen */}
      {loading ? (
        <p className="text-center text-gray-500">Lade Kommentare...</p>
      ) : (
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="p-4 border rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-gray-700">Von: {comment.user}</p>
                <p className="text-xs text-gray-400">
                  {new Date(comment.timestamp?.seconds * 1000).toLocaleString()}
                </p>
              </div>
              <p className="text-gray-800">{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
