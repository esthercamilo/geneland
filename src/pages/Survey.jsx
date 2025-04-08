export default function Survey({ onComplete }) {
  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-start pt-20">
      <h2 className="text-xl font-bold mb-4">Início do Questionário</h2>
      <p className="text-gray-600 mb-6">
        Pergunta 1: Como você está se sentindo hoje?
      </p>

      {/* Simulação de resposta */}
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
        onClick={onComplete}
      >
        Continuar
      </button>
    </div>
  );
}
