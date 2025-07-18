import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'Georgia, serif' }}>
      <p><b>No man is better than a machine.<br />No machine is better than a man with a machine.</b></p>
      <p>Judy is a finance professional with a love for technology and a naturally curious mind.</p>
      <p>She enjoys connecting the dots between numbers, ideas, and the world around her.</p>
      <p>She is currently based in London, following a decade in the United States, where she studied, lived and worked.</p>
    </div>
  );
}
function Writing() {
  return (
    <div>
      <h2>Writing</h2>
      <h3 style={{ fontWeight: 'normal', fontStyle: 'italic', marginTop: '-0.5rem' }}>My Thoughts</h3>
    </div>
  );
}
function Reading() {
  return (
    <div>
      <h2>Reading</h2>
      <h3 style={{ fontWeight: 'normal', fontStyle: 'italic', marginTop: '-0.5rem' }}>Books and Articles I enjoyed</h3>
      <div style={{ marginTop: '1rem' }}>
        <div>Co Intelligence</div>
        <div>Atomic Habits</div>
        <div>Other Rivers: A Chinese Education</div>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/judyjiejiang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
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
        top: 0,
        fontFamily: 'Georgia, serif'
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
