import { useNavigate } from "react-router-dom";

const StartButton = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/form");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-6 rounded-full"
        onClick={handleStartClick}
      >
        LLenar Formulario de Credito
      </button>
    </div>
  );
};

export default StartButton;
