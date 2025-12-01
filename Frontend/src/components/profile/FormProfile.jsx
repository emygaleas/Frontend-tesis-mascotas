import { useEffect } from "react"
import storeProfile from "../../context/storeProfile"
import { useForm } from "react-hook-form"
import { ToastContainer } from "react-toastify"

const FormProfile = () => {

    const {user, updateProfile} = storeProfile()
    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const updateUser = (dataForm) =>{
        const url = `${import.meta.env.VITE_BACKEND_URL}/auth/actualizar-perfil/${user._id}`
        updateProfile(url, dataForm)
    }

    useEffect(() => {
        if(user){
            reset({
                nombre: user?.nombre,
                apellido: user?.apellido,
                direccion: user?.direccion,
                celular: user?.celular,
                email: user?.email
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <form className="bg-[#FAF7F2] border border-[#E0D9D1] p-6 rounded-xl shadow-md" onSubmit={handleSubmit(updateUser)}>
            <ToastContainer />

            <h2 className="text-2xl font-semibold text-[#6B4F3A] mb-4">Editar Datos Personales</h2>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Nombre</label>
                <input 
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                    {...register("nombre", { required: "El nombre es obligatorio" })}
                />
                {errors.nombre && <p className="text-red-800">{errors.nombre.message}</p>}
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Apellido</label>
                <input 
                    type="text"
                    placeholder="Ingresa tu apellido"
                    className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                    {...register("apellido", { required: "El apellido es obligatorio" })}
                />
                {errors.apellido && <p className="text-red-800">{errors.apellido.message}</p>}
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Dirección</label>
                <input 
                    type="text"
                    placeholder="Ingresa tu dirección"
                    className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                    {...register("direccion", { required: "La dirección es obligatoria" })}
                />
                {errors.direccion && <p className="text-red-800">{errors.direccion.message}</p>}
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Celular</label>
                <input 
                    type="text"
                    placeholder="Ingresa tu teléfono"
                    className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                    {...register("celular", { required: "El celular es obligatorio" })}
                />
                {errors.celular && <p className="text-red-800">{errors.celular.message}</p>}
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Correo electrónico</label>
                <input 
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                    {...register("email", { 
                        required: "El correo es obligatorio",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                    })}
                />
                {errors.email && <p className="text-red-800">{errors.email.message}</p>}
            </div>

            <div>
                <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">Fecha de Nacimiento</label>
                <input
                type="date"
                className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                {...register("fechaNacimiento", { required: "La fecha de nacimiento es obligatoria" })}
            />
            {errors.fechaNacimiento && <p className="text-red-800">{errors.fechaNacimiento.message}</p>}
            </div>

            <input
                type="submit"
                className="bg-[#6B4F3A] text-white w-full p-2 mt-5 uppercase font-bold rounded-lg hover:bg-[#8C6F55] cursor-pointer transition-all"
                value="Actualizar"
            />

        </form>
    )
}

export default FormProfile
