export default function MainMenu() {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-start pt-20">
      <h2 className="text-2xl font-bold mb-6">O que você deseja fazer?</h2>
      <button className="mb-4 w-full bg-blue-500 text-white py-2 rounded-xl">
        Explorar
      </button>
      <button className="mb-4 w-full bg-green-500 text-white py-2 rounded-xl">
        Conversar com IA
      </button>
      <button className="w-full bg-gray-700 text-white py-2 rounded-xl">
        Imprimir Prontuário
      </button>
    </div>
  );
}
