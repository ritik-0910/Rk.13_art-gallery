import React, { useState } from 'react';
import { UploadCloud, Instagram, Mail } from 'lucide-react';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [artworks, setArtworks] = useState([1, 2, 3]);

  const handleLogin = (method) => {
    alert(`Logged in with ${method}`);
    setIsLoggedIn(true);
  };

  const handleUpload = () => {
    if (!isLoggedIn) {
      alert('Please log in to upload your artwork.');
      return;
    }
    setArtworks([...artworks, artworks.length + 1]);
    alert('Artwork uploaded successfully!');
  };

  return (
    <main style={{ background: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>Rk.13.artgallery</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Online Art Gallery</p>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {artworks.map((art, i) => (
          <div key={i} style={{ background: '#1c1c1e', padding: '1rem', borderRadius: '1rem' }}>
            <div style={{ height: 200, background: '#2c2c2e', borderRadius: '1rem', marginBottom: '1rem' }}></div>
            <h2>Sketch Title {art}</h2>
            <p>Short description of the artwork...</p>
          </div>
        ))}
      </div>

      <section style={{ marginTop: '2rem' }}>
        <h2>Upload Your Sketch</h2>
        <input type="file" disabled={!isLoggedIn} />
        <button onClick={handleUpload} style={{ marginLeft: '1rem', background: '#7e22ce', color: 'white', padding: '0.5rem 1rem', border: 'none' }}>
          <UploadCloud size={16} style={{ marginRight: '0.5rem' }} /> Upload
        </button>
        {!isLoggedIn && <p style={{ color: 'red' }}>Please log in to upload artwork.</p>}
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Login</h2>
        <button onClick={() => handleLogin('Gmail')}>Login with Gmail</button>
        <button onClick={() => handleLogin('Facebook')}>Login with Facebook</button>
        <input placeholder="Mobile Number" />
        <button onClick={() => handleLogin('Mobile Number')}>Login with Mobile</button>
      </section>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #333', paddingTop: '1rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <a href="https://www.instagram.com/__ritik_13_/profilecard/?igsh=Z3FvZTZuMXFvdWV5" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem', color: 'white' }}>
            <Instagram />
          </a>
          <a href="mailto:hartikchauhan0910@gamil.com" style={{ color: 'white' }}>
            <Mail />
          </a>
        </div>
        <p>&copy; 2025 Rk.13.artgallery - Online Art Gallery</p>
      </footer>
    </main>
  );
                      }
