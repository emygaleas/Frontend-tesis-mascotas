import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { MdLock } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useFetch } from "../hooks/useFetch";

const Reset = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const fetchDataBackend = useFetch();
  const [loading, setLoading] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
  const password = watch("password");

  // Verificar que el token sea válido
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/auth/restore-password/${token}`;
        await fetchDataBackend(url, null, "GET");
        setTokenValid(true);
      } catch (error) {
        toast.error("El enlace de recuperación ha expirado o es inválido");
        setTimeout(() => navigate("/login"), 2000);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, [token]);

  const changePassword = async (dataForm) => {
    // Validar que las contraseñas coincidan
    if (dataForm.password !== dataForm.confirmpassword) {
      return toast.error("Las contraseñas no coinciden");
    }

    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/auth/change-password/${token}`;
      const response = await fetchDataBackend(url, { password: dataForm.password, confirmPassword: dataForm.confirmpassword }, "POST");
      
      if (response) {
        toast.success("¡Contraseña actualizada exitosamente!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      toast.error("Error al actualizar la contraseña. Intenta de nuevo.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#fff7e0" }}>
        <p className="text-lg text-gray-500">Verificando enlace...</p>
      </div>
    );
  }

  if (!tokenValid) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "#fff7e0" }}>
      <ToastContainer />
      <div className="w-full max-w-lg">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition"
        >
          ← Volver al Login
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="mb-4 text-5xl">🔐</div>
            <h1 className="text-4xl font-bold" style={{ color: "#b19671ff" }}>
              PETCONNECT
            </h1>
            <h2 className="text-2xl font-bold mt-4">Recupera tu cuenta</h2>
            <p className="text-gray-500 mt-2">Establece tu nueva contraseña</p>
          </div>

          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit(changePassword)}>
              {/* Nueva Contraseña */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nueva Contraseña
                </label>
                <div className="relative">
                  <MdLock
                    className="absolute left-4 top-3.5 text-[#b19671ff]"
                    size={20}
                  />
                  <input
                    type="password"
                    placeholder="Ingresa tu nueva contraseña"
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent border-gray-300"
                    {...register("password", {
                      required: "La contraseña es obligatoria",
                      minLength: {
                        value: 8,
                        message: "Debe tener al menos 8 caracteres",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                        message: "Debe incluir mayúscula, minúscula y número",
                      },
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-600 text-xs mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Confirmar Contraseña */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirmar Contraseña
                </label>
                <div className="relative">
                  <MdLock
                    className="absolute left-4 top-3.5 text-[#b19671ff]"
                    size={20}
                  />
                  <input
                    type="password"
                    placeholder="Confirma tu contraseña"
                    className="w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent border-gray-300"
                    {...register("confirmpassword", {
                      required: "Debes confirmar la contraseña",
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden",
                    })}
                  />
                </div>
                {errors.confirmpassword && (
                  <p className="text-red-600 text-xs mt-1">{errors.confirmpassword.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="block w-full text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center disabled:opacity-50"
                style={{ backgroundColor: "#b19671ff" }}
              >
                {loading ? "Guardando..." : "Restablecer Contraseña"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              ¿Recordaste tu contraseña?{" "}
              <Link
                to="/login"
                className="text-primary font-bold hover:text-primary/80 transition"
                style={{ color: "#b19671ff" }}
              >
                Inicia sesión aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
