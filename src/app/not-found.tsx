import Link from 'next/link';

export default function Custom404() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#343a40' }}>
        404 - Seite nicht gefunden
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#6c757d', margin: '1rem 0' }}>
        Diese Seite befindet sich vermutlich in Bearbeitung. Bitte noch etwas Geduld!
      </p>
      
      {/* GIF mit Überdeckendem Block */}
      <div style={{ position: 'relative', width: '480px', height: '480px', margin: '2rem 0' }}>
        <iframe
          src="https://giphy.com/embed/vR1dPIYzQmkRzLZk2w"
          width="480"
          height="480"
          style={{ border: 'none' }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'transparent',
            zIndex: 1,
          }}
        ></div>
      </div>
      
      <Link
        href="/"
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          fontSize: '1rem',
        }}
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
