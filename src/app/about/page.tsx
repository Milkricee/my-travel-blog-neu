"use client";

export default function About() {
  return (
    <>
      <div className="about-container">
        {/* Parallax-Hintergrund */}
        <div className="parallax-background"></div>

        {/* Inhalt */}
        <div className="content-wrapper relative flex items-center justify-center h-full">
          <div className="content-box bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl w-full mx-auto">
            <h2 className="text-4xl font-bold mb-4">Über mich</h2>
            <p className="text-lg mb-4">
              Hallo! Ich bin <strong>Daniel</strong>, der Reiseenthusiast hinter
              diesem Blog. Ich studiere <strong>Wirtschaftsinformatik</strong>{" "}
              im letzten Semester und reise für mein Leben gerne.
            </p>
            <p className="text-lg mb-4">
              In meiner Freizeit programmiere ich gerne und habe mir gedacht,
              ich erstelle mal einen kleinen Travelblog, damit andere von meinen
              Erfahrungen profitieren können. Selbst wenn ich damit nur ein Paar
              Menschen weiterhelfen konnte, hat sich der Aufwand für mich
              gelohnt.
            </p>
            <p className="text-lg">
              Ich freue mich über Kommentare oder konstruktives Feedback. Auch
              bei weiteren Fragen zu spezifischen Reisezielen stehe ich sehr
              gerne zur Verfügung.
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
          <footer className="footer-fixed text-center text-gray-500 mt-4"></footer>
        </div>

        <style jsx>{`
          .about-container {
            position: relative;
            height: 100vh;
            overflow: hidden;
          }

          .parallax-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("/imgs/ich.jpg?updated=1");
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: -1;
          }

          .content-wrapper {
            z-index: 1;
          }

          .content-box {
            animation: slideIn 1s ease-out;
            max-height: 100vh;
            overflow-y: auto;
          }

          .footer-fixed {
            position: fixed;
            z-index: 1;
          }

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
            .about-container {
              height: 100vh;
            }

            .content-box {
              max-height: 70vh;
            }
          }

          @media (min-width: 769px) {
            .content-box {
              max-height: none;
              overflow-y: visible;
            }

            .footer-fixed {
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
}
