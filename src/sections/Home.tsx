export const Home = () => {
    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4 py-16 flex">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Meu Portfólio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              React + TypeScript + Tailwind CSS
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Projeto configurado com sucesso! 🎉
              </h2>
              <p className="text-gray-600 mb-6">
                Agora você pode começar a desenvolver seu portfólio.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  React
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Vite
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}