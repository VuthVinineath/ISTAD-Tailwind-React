import { Alert, Button, Carousel } from "flowbite-react";
import "./App.css";
import NavbarComponent from "./components/header/NavbarComponent";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
      </header>
      <main className="h-screen bg-gradient-to-r from-indigo-800"></main>
    </>
  );
}

export default App;
