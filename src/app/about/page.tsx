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
                className="relative flex items-end h-full"
                style={{
                    paddingBottom: "5rem", // Abstand zum unteren Rand
                    zIndex: 1, // Inhalt wird über dem Bild angezeigt
                }}
            >
                <div
                    className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl mx-auto"
                    style={{
                        animation: "slideIn 1s ease-out",
                    }}
                >
                    <h1 className="text-4xl font-bold mb-4">Über mich</h1>
                    <p className="text-lg mb-4">
                        Hallo! Ich bin <strong>Daniel</strong>, der Reiseenthusiast hinter diesem Blog.
                        Ich studiere <strong>Wirtschaftsinformatik</strong> im letzten Semester und reise für mein Leben gerne.
                    </p>
                    <p className="text-lg mb-4">
                        In meiner Freizeit programmiere ich gerne und habe mir gedacht, ich tue mal etwas Gutes
                        und erstelle eine Webseite, damit andere von meinen Erfahrungen profitieren können.
                        Selbst wenn ich damit nur 10 Menschen weiterhelfen kann, hat sich der Aufwand gelohnt.
                    </p>
                    <p className="text-lg">
                      Ich freue mich über Kommentare oder konstruktives Feedback.
                      Auch bei weiteren Fragen zu spezifischen Reisezielen stehe ich sehr gerne zur Verfügung. 
                    </p>
                    <p className="text-lg">
                        Falls jemand spannende Projekte hat, bei denen ich mitwirken kann, bin ich gerne dabei.
                        <br />
                        <strong>Do not hesitate to contact me.</strong>
                    </p>
                </div>
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
            `}</style>
        </div>
    );
}
