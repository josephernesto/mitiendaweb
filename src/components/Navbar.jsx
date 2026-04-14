import React from 'react';
import { Store, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.8rem 2rem',
      backgroundColor: '#002B49',
      color: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Store size={28} color="#C5A059" />
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Abarrotes María Elena</h2>
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <span style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Inicio</span>
        <span style={{ cursor: 'pointer', fontSize: '0.9rem' }}>Categorías</span>
        <UserCircle size={28} style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  );
}