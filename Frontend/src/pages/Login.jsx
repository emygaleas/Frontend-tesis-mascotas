import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router"; // <- CORRECTO: react-router-dom
import { toast, ToastContainer } from "react-toastify";

import { useFetch } from "../hooks/useFetch";
import { useForm } from "react-hook-form";

import storeAuth from "../context/storeAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const fetchDataBackend = useFetch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Auth store (asegúrate que storeAuth expone setToken y setRol)
  const { setToken, setRol } = storeAuth();

  // loginUser más defensivo
  const loginUser = async (dataForm) => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
      console.log("Enviando login a:", url, "con:", dataForm);

      const response = await fetchDataBackend(url, dataForm, "POST");
      console.log("Respuesta fetchDataBackend:", response);

      if (!response) {
        toast.error("No se recibió respuesta del servidor");
        return;
      }

      // Verifica existencia de token antes de usarlo
      if (!response.token) {
        toast.error(response?.msg || "Credenciales inválidas");
        return;
      }

      // Guardar token/rol en el store (y opcionalmente en localStorage dentro del store)
      setToken(response.token);
      if (response.rol) setRol(response.rol);

      toast.success("Inicio de sesión exitoso");
      // Pequeño delay para que el user vea el toast y no parezca que "no pasó nada"
      setTimeout(() => {
        navigate("/dashboard");
      }, 600);
    } catch (error) {
      console.error("Error en loginUser:", error);
      toast.error("Error al iniciar sesión");
    }
  };

  // onSubmit defensivo: evita recarga aunque algo raro pase
  const onSubmitPrevent = (e) => {
    e.preventDefault(); // fuerza prevenir la recarga
    // Ejecuta el handler de react-hook-form (que validará y hará loginUser)
    return handleSubmit(loginUser)(e);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "#fff7e0" }}>
      <ToastContainer />
      <div className="w-full max-w-lg">
        <Link to="/" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 transition">
          ← Volver al Inicio
        </Link>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-center">
            <img src="https://cdn-icons-png.flaticon.com/128/5975/5975441.png" className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold" style={{ color: "#b19671ff" }}>PETCONNECT</h1>
            <h2 className="text-2xl font-bold mt-4">¡Hola de nuevo!</h2>
            <p className="text-gray-500 mt-4">Inicia sesión en tu cuenta</p>
          </div>

          <div className="p-8">
            {/* aquí uso onSubmitPrevent para asegurar preventDefault */}
            <form className="space-y-6" onSubmit={onSubmitPrevent}>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full pl-4 pr-4 py-3 border rounded-lg border-gray-300"
                  {...register("email", {
                    required: "El correo es obligatorio",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-12 py-3 border rounded-lg border-gray-300"
                    {...register("password", { required: "La contraseña es obligatoria" })}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <MdVisibilityOff size={22} /> : <MdVisibility size={22} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full text-white py-3 rounded-lg font-bold"
                style={{ backgroundColor: "#b19671ff" }}
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 text-sm text-center">
              <Link to="/forgot/id" className="text-primary font-semibold hover:text-primary/80 transition">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <div className="mt-6 text-center text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="text-primary font-bold hover:text-primary/80 transition" style={{ color: "#b19671ff" }}>
                Regístrate aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
