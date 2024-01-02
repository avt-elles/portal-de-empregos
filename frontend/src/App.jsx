import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
      <footer>Rodapé</footer>
    </>
  );
}

export default App;
