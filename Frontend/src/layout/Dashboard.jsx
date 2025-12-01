import { Link, Outlet, useLocation } from "react-router";
import { AvatarStyles } from "../pages/Dashboard/Avatar.jsx";

// Rutas privadas
import storeAuth from "../context/storeAuth";
import storeProfile from "../context/storeProfile";

const Dashboard = () => {
  const { clearToken } = storeAuth();
  const { user } = storeProfile();
  const location = useLocation();
  const urlActual = location.pathname;

  return (
    <div className="md:flex md:min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <aside
        className="md:w-64 border-r border-gray-300 flex flex-col justify-between"
        style={{ backgroundColor: "#fff7e0" }}
      >
        <div>
          {/* LOGO */}
          <h2 className="text-3xl font-extrabold text-center text-[#b19671] mt-5">
            PetConnect
          </h2>

          {/* USER INFO */}
          <div className="flex flex-col items-center mt-6">
            <img
              src={
                user?.foto ||
                "https://cdn-icons-png.flaticon.com/128/2335/2335114.png"
              }
              alt="Usuario"
              className="w-20 h-20 rounded-full border-2 border-[#675b4c] p-1"
            />

            <p className="text-gray-600 mt-3 text-sm">
              Bienvenido,{" "}
              <span className="font-semibold">{user?.nombre || "Usuario"}</span>
            </p>

            <p className="text-gray-400 text-xs">Rol: {user?.rol || "Invitado"}</p>
          </div>

          {/* MENU */}
          <nav className="mt-8 space-y-2 px-4">

            {/* INICIO */}
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                urlActual === "/dashboard"
                  ? "bg-[#f7f2b0] text-black shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">🏠</span>
              Inicio
            </Link>

            {/* PERFIL */}
            <Link
              to="/dashboard/profile"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                urlActual === "/dashboard/profile"
                  ? "bg-[#f7f2b0] text-black shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">👤</span>
              Perfil
            </Link>

            {/* LISTAR */}
            <Link
              to="/dashboard/list"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                urlActual === "/dashboard/list"
                  ? "bg-[#f7f2b0] text-black shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">📄</span>
              Listar
            </Link>

            {/* CREAR */}
            <Link
              to="/dashboard/create"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                urlActual === "/dashboard/create"
                  ? "bg-[#f7f2b0] text-black shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">➕</span>
              Crear
            </Link>

            {/* CHAT */}
            <Link
              to="/dashboard/chat"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition ${
                urlActual === "/dashboard/chat"
                  ? "bg-[#f7f2b0] text-black shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">💬</span>
              Chat
            </Link>

          </nav>
        </div>

        {/* SALIR */}
        <div className="p-4 border-t border-gray-300">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-[#674c4c] hover:bg-red-700 text-white py-2 rounded-lg font-semibold text-sm"
            onClick={() => clearToken()}
          >
            🚪 Cerrar sesión
          </Link>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <div className="flex-1 flex flex-col bg-gray-50">
        
        {/* HEADER */}
        <header className="flex justify-between items-center px-6 py-3 bg-white border-b">
          <h1 className="text-lg font-semibold text-gray-700">
            Dashboard /{" "}
            {urlActual === "/dashboard"
              ? "Inicio"
              : urlActual === "/dashboard/profile"
              ? "Perfil"
              : urlActual === "/dashboard/list"
              ? "Listar"
              : urlActual === "/dashboard/create"
              ? "Crear"
              : urlActual === "/dashboard/chat"
              ? "Chat"
              : ""}
          </h1>

          <div className="flex items-center gap-4">
            <button className="relative text-2xl">
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              🔔
            </button>
            <img
              src={
                user?.foto ||
                "https://cdn-icons-png.flaticon.com/512/4715/4715329.png"
              }
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-green-500"
            />
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1 overflow-y-auto p-6 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Avatares disponibles
            </h2>
            <AvatarStyles />
          </section>
          <Outlet />
        </main>

        <footer className="bg-white border-t py-3 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PetConnect. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
