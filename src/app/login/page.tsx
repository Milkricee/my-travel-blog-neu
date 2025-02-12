"use client";

import { useState, Suspense } from "react";
import { auth } from "@/app/firebaseConfig";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams(); // Suspense-sensitive Hook

  // Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Facebook Provider
  const facebookProvider = new FacebookAuthProvider();

  // Login mit Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Erfolgreich mit Google eingeloggt!");

      // Hole die Ziel-URL aus den Suchparametern
      const redirectTo = searchParams.get("redirect") || "/";
      router.push(redirectTo); // Weiterleiten zur Ziel-URL oder zur Main Page
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unbekannter Fehler");
      }
    }
  };

  // Login mit Facebook
  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      alert("Erfolgreich mit Facebook eingeloggt!");

      // Hole die Ziel-URL aus den Suchparametern
      const redirectTo = searchParams.get("redirect") || "/";
      router.push(redirectTo); // Weiterleiten zur Ziel-URL oder zur Main Page
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unbekannter Fehler");
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg text-center">
        <p>
          Aktuell kann man sich nur einloggen, wenn man einen{" "}
          <strong>Google </strong> oder
          <strong> Facebook</strong> Account besitzt.
          <br />
          Eventuell implementiere ich später noch andere Login-Methoden.
          <br />
          Keine Sorge, um die Seite zu erkunden{" "}
          <strong>brauchst du dich nicht einloggen</strong>. Nur, falls du etwas
          kommentieren möchtest😉
        </p>
        <h2 className="text-2xl font-bold mb-6">Anmelden</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="flex flex-col items-center gap-4 w-full">
          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded w-full max-w-xs hover:bg-green-600 transition"
          >
            <FcGoogle size={24} />
            Mit Google einloggen
          </button>

          {/* Facebook Login */}
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-3 rounded w-full max-w-xs hover:bg-blue-800 transition"
          >
            <FaFacebook size={24} />
            Mit Facebook einloggen
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div className="text-center mt-6">Lädt...</div>}>
      <LoginForm />
    </Suspense>
  );
}
