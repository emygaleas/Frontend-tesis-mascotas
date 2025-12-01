import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaCheckCircle } from "react-icons/fa";

const Confirm = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos un pequeño delay para mostrar "confirmando"
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fff7e0" }}>
        <p className="text-lg text-gray-500">Confirmando tu cuenta...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "#fff7e0" }}>
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              <FaCheckCircle size={80} style={{ color: "#b19671ff" }} className="animate-bounce" />
            </div>

            <h1 className="text-4xl font-bold" style={{ color: "#b19671ff" }}>PETCONNECT</h1>
            <h2 className="text-2xl font-bold mt-6">¡Cuenta confirmada!</h2>
            <p className="text-gray-500 mt-4">
              Tu cuenta ha sido confirmada exitosamente. Ya puedes iniciar sesión y disfrutar de todas las funcionalidades.
            </p>

            <div className="mt-8 space-y-3">
              <Link
                to="/login"
                className="block w-full text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center"
                style={{ backgroundColor: "#b19671ff" }}
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/"
                className="block w-full text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all text-center border-2 border-gray-300"
              >
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
