import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { toggleMode, mode } = useContext(ThemeContext);

  return (
    <main className="h-dvh w-full flex" style={{ backgroundColor:  mode === "light" ? "white" : "black"}}>
      <Header />
    </main>
  );
}

export default App;
