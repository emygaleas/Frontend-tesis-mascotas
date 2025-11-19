import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 Validaciones frontend
    if (!email || !password) {
      return toast.error("Debes llenar todos los campos");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Ingresa un correo válido");
    }

    if (password.length < 6) {
      return toast.error("La contraseña debe tener al menos 6 caracteres");
    }

    // 🔹 Simulación de login exitoso
    toast.success("¡Login exitoso!");
    localStorage.setItem("token", "mock-token"); // guardamos un token falso
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ backgroundColor: "#fff7e0" }}>
      <ToastContainer />
      <div className="w-full max-w-lg">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition">
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full pl-4 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent border-gray-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent border-gray-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                className="block w-full text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center"
                style={{ backgroundColor: "#b19671ff" }}
              >
                Iniciar Sesión
              </button>
            </form>

            <div className="mt-6 text-sm text-center">
              <Link to="/forgot/id" className="text-primary font-semibold hover:text-primary/80 transition">¿Olvidaste tu contraseña?</Link>
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
