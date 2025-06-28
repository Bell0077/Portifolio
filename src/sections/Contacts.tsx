export const Contacts = () => {
    return (
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
    )
}