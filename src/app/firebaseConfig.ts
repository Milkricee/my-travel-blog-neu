import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-z6JtslUh3evJ6dYKBbaG7RHh7SPKnA4",
  authDomain: "test-a5bf1.firebaseapp.com",
  projectId: "test-a5bf1",
  storageBucket: "test-a5bf1.firebasestorage.app",
  messagingSenderId: "588116302855",
  appId: "1:588116302855:web:a337e0f91279ad1f725ea2",
  measurementId: "G-LWS1MDCZKX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Exportiere die Authentifizierungsinstanz

export default app;
