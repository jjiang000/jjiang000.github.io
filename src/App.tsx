import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import React from 'react';

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
  const articles = [
    {
      title: 'A Human Afternoon, an AI Echo: Judy x AI at Louisiana Museum',
      date: 'July 2025',
      content: (
        <>
          <p>Beneath the soft glow of a golden Nordic summer day, I at last arrived at the Louisiana Museum of Modern Art — a place that had lived in my imagination and shimmered on the edge of my wishes for years.</p>
          <p>What struck me most was the seamless dialogue between the museum and its landscape — as if they had grown together over time. The sculptures don’t stand apart; they nestle into the earth, as if placed by nature’s own hand. Pars Pro Toto sat there with quiet certainty, as elemental as the stones themselves. And then there was Little Janey-Waney, turning gently in the breeze — bright, playful, a ripple of joy in the museum’s serene rhythm.</p>
        </>
      ),
    },
    // Add more articles here
  ];
  const [selected, setSelected] = useState<number | null>(null);
  const location = useLocation();
  // Reset selected when navigating to /writing
  React.useEffect(() => {
    if (location.pathname === '/writing') {
      setSelected(null);
    }
  }, [location.pathname]);

  return (
    <div>
      {selected === null ? (
        <>
          <h2>Writing</h2>
          <h3 style={{ fontWeight: 'normal', fontStyle: 'italic', marginTop: '-0.5rem' }}>My Thoughts</h3>
          <ul style={{ marginTop: '2rem', listStyle: 'none', padding: 0 }}>
            {articles.map((article, idx) => (
              <li
                key={idx}
                className="article-title"
                style={{
                  marginBottom: '1rem'
                }}
                onClick={() => setSelected(idx)}
              >
                {article.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <article style={{ marginTop: '2rem' }}>
          <h4>{articles[selected].title}</h4>
          <div style={{ fontSize: '0.9rem', color: '#555' }}>{articles[selected].date}</div>
          {articles[selected].content}
        </article>
      )}
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
