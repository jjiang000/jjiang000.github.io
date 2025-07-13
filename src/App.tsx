import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>No man is better than a machine. No machine is better than a man with a machine.</p>
    </div>
  );
}
function Writing() {
  return <div><h2>Writing</h2><p>Share your articles, essays, or blog posts here.</p></div>;
}
function Reading() {
  return <div><h2>Reading</h2><p>List your favorite books, articles, or reading recommendations here.</p></div>;
}
function Contact() {
  return <div><h2>Contact</h2><p>How can people reach you?</p></div>;
}

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'white', color: 'black' }}>
      <nav style={{
        minWidth: '200px',
        background: 'white',
        color: 'black',
        padding: '2rem 1rem',
        borderRight: '1px solid #eee',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        height: '100vh',
        position: 'sticky',
        top: 0
      }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '2rem', letterSpacing: '0.5px', color: 'black', textDecoration: 'none' }}>Judy Jiang</Link>
        <Link to="/writing" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }}>Writing</Link>
        <Link to="/reading" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }}>Reading</Link>
        <Link to="/contact" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
      </nav>
      <main style={{ flex: 1, padding: '2rem', background: 'white', color: 'black' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
