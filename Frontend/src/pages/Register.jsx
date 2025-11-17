import { useState } from "react";
import {MdVisibility, MdVisibilityOff, MdEmail, MdLock, MdPerson, MdHome, MdPhone} from "react-icons/md";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useFetch } from "../hooks/useFetch";
import { ToastContainer } from "react-toastify";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const fetchDataBackend = useFetch();

  const registerUser = async (dataForm) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/register`;
    await fetchDataBackend(url, dataForm, "POST");
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/071/057/139/small/cat-background-cat-wallpaper-four-adorable-puppies-and-kittens-with-paws-on-a-white-surface-cat-background-free-photo.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[#f6f8f6]/60 backdrop-blur-sm"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold mb-6 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al Inicio
        </Link>
        <ToastContainer />

        <div className="flex flex-col gap-8 rounded-2xl p-8 shadow-2xl bg-[#fff7e0]/90 backdrop-blur-md">
          {/* Header */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5975/5975441.png"
                alt="logo"
                className="w-20 h-20 mb-2 mr-3"
              />
              <h1
                className="text-5xl font-black tracking-tight"
                style={{ color: "#b19671ff" }}
              >
                PETCONNECT
              </h1>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-900 text-2xl font-bold leading-tight tracking-tight">
                Crea tu cuenta
              </p>
              <p className="text-gray-800 text-base">
                Únete a la comunidad de mascotas de Torres El Pedregal
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit(registerUser)} className="flex flex-col gap-6">
            {/* Información del Dueño */}
            <div>
              <h3 className="mb-4 text-lg font-bold text-gray-800 border-b border-gray-500 pb-2">
                Información del Dueño
              </h3>

              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Nombre</p>
                  <div className="relative">
                    <MdPerson className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type="text"
                      placeholder="Ingresa tu nombre"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-4 text-gray-800"
                      {...register("nombre", { required: "El nombre es obligatorio" })}
                    />
                  </div>
                  {errors.nombre && <p className="text-red-700 text-sm">{errors.nombre.message}</p>}
                </label>

                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Apellido</p>
                  <div className="relative">
                    <MdPerson className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type="text"
                      placeholder="Ingresa tu apellido"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-4 text-gray-800"
                      {...register("apellido", { required: "El apellido es obligatorio" })}
                    />
                  </div>
                  {errors.apellido && <p className="text-red-700 text-sm">{errors.apellido.message}</p>}
                </label>
              </div>

              {/* Dirección */}
              <div className="mt-4">
                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Dirección</p>
                  <div className="relative">
                    <MdHome className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type="text"
                      placeholder="Ingresa tu dirección de domicilio"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-4 text-gray-800"
                      {...register("direccion", { required: "La dirección es obligatoria" })}
                    />
                  </div>
                  {errors.direccion && (
                    <p className="text-red-700 text-sm">{errors.direccion.message}</p>
                  )}
                </label>
              </div>

              {/* Celular, Correo y Fecha */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Celular</p>
                  <div className="relative">
                    <MdPhone className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type="text"
                      placeholder="Ingresa tu celular"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-4 text-gray-800"
                      {...register("celular", { required: "El celular es obligatorio" })}
                    />
                  </div>
                  {errors.celular && <p className="text-red-700 text-sm">{errors.celular.message}</p>}
                </label>

                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Correo Electrónico</p>
                  <div className="relative">
                    <MdEmail className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type="email"
                      placeholder="Ingresa tu correo"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-4 text-gray-800"
                      {...register("email", { required: "El correo es obligatorio" })}
                    />
                  </div>
                  {errors.email && <p className="text-red-700 text-sm">{errors.email.message}</p>}
                </label>

                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Fecha de Nacimiento</p>
                  <input
                    type="date"
                    className="rounded-lg border border-gray-400 bg-white/80 h-12 px-4 text-gray-800"
                    {...register("fechaNacimiento", {
                      required: "La fecha de nacimiento es obligatoria",
                    })}
                  />
                  {errors.fechaNacimiento && (
                    <p className="text-red-700 text-sm">{errors.fechaNacimiento.message}</p>
                  )}
                </label>
              </div>

              {/* Contraseña */}
              <div className="mt-4 relative">
                <label className="flex flex-col">
                  <p className="text-sm font-medium pb-2">Contraseña</p>
                  <div className="relative">
                    <MdLock className="absolute left-4 top-3 text-[#b19671ff]" size={22} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="************"
                      className="w-full rounded-lg border border-gray-400 bg-white/80 h-12 pl-12 pr-10 text-gray-800"
                      {...register("password", { required: "La contraseña es obligatoria" })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
                    >
                      {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="text-red-700 text-sm">{errors.password.message}</p>}
                </label>
              </div>
            </div>

            {/* Botón de acción */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                type="submit"
                className="flex items-center justify-center w-full rounded-lg bg-[#b19671ff] h-12 text-base font-bold text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
              >
                Registrarse
              </button>
              <p className="text-center text-sm text-gray-800">
                ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="font-bold text-[#b19671ff]/90 hover:text-[#b19671ff]">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
