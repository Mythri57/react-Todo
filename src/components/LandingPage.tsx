import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => navigate('/todo')}
        className="px-8 py-4 text-xl font-semibold text-white bg-red-600 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
      >
        Open TODO App
      </button>
    </div>
  );
};

export default LandingPage;