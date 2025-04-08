import { useState, useEffect } from 'react';
import { getCajas, saveSelectedBox } from '../services/cajasService';
export const CajasButtons = ({ onCajaSelect }) => {
    const [cajas, setCajas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCajaId, setSelectedCajaId] = useState('');
    useEffect(() => {
        const loadCajas = async () => {
            const cajasData = await getCajas();
            setCajas(cajasData);
        };
        loadCajas();
    }, []);
    const handleCajaSelect = async (caja) => {
        try {
            setLoading(true);
            await saveSelectedBox(caja.id);
            onCajaSelect(caja);
        }
        catch (error) {
            console.error('Error al guardar la selección:', error);
        }
        finally {
            setLoading(false);
        }
    };
    const selectedCaja = cajas.find(caja => caja.id === selectedCajaId);
    return (
      <div className="flex flex-col items-center gap-6 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <select 
          className="p-3 border-2 border-white/20 rounded-lg w-80 bg-white/5 text-white 
                   text-lg focus:outline-none focus:border-white/40 cursor-pointer"
          value={selectedCajaId} 
          onChange={(e) => setSelectedCajaId(Number(e.target.value))}
        >
          <option value="" className="text-gray-800">Seleccione una caja</option>
          {cajas.map((caja) => (
            <option key={caja.id} value={caja.id} className="text-gray-800">
              {caja.nombre}
            </option>
          ))}
        </select>

        {selectedCaja && (
          <button 
            onClick={() => handleCajaSelect(selectedCaja)} 
            disabled={loading}
            className="p-4 bg-white/20 text-white text-xl font-semibold rounded-lg 
                       hover:bg-white/30 disabled:bg-gray-400 w-80 
                       transition-all duration-300 shadow-lg"
          >
            {selectedCaja.nombre}
          </button>
        )}
      </div>
    );
};
