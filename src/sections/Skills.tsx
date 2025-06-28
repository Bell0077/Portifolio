export const Skills = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Habilidades</h2>
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
              <p className="text-gray-600">Git, VS Code, Vite, Webpack, NPM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
