import { Navigate, Outlet } from "react-router"
import storeAuth from "../context/storeAuth"


const PublicRoute = () => {

    // Obtengo el token
    const token = storeAuth((state) => state.token)
    
    // Verifico el token
    // Si existe el token, continua navengando al dashboard. Si no. al Outlet
    return token ? <Navigate to="/dashboard" /> : <Outlet />
}

export default PublicRoute