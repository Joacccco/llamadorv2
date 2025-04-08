export const CajaDisplay = ({ selectedCaja }) => {
  return (
    <div className="mt-8 p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-white/90">Caja Seleccionada:</h2>
      {selectedCaja ? (
        <p className="text-6xl font-bold text-white">{selectedCaja.nombre}</p>
      ) : (
        <p className="text-2xl text-white/60">Ninguna caja seleccionada</p>
      )}
    </div>
  )
}
