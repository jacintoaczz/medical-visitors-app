import "./App.css";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <div className="container">
        <Hero />
      </div>
    </main>
  );
}

export default App;
