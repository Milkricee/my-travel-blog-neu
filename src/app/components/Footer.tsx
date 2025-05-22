export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-8 flex justify-center items-center relative">
      {/* Datenschutz-Link linksbündig */}
      <a
        href="/datenschutz"
        className="absolute left-4 underline hover:text-blue-400"
      >
        Datenschutz
      </a>

      {/* Haupttext bleibt zentriert */}
      <p>
        &copy; {new Date().getFullYear()} Dan&apos;s Travelblog. Alle Rechte
        vorbehalten. Folge mir auf{" "}
        <a
          href="https://www.instagram.com/milchreiss/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Instagram
        </a>
      </p>
    </footer>
  );
}
