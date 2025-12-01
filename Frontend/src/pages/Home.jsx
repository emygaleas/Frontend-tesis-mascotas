import { Link } from "react-router"
import { FaMapMarkerAlt, FaUsers, FaAppleAlt, FaBriefcase, FaQuoteLeft, FaHeart } from "react-icons/fa"
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { DogFact } from "../pages/Dashboard/DogFact.jsx";

export const Home = () => {
  return (
    <>
      {/* HEADER */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Nombre */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5975/5975441.png"
                alt="logo"
                className="w-9 h-9"
              />
              <span
                className="font-bold text-xl bg-clip-text"
              >
                PetConnect
              </span>
            </Link>

            {/* Navegación */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#funcionalidades" className="text-gray-700 hover:text-[#b19671] font-medium">
                Funcionalidades
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-[#b19671] font-medium">
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-[#b19671] font-medium">
                Contacto
              </a>
            </div>

            {/* Botones */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Iniciar Sesión
              </Link>

              <Link
                to="/register"
                className="text-white px-6 py-2 rounded-lg font-medium"
                style={{ backgroundColor: "#b19671" }}
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="flex flex-col items-start justify-end min-h-[80vh] px-6 py-16 bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=1200')",
        }}
      >
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Conectando a las mascotas y dueños de Torres El Pedregal.
          </h2>
          <p className="text-lg text-gray-200">
            Encuentra amigos para tu mascota, monitorea su ubicación, cuida su salud y descubre
            oportunidades en tu comunidad.
          </p>
        </div>

        <div className="flex gap-4 mt-6 flex-wrap">
          <Link
            to="/register"
            className="text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            style={{
              background: "#393832a3",
            }}
          >
            Registrarse Gratis
          </Link>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="px-6 py-20 bg-[#fffaf4]">
        <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
          Funcionalidades diseñadas para ti y tu mascota
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<FaMapMarkerAlt />}
            title="Geolocalización Segura"
            text="Rastrea la ubicación de tu mascota en tiempo real dentro del conjunto residencial."
            gradient="linear-gradient(135deg, #f6dcbf, #fff7e0)"
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Comunidad"
            text="Crea un perfil para tu mascota y conecta con otros dueños."
            gradient="linear-gradient(135deg, #f6dcbf, #fff7e0)"
          />
          <FeatureCard
            icon={<FaAppleAlt />}
            title="Calculadora de Nutrición"
            text="Calcula las necesidades calóricas diarias de tu mascota para mantenerla sana."
            gradient="linear-gradient(135deg, #f6dcbf, #fff7e0)"
          />
          <FeatureCard
            icon={<FaBriefcase />}
            title="Oportunidades Locales"
            text="Encuentra trabajos como paseador o cuidador de mascotas en tu comunidad."
            gradient="linear-gradient(135deg, #f6dcbf, #fff7e0)"
          />
        </div>
      </section>

      {/* API DOG FACTS */}
      {/* DOG FACT – Dato Curioso del Día */}
      <section className="px-6 py-20 bg-[#fffaf4]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
            🐶 Dato Curioso del Día
          </h2>

          <div
            className="p-6 rounded-xl shadow-md mx-auto text-lg font-medium leading-relaxed"
            style={{
              background: "linear-gradient(135deg, #f6dcbf, #fff7e0)",
              border: "1px solid rgba(0,0,0,0.07)"
            }}
          >
            <DogFact />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Cada día aprenderás algo nuevo sobre nuestros amigos peludos. 💛
          </p>
        </div>
      </section>


      {/* TESTIMONIOS */}
      <section id="nosotros" className="py-20 px-6 bg-gray-50 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-10">Lo que dicen nuestros vecinos</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="¡Gracias a PETCONNECT, Max ahora tiene muchos amigos para jugar en el parque!"
            name="Carlos R."
            role="Dueño de Max"
          />
          <Testimonial
            quote="La función de geolocalización me da una tranquilidad inmensa. Saber dónde está Luna no tiene precio."
            name="Ana G."
            role="Dueña de Luna"
          />
          <Testimonial
            quote="Conseguí mi primer trabajo como paseadora de perros gracias a la app. Es genial."
            name="Sofía M."
            role="Paseadora de perros"
          />
        </div>
      </section>

      {/* ÚNETE */}
      <section className="px-6 py-20 text-center">
        <div className="rounded-xl p-10 space-y-6"
          style={{
            background: "linear-gradient(90deg, rgba(177,150,113,0.15), rgba(246,220,191,0.25))"
          }}
        >
          <h2 className="text-3xl font-bold text-black">
            Únete a la comunidad de Torres El Pedregal
          </h2>
          <p className="max-w-xl mx-auto">
            Regístrate hoy y empieza a disfrutar de todos los beneficios que PETCONNECT tiene para ti
            y tu mejor amigo.
          </p>
          <Link
            to="/register"
            className="text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            style={{
              background: "linear-gradient(90deg, #b19671, #d9b58b)",
            }}
          >
            Registrarse Ahora
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacto" className="bg-[#675b4c] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5975/5975441.png"
                  alt="logo"
                  className="w-9 h-9"
                />
                <span className="font-bold">PetConnect</span>
              </div>
              <p className="text-gray-300 text-sm">
                Conectando a los amantes de las mascotas en Torres El Pedregal.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Características</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="text-gray-300">Geolocalización</a></li>
                <li><a href="#" className="text-gray-300">Eventos y Socialización</a></li>
                <li><a href="#" className="text-gray-300">Calculadora de Calorías</a></li>
                <li><a href="#" className="text-gray-300">Empleos Locales</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Torres El Pedregal, Quito
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@petconnect.com" className="hover:text-[#b19671]">
                    info@petconnect.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+593123456789" className="hover:text-[#b19671]">
                    +593 123456789
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Síguenos</h3>
              <div className="flex gap-4 text-gray-300">
                <a href="#" >Facebook</a>
                <a href="#" >Instagram</a>
                <a href="#" >Twitter</a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 PETCONNECT. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>Hecho con</span>
              <FaHeart className="w-4 h-4 text-[#b19671]" />
              <span>para las mascotas</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

/* Subcomponentes */
const FeatureCard = ({ icon, title, text, gradient }) => (
  <div
    className="flex flex-col gap-3 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
    style={{
      background: gradient,
      border: "1px solid rgba(0,0,0,0.05)"
    }}
  >
    <div className="text-[#b19671] text-3xl">{icon}</div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
)

const Testimonial = ({ quote, name, role }) => (
  <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col justify-between">
    <p className="text-base mb-4">
      <FaQuoteLeft className="inline text-[#b19671] mr-2" /> {quote}
    </p>
    <div>
      <h4 className="font-bold text-sm">{name}</h4>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
)
