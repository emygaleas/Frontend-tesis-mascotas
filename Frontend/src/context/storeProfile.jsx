import {create} from 'zustand';
import axios from 'axios';
import {toast} from 'react-toastify'

// Vamos a obtener el token desde localStorage
const getAuthHeaders = () => {
    const stored = JSON.parse(localStorage.getItem("auth-token"))
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: stored?.token 
                ? `Bearer ${stored.token}`
                : "",
        },
    }
}

// Método para obtener la información del perfil 

const storeProfile = create((set) => ({
        
    user: null,
    clearUser: () => set({ user: null }),
    // Petición
    profile: async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/perfil`

            console.log("TOKEN ENVIADO:" , getAuthHeaders());
            const respuesta = await axios.get(url, getAuthHeaders())
            set({ user: respuesta.data })
        } catch (error) {
            console.error(error)
        }
    },
    // Actualizar perfil dentro de perfil
    updateProfile: async (url, data) => {
        try{
            const respuesta = await axios.put(url, data, getAuthHeaders()) 
            set({user: respuesta.data})
            toast.success("Perfil actualizado correctamente")
        }catch (error){
            console.log(error)
            toast.error(error.response?.data?.msg)
        }
    }
    ,
    // Actualizar contraseña dentro de perfil
    updatePasswordProfile:async(url,data)=>{
        try {
            const respuesta = await axios.put(url, data, getAuthHeaders())
            return respuesta
        } catch (error) {
            console.error(error)
            toast.error(error.response?.data?.msg)
        }
    }
    })
)

export default storeProfile;