"use client";

export default function About() {
    return (
        <div
            className="h-screen bg-fixed bg-cover bg-center flex items-end justify-center"
            style={{ backgroundImage: "url('/imgs/ich.jpg')" }}
        >
            <div className="bg-black bg-opacity-50 text-white p-8 rounded-lg text-center max-w-2xl mb-12">
                <h1 className="text-4xl font-bold mb-4">Über mich</h1>
                <p className="text-lg mb-4">
                    Hallo! Ich bin <strong>Daniel</strong>, der Reiseenthusiast hinter diesem Blog. 
                    Ich studiere <strong>Wirtschaftsinformatik</strong> im letzten Semester und reise für mein Leben gerne.
                </p>
                <p className="text-lg mb-4">
                    In meiner Freizeit programmiere ich gerne und habe mir gedacht, ich tue mal etwas Gutes 
                    und erstelle eine Webseite, damit andere von meinen Erfahrungen profitieren können.
                </p>
                <p className="text-lg mb-4">
                    Ich werde hier meine Reiseerfahrungen teilen und eventuell Tipps, Tricks und potentielle 
                    Routen für das jeweilige Land teilen. Hier mein letzter Trip nach 
                    <a href="/afrika/marokko" className="text-blue-400 underline hover:text-blue-500"> Marokko</a>.
                </p>
                <p className="text-lg mb-4">
                    Wenn ich einigen wenigen Besuchern mit meinen Berichten und Erfahrungen weiterhelfen konnte, 
                    hat sich der Aufwand schon gelohnt. Ich würde mich über Kommentare freuen. 
                    Bei Fragen zu einigen Ländern könnt ihr mich gerne anschreiben.
                </p>
                <p className="text-lg">
                    Falls jemand spannende Projekte hat, bei denen ich mitwirken kann, bin ich gerne dabei.
                    <br />
                    <strong>Do not hesitate to contact me.</strong>
                </p>
            </div>
        </div>
    );
}
