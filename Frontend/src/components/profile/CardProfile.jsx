import storeProfile from "../../context/storeProfile.jsx";

export const CardProfile = () => {
    const {user} = storeProfile();

    // Función para formatear fecha ISO a DD/MM/YYYY
    const formatFecha = (fechaISO) => {
    if (!fechaISO) return "";
    const [year, month, day] = fechaISO.split("T")[0].split("-");
    return `${day}/${month}/${year}`;
    };

    return (
        <div className="bg-[#FAF7F2] border border-[#E0D9D1] p-6 rounded-xl shadow-md">

            <div className="space-y-2 text-[#6B4F3A]">
                <p><b>Nombre:</b> <span className="ml-2 text-[#7A6A58]">{user?.nombre}</span></p>
                <p><b>Apellido:</b> <span className="ml-2 text-[#7A6A58]">{user?.apellido}</span></p>
                <p><b>Dirección:</b> <span className="ml-2 text-[#7A6A58]">{user?.direccion}</span></p>
                <p><b>Celular:</b> <span className="ml-2 text-[#7A6A58]">{user?.celular}</span></p>
                <p><b>Correo:</b> <span className="ml-2 text-[#7A6A58]">{user?.email}</span></p>
                <p><b>Fecha de Nacimiento:</b> <span className="ml-2 text-[#7A6A58]">{formatFecha(user?.fechaNacimiento)}</span></p>
            </div>

        </div>
    );
};
