
import storeProfile from "../context/storeProfile";

const Panel = () => {
  const { user } = storeProfile();

  return (
    <div className="space-y-10">

      {/* === SALUDO DEL USUARIO === */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-extrabold text-[#675b4c]">
          ¡Hola {user?.nombre || "Usuario"}!
        </h1>

        {/* Avatar perro estilo plantilla */}
        <div
          className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-[#b19671]"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/194/194279.png')",
          }}
        ></div>
      </div>

      {/* ======================== */}
      {/*  UBICACIÓN DE MASCOTA    */}
      {/* ======================== */}

      <section>
        <h2 className="text-2xl font-bold text-[#675b4c] mb-4">
          Ubicación de Mascota
        </h2>

        <div className="bg-white rounded-xl shadow-sm border border-[#eee7d7] p-6">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* MAPA O CUADRO VACÍO */}
            <div className="md:col-span-2 bg-[#fffaf0] border border-[#f0e6c8] rounded-xl h-40 flex items-center justify-center text-gray-400">
              <p>Aún no hay mapa disponible</p>
            </div>

            {/* INFO DE UBICACIÓN */}
            <div className="bg-[#fdf6e3] border border-[#f0e6c8] rounded-xl p-4 flex flex-col justify-between">
              
              <div>
                <p className="flex items-center gap-2 text-gray-700 font-medium">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  En casa
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Última actualización: <span className="font-medium">Ahora mismo</span>
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Torres El Pedregal, Quito
                </p>
              </div>

              <button className="mt-4 bg-[#c8b185] hover:bg-[#b39a6c] transition text-white text-sm py-2 rounded-lg">
                Ver en vivo
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ======================== */}
      {/*      PRÓXIMOS EVENTOS     */}
      {/* ======================== */}

      <section>
        <h2 className="text-2xl font-bold text-[#675b4c] mb-4">
          Próximos Eventos
        </h2>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-[#f1e5c7]">

          {/* EVENTO 1 */}
          <div className="flex justify-between items-center p-4 bg-[#fff7e0] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                <span className="text-orange-600 text-xl">💉</span>
              </div>

              <div>
                <p className="font-semibold text-[#675b4c]">Vacuna anual</p>
                <p className="text-sm text-gray-600">Recordatorio de salud</p>
              </div>
            </div>

            <p className="font-semibold text-orange-600">En 3 días</p>
          </div>

          {/* EVENTO 2 */}
          <div className="flex justify-between items-center p-4 bg-[#fff7e0] rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
                <span className="text-blue-600 text-xl">✂️</span>
              </div>

              <div>
                <p className="font-semibold text-[#675b4c]">Cita en peluquería</p>
                <p className="text-sm text-gray-600">Aseo y cuidado</p>
              </div>
            </div>

            <p className="font-semibold text-gray-600">Mañana</p>
          </div>

        </div>
      </section>

      {/* ======================== */}
      {/*     ACCIONES RÁPIDAS     */}
      {/* ======================== */}

      <section>
        <h2 className="text-2xl font-bold text-[#675b4c] mb-4">
          ¿Qué quieres hacer hoy?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-[#f1e5c7] hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-[#f7f2b0] rounded-full flex items-center justify-center mb-3">
              <span className="text-3xl">🔥</span>
            </div>
            <p className="font-semibold text-lg text-[#675b4c]">
              Calculadora de Calorías
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-[#f1e5c7] hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-[#f7f2b0] rounded-full flex items-center justify-center mb-3">
              <span className="text-3xl">🤝</span>
            </div>
            <p className="font-semibold text-lg text-[#675b4c]">
              Socialización (Pet-Match)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-[#f1e5c7] hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-[#f7f2b0] rounded-full flex items-center justify-center mb-3">
              <span className="text-3xl">💼</span>
            </div>
            <p className="font-semibold text-lg text-[#675b4c]">
              Empleo para Veterinarios
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center border border-[#f1e5c7] hover:shadow-xl transition">
            <div className="w-14 h-14 mx-auto bg-[#f7f2b0] rounded-full flex items-center justify-center mb-3">
              <span className="text-3xl">🐶</span>
            </div>
            <p className="font-semibold text-lg text-[#675b4c]">
              Configurar Perfil de Mascota
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Panel;
