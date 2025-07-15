
'use client'
import { useState } from 'react';

export default function Faucet() {
  const [status, setStatus] = useState('');

  async function requestTokens() {
    const res = await fetch('/api/faucet');
    const data = await res.json();
    setStatus(data.message);
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <button onClick={requestTokens} style={{ padding: '0.5rem 1rem', backgroundColor: '#FFD700', border: 'none', borderRadius: '8px' }}>💧 Request 1 REGIS</button>
      <p>{status}</p>
    </div>
  );
}
