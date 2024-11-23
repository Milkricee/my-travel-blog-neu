"use client";

import { useState } from "react";
import { auth } from "@/app/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // Google-Icon importieren

export default function Login() {
  const [error, setError] = useState<string | null>(null);

  // Google Provider
  const provider = new GoogleAuthProvider();

  // Login mit Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Erfolgreich mit Google eingeloggt!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unbekannter Fehler");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-6">Mit Google anmelden</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          <FcGoogle size={24} /> {/* Google-Icon */}
          Mit Google einloggen
        </button>
      </div>
    </div>
  );
}
