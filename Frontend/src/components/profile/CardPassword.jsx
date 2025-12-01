import {useForm} from 'react-hook-form'
import storeProfile from '../../context/storeProfile'
import storeAuth from '../../context/storeAuth'
import {ToastContainer} from 'react-toastify'

const CardPassword = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {user, updatePasswordProfile} = storeProfile()
    const {clearToken} = storeAuth()
    // en cada input colocar {...register('nombreDelCampo',{validaciones})}

    const updatePassword = async (dataForm) => { 
        const url = `${import.meta.env.VITE_BACKEND_URL}/auth/actualizar-password/${user._id}`
        const response = await updatePasswordProfile(url, dataForm)
        if (response){
            clearToken()
        }   
    }

    return (
        <>
        <ToastContainer />
            <div className="bg-[#FAF7F2] border border-[#E0D9D1] p-6 rounded-xl mt-8 shadow-md">

                <h1 className="font-black text-2xl text-[#6B4F3A] mb-4">
                    Actualizar contraseña
                </h1>
                <hr className="mb-4 border-[#E0D9D1]" />

                <form onSubmit={handleSubmit(updatePassword)}>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">
                            Contraseña actual
                        </label>
                        <input 
                            type="password"
                            placeholder="Ingresa tu contraseña actual"
                            className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                            {...register('passwordactual', { required: true })}
                        />
                        {errors.passwordactual && <p className="text-red-500 text-sm mb-4">La contraseña actual es obligatoria</p>}
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-semibold text-[#6B4F3A]">
                            Nueva contraseña
                        </label>
                        <input 
                            type="password"
                            placeholder="Ingresa la nueva contraseña"
                            className="block w-full rounded-md border border-[#DBCDBF] bg-white py-2 px-3 text-[#7A6A58] mb-5"
                            {...register('passwordnuevo', { required: true })}
                        />
                        {errors.passwordnuevo && <p className="text-red-500 text-sm mb-4">La nueva contraseña es obligatoria</p>}
                    </div>

                    <input
                        type="submit"
                        className="bg-[#6B4F3A] text-white w-full p-2 mt-2 uppercase font-bold rounded-lg hover:bg-[#8C6F55] cursor-pointer transition-all"
                        value="Cambiar"
                    />

                </form>

            </div>
        </>
    )
}

export default CardPassword
