import React, { useState } from "react";

const SaludoInteractivo = () => {
  // Estado local para almacenar el nombre ingresado
  const [nombre, setNombre] = useState("");

  // Función para manejar cambios en el input de nombre
  const manejarCambioNombre = (event) => {
    setNombre(event.target.value);
  };

  // Función para manejar el clic en el botón de saludo
  const saludar = () => {
    // Construir el mensaje de saludo con el nombre ingresado
    const mensaje = `Hola, ${nombre}!`;
    // Actualizar el estado del mensaje de saludo
    alert(mensaje);
  };

  return (
    <div>
      {/* Input para ingresar el nombre */}
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={manejarCambioNombre}
      />

      {/* Botón para saludar */}
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};

export default SaludoInteractivo;
