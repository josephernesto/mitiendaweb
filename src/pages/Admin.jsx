export default function Admin({ productos }) {
  return (
    <div style={{ padding: '20px', backgroundColor: '#eef2f3', minHeight: '80vh' }}>
      <h2 style={{ color: '#d35400' }}>⚙️ Panel de Administración</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white' }}>
        <thead>
          <tr style={{ backgroundColor: '#002B49', color: 'white' }}>
            <th style={{ padding: '10px' }}>Producto</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{p.nombre}</td>
              <td>{p.stock} unids.</td>
              <td>S/ {p.precio.toFixed(2)}</td>
              <td><button>Editar</button> <button style={{ color: 'red' }}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}