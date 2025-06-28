import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Home } from "./sections/Home";
import { Contacts } from "./sections/Contacts";


function App() {
  return (
    <div className="min-h-screen bg-primary w-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contacts /> 
    </div>
  );
}

export default App;
