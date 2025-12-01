import { create } from 'zustand'

// Importar para usar el metodo
import { persist } from 'zustand/middleware'

const storeAuth = create(
    // Crear un metodo
    persist(
        set => ({
            token: null,
            rol: null,
            // Funcion token: recibo el token y automaticamente lo setea
            setToken: (token) => set({token}),
            setRol: (rol) => set ({rol}),
            clearToken: () => set ({ token: null, rol: null }), // Para cuando el usuario cierre sesión
        }),
        {name: 'auth-token'} // En auth-token se almacenará la información
    )
)

export default storeAuth