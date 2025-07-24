import { Routes, Route, Link, useLocation } from 'react-router-dom';
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
function Writing({ selected, setSelected }: { selected: number | null, setSelected: (idx: number | null) => void }) {
  const articles = [
    {
      title: 'A Human Afternoon, an AI Echo: Judy x AI at Louisiana Museum',
      date: 'July 2025',
      content: (
        <>
          <p>Beneath the soft glow of a golden Nordic summer day, I at last arrived at the Louisiana Museum of Modern Art — a place that had lived in my imagination and shimmered on the edge of my wishes for years.</p>
          <p>What struck me most was the seamless dialogue between the museum and its landscape — as if they had grown together over time. The sculptures don’t stand apart; they nestle into the earth, as if placed by nature’s own hand. <i>Pars Pro Toto</i> sat there with quiet certainty, as elemental as the stones themselves. And then there was <i>Little Janey-Waney</i>, turning gently in the breeze — bright, playful, a ripple of joy in the museum’s serene rhythm.</p>
          <p>Wandering into Giacometti Gallery, I felt the roles of art and setting gently reverse. Greenery framed by glass felt alive and commanding, while <i>Walking Man</i> stood still, a quiet echo of motion. I had known his work in fragments, but here, it gathered into something whole, as if the space made it speak to me, in a voice I hadn’t heard until now.</p>
          <p>As the afternoon light softened into gold, I lingered a little longer — reluctant to leave the quiet conversation between art, space, and nature. Louisiana doesn’t try to impress; it invites. It asks you to slow down, to look twice, to feel. I came with long-held expectations, but left with something quieter and more lasting — a sense of stillness, gently stitched into memory.</p>
        </>
      ),
    },
    // Add more articles here
  ];
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
                style={{ marginBottom: '1rem' }}
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
  const location = useLocation();
  const [selected, setSelected] = React.useState<number | null>(null);
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
        <Link to="/writing" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }} onClick={() => setSelected(null)}>Writing</Link>
        <Link to="/reading" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }}>Reading</Link>
        <Link to="/contact" style={{ color: 'black', textDecoration: 'none', fontWeight: 500 }}>Contact</Link>
      </nav>
      <main style={{ flex: 1, padding: '2rem', background: 'white', color: 'black' }}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/writing" element={<Writing selected={selected} setSelected={setSelected} />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
