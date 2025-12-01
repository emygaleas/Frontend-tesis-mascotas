import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useFetch } from "../hooks/useFetch";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const Confirm = () => {
  const fetchDataBackend = useFetch();
  const { token } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(""); // 'success', 'already', 'error'
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          setStatus("error");
          setMsg("No se recibió ningún token.");
          setLoading(false);
          return;
        }

        const url = `${import.meta.env.VITE_BACKEND_URL}/auth/confirm-email/${token}`;
        const response = await fetchDataBackend(url);

        if (response?.msg === "Cuenta confirmada, ya puedes iniciar sesión") {
          setStatus("success");
          setMsg(response.msg);
          toast.success(response.msg);
        } else if (response?.msg === "Cuenta ya confirmada") {
          setStatus("already");
          setMsg(response.msg);
          toast.info(response.msg);
        } else {
          setStatus("error");
          setMsg(response?.msg || "No se pudo confirmar tu cuenta.");
          toast.error(msg);
        }
      } catch (error) {
        console.error("Error al confirmar:", error);
        setStatus("error");
        setMsg("No se pudo confirmar tu cuenta. Intenta de nuevo.");
        toast.error(msg);
        setTimeout(() => navigate("/"), 2000);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, [token, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fff7e0" }}>
        <p className="text-lg text-gray-500">Confirmando tu cuenta...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "#fff7e0" }}>
      <ToastContainer />
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="mb-6 flex justify-center">
              {status === "success" || status === "already" ? (
                <FaCheckCircle size={80} style={{ color: "#b19671ff" }} className="animate-bounce" />
              ) : (
                <FaTimesCircle size={80} style={{ color: "#ff4d4d" }} className="animate-bounce" />
              )}
            </div>

            <h1 className="text-4xl font-bold" style={{ color: "#b19671ff" }}>PETCONNECT</h1>

            {status === "success" ? (
              <>
                <h2 className="text-2xl font-bold mt-6">¡Bienvenido a PetConnect!</h2>
                <p className="text-gray-500 mt-4">{msg}</p>
              </>
            ) : status === "already" ? (
              <>
                <h2 className="text-2xl font-bold mt-6">Cuenta ya confirmada</h2>
                <p className="text-gray-500 mt-4">{msg}</p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mt-6">Confirmación Fallida</h2>
                <p className="text-gray-500 mt-4">{msg}</p>
              </>
            )}

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
