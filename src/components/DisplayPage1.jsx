import { useState, useEffect } from 'react'
import { getActiveSelection } from '../services/cajasService'

export const DisplayPage1 = () => {
  const [selectedBox, setSelectedBox] = useState(null)

  useEffect(() => {
    const checkSelectedBox = async () => {
      const data = await getActiveSelection()
      // Limpiamos la selección antes de verificar
      setSelectedBox(null)
      
      // Solo actualizamos si la caja está en el rango 1-3
      if (data?.cajas?.id > 0 && data?.cajas?.id <= 3) {
        setSelectedBox(data)
      }
    }

    checkSelectedBox()
    const interval = setInterval(checkSelectedBox, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center">
      <div className="p-12 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">CAJAS 1-3</h1>
        <div className="text-center">
          {selectedBox?.cajas ? (
            <p className="text-8xl font-bold text-white animate-pulse">
              {selectedBox.cajas.nombre}
            </p>
          ) : (
            <p className="text-4xl text-white/60">Esperando selección...</p>
          )}
        </div>
      </div>
    </div>
  )
}