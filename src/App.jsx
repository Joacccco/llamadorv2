import { useState } from 'react';
import { CajasButtons } from './components/CajasButtons';
import { CajaDisplay } from './components/CajaDisplay';
import './App.css';

function App() {
    const [selectedCaja, setSelectedCaja] = useState(null);
    return (
      <div className="min-h-screen bg-red-600">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold mb-8 text-white text-center pt-8">Sistema de Turnos BLOW MAX</h1>
          <CajasButtons onCajaSelect={setSelectedCaja}/>
          
          <CajaDisplay selectedCaja={selectedCaja}/>
        </div>
      </div>
    );
}
export default App;
