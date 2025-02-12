"use client";

export default function About() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Parallax-Hintergrund */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/imgs/ich.jpg?updated=1')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: -1, // Stelle sicher, dass es hinter dem Text liegt
        }}
      ></div>

      {/* Inhalt */}
      <div
        className="relative flex items-center justify-center h-full"
        style={{
          zIndex: 1, // Inhalt wird über dem Bild angezeigt
        }}
      >
        <div
          className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl w-full mx-auto"
          style={{
            animation: "slideIn 1s ease-out",
            maxHeight: "100vh", // Begrenzung für mobile Ansicht
            overflowY: "auto", // Scrollbar nur für mobile Ansicht
          }}
        >
          <h2 className="text-4xl font-bold mb-4">Über mich</h2>
          <p className="text-lg mb-4">
            Hallo! Ich bin <strong>Daniel</strong>, der Reiseenthusiast hinter
            diesem Blog. Ich studiere <strong>Wirtschaftsinformatik</strong> im
            letzten Semester und reise für mein Leben gerne.
          </p>
          <p className="text-lg mb-4">
            In meiner Freizeit programmiere ich gerne und habe mir gedacht, ich
            erstelle mal einen kleinen Travelblog, damit andere von meinen
            Erfahrungen profitieren können. Selbst wenn ich damit nur ein Paar
            Menschen weiterhelfen konnte, hat sich der Aufwand für mich gelohnt.
          </p>
          <p className="text-lg">
            Ich freue mich über Kommentare oder konstruktives Feedback. Auch bei
            weiteren Fragen zu spezifischen Reisezielen stehe ich sehr gerne zur
            Verfügung.
          </p>
          <p className="text-lg">
            Falls jemand spannende Projekte hat, bei denen ich mitwirken kann
            <br />
            <strong>
              <a
                href="mailto:daniel@dan-travels.com"
                className="text-blue-500 underline hover:text-blue-700"
              >
                do not hesitate to contact me.
              </a>
            </strong>
          </p>
        </div>

        {/* Footer */}
        <footer
          className="text-center text-gray-500 mt-4"
          style={{
            position: "fixed",
            zIndex: 1,
          }}
        ></footer>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          div[style] {
            height: 100vh; /* Volle Höhe für mobile Ansicht */
          }

          .bg-black {
            max-height: 70vh; /* Scrollbare Textbox für mobile Ansicht */
          }
        }

        @media (min-width: 769px) {
          .bg-black {
            max-height: none; /* Keine Begrenzung der Textbox in der Webansicht */
            overflow-y: visible; /* Kein Scrollen innerhalb der Textbox */
          }

          footer {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
