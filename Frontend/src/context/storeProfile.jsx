import {create} from 'zustand';
import axios from 'axios';

// Vamos a obtener el token desde localStorage
const getAuthHeaders = () => {
    const storedUser = JSON.parse(localStorage.getItem("auth-token"))
    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${storedUser?.state?.token}`,
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
            const url = `${import.meta.env.VITE_BACKEND_URL}/owner/perfil`
            const respuesta = await axios.get(url, getAuthHeaders())
            set({ user: respuesta.data })
        } catch (error) {
            console.error(error)
        }
    }
    })
)

export default storeProfile;