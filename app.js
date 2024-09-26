import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2>Bienvenido a Mi Tienda</h2>
        <p>Aquí podrás encontrar los mejores productos.</p>
      </main>
    </div>
  );
};

export default App;
