import { Link } from 'react-router'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import { useFetch } from '../hooks/useFetch'

export const Forgot = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const fetchDataBackend = useFetch()

    const sendMail = async (dataForm) => {
        const url = `${import.meta.env.VITE_BACKEND_URL}/recuperarpassword`
        await fetchDataBackend(url, dataForm, 'POST')
    }

    return (

        <div className="flex min-h-screen w-full flex-col md:flex-row" style={{ backgroundColor: "#fff7e0" }}>

            <ToastContainer />

            {/* Imagen — solo visible en pantallas grandes */}
            <div className="relative hidden lg:flex flex-1 items-center justify-center">
                <img 
                    src="/images/forgotCat.jpg"
                    alt="Mascota"
                    className="absolute h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Contenido */}
            <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
                <div className="w-full max-w-md">

                    {/* Header */}
                    <header className="mb-8 flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <img src="https://cdn-icons-png.flaticon.com/128/5975/5975441.png" className="w-16 h-16 mx-auto mb-4" />
                            <span className="text-3xl font-bold tracking-tighter text-black" style={{ color: "#b19671ff" }}>PETCONNECT</span>
                        </div>
                    </header>

                    {/* Card */}
                    <main className="w-full rounded-xl border border-gray-300 bg-white p-6 shadow-md sm:p-8">

                        <div className="flex flex-col items-center">
                            <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-black sm:text-3xl">
                                ¿Olvidaste tu contraseña?
                            </h1>

                            <p className="pt-2 pb-6 text-center text-base text-gray-600">
                                Ingresa tu correo electrónico para recibir instrucciones.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(sendMail)}>

                            {/* Campo correo */}
                            <div className="flex flex-col">
                                <label className="pb-2 text-base font-medium text-black">
                                    Correo Electrónico
                                </label>

                                <div className="group relative flex w-full items-stretch">
                                    <input
                                        type="email"
                                        placeholder="tu.correo@ejemplo.com"
                                        className="form-input h-12 flex-1 rounded-lg border border-gray-300 bg-transparent p-3 text-black placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20"
                                        {...register("email", { required: "El correo electrónico es obligatorio" })}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Botón */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="flex h-12 w-full cursor-pointer items-center justify-center rounded-lg bg-black px-5 text-base font-bold tracking-wide text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-black/30"
                                    style={{ backgroundColor: "#b19671ff" }}
                                >
                                    Enviar correo
                                </button>
                            </div>
                        </form>

                        {/* Link */}
                        <div className="mt-6 text-center">
                            <Link
                                to="/login"
                                className="text-sm font-medium text-black hover:underline"
                            >
                                Volver al Inicio de Sesión
                            </Link>
                        </div>

                    </main>

                </div>
            </div>

        </div>

    )
}