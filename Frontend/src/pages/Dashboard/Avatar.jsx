import { useState, useEffect } from "react";
import axios from "axios";

export const AvatarStyles = () => {
  const [styles, setStyles] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStyles = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/avatar/styles");
      setStyles(response.data.styles);
    } catch (error) {
      console.error("Error al obtener los estilos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStyles();
  }, []);

  if (loading) return <p className="text-center mt-8 text-lg">Cargando estilos...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">🎨 Estilos de Avatares</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {styles.map((style) => (
          <div
            key={style.name}
            className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <p className="font-semibold text-lg text-gray-800 capitalize">{style.name.replace("-", " ")}</p>
            <p className="mt-2 text-gray-600 text-sm">{style.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};