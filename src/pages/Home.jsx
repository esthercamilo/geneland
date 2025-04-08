export default function Home({ onStart }) {
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center justify-start pt-20">
      <h1 className="text-3xl font-bold text-center mb-4">
        <img src="src/assets/logo.png" width={"300"} />
      </h1>

      <p className="text-gray-600 text-center mb-6">
        Genética como base, saúde como destino
      </p>

      <button
        className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        onClick={onStart}
      >
        Descubra
      </button>
    </div>
  );
}
