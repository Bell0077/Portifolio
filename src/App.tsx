import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";

function App() {
  return (
    <div className="min-h-screen bg-primary w-screen">
      <Navbar />

      {/* Seção Home */}
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

      {/* Seção About */}
      <About />

      {/* Seção Habilidades */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Habilidades
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Frontend
                </h3>
                <p className="text-gray-600">
                  React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Backend
                </h3>
                <p className="text-gray-600">
                  Node.js, Express, Python, APIs REST
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Ferramentas
                </h3>
                <p className="text-gray-600">
                  Git, VS Code, Vite, Webpack, NPM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contatos */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Contatos</h2>
            <p className="text-xl text-gray-600 mb-8">
              Vamos trabalhar juntos! Entre em contato comigo.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="mailto:seu@email.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
