export const Navbar = () => {
  return (
    <nav className="bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <div className="text-white text-lg font-bold">LOGO</div>
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex gap-24">
          <li>
            <a href="#home" className="hover:outline-none">
              <button className="bg-primary border w-32 border-white hover:shadow-3d text-white font-bold py-2 px-4 rounded-none transition-all duration-200 focus:outline-none focus:ring-0 outline-none">
                Home
              </button>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white focus:outline-none focus:ring-0"
            >
              <button className="bg-primary border w-32 border-white hover:shadow-3d text-white font-bold py-2 px-4 rounded-none transition-all duration-200 focus:outline-none focus:ring-0 outline-none">
                Sobre mim
              </button>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white focus:outline-none focus:ring-0"
            >
              <button className="bg-primary border w-32 border-white hover:shadow-3d text-white font-bold py-2 px-4 rounded-none transition-all duration-200 focus:outline-none focus:ring-0 outline-none">
                Habilidades
              </button>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white focus:outline-none focus:ring-0"
            >
              <button className="bg-primary border w-32 border-white hover:shadow-3d text-white font-bold py-2 px-4 rounded-none transition-all duration-200 focus:outline-none focus:ring-0 outline-none">
                Contatos
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
