import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // Aquí, usamos navigate para redireccionar a la página "/form"
    navigate("/form");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Aplicamos estilos de Tailwind CSS al botón */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-6 rounded-full"
        onClick={handleStartClick}
      >
        Comenzar
      </button>
    </div>
  );
};

export default StartButton;
