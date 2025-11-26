// Importar
import { Navigate } from "react-router"
import storeAuth from "../context/storeAuth"

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {

    // Setear el token
    const token = storeAuth(state => state.token)
    
    // Retornar el token
    // Si existe el token, carga las rutas hijas; Si no, regresa al login
    return token ?  children  : <Navigate to="/login" replace />
}

export default ProtectedRoute