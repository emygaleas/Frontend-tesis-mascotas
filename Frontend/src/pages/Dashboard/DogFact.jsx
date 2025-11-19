import { useState, useEffect } from "react";
import axios from "axios";

export const DogFact = () => {
    
    const [factEn, setFactEn] = useState("");
    const [factEs, setFactEs] = useState("");
    const [loading, setLoading] = useState(true);

    const getFact = async () => {
        setLoading(true);
        try {
            const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/dogs/random-fact");
            console.log(response.data);
            setFactEs(response.data.fact_es); // accedemos al primer elemento del array
            setFactEn(response.data.fact_en);
        } catch (error) {
            console.error("Error al obtener el dato:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getFact();
    }, []);

    if (loading)
        return <p className="text-center mt-8 text-lg text-gray-500">Cargando dato curioso...</p>;

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">🐾 Dato Curioso sobre Perros</h2>

            <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
                <p className="text-gray-700 mb-2 text-lg">🇪🇸 {factEs}</p>
                <p className="text-gray-800 font-semibold text-lg">🇺🇸 {factEn}</p>
            </div>

            <button
                onClick={getFact}
                className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
            >
                🎲 Obtener otro dato
            </button>
        </div>
    );
};