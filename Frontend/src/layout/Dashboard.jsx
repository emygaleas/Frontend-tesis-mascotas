import { Link, Outlet, useLocation } from "react-router";
import { DogFact } from "../pages/dashboard/DogFact";
import { AvatarStyles } from "../pages/dashboard/Avatar";

// Rutas privadas del dashboard
import storeAuth from "../context/storeAuth"

// Traer información del usuario
import storeProfile from "../context/storeProfile";

export const Dashboard = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  // Boton salir
  const {clearToken} = storeAuth();

  // Información del usuario
  const { user } = storeProfile();

  const links = [
    { to: "/dashboard", name: "Inicio", icon: "🏠" },
  ];

  return (
    <div className="md:flex md:min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="md:w-64 bg-white border-r border-gray-200 flex flex-col justify-between" style={{ backgroundColor: "#fff7e0" }}>
        <div>
          <h2 className="text-3xl font-extrabold text-center text-[#b19671] mt-5">PetConnect</h2>

          <div className="flex flex-col items-center mt-6">
            <img
              src={user?.foto || "https://cdn-icons-png.flaticon.com/128/2335/2335114.png"}
              alt="Usuario"
              className="w-20 h-20 rounded-full border-2 border-[#675b4c] p-1"
            />
            {/* Nombre de usuario */}
            <p className="text-gray-600 mt-3 text-sm">
              Bienvenido, <span className="font-semibold">{user?.nombre || "Usuario"}</span>
            </p>
            {/* Rol de usuario */}
            <p className="text-gray-400 text-xs">
              Rol: {user?.rol || "Residente"}
            </p>
          </div>

          <nav className="mt-8 space-y-2 px-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${urlActual === link.to
                    ? "bg-[#f7f2b0] text-black shadow"
                    : "text-gray-600 hover:bg-black-100"
                  }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Boton salir */}
        <div className="p-4 border-t border-gray-200">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#674c4c] hover:bg-red-700 text-white py-2 rounded-lg font-semibold text-sm"
            onClick={() => clearToken()}
          >
            🚪 Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 p-8 space-y-8 overflow-y-auto">

        <header className="flex justify-between items-center px-6 py-3 bg-[white] border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-700">
            Dashboard / {links.find((link) => link.to === urlActual)?.name || ""}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-2xl">🔔</span>
            </button>
            <img
              src={user?.foto || "https://cdn-icons-png.flaticon.com/512/4715/4715329.png"}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-green-500"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">

          {/* Sección de APIs */}

          {/* Avatares Section */}
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Avatares disponibles</h2>
            </div>

            <AvatarStyles/>
          </section>

          {/* Dog Facts Section */}
          <DogFact/>
          <Outlet />
        </main>

        <footer className="bg-white border-t border-gray-200 py-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PetConnect. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;