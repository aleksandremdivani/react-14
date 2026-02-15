import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Header = () => {
    const {toggleMode, mode} = useContext(ThemeContext);

    return (
        <header>
            <button onClick={toggleMode}
            className="border cursor-pointer"
             style={{
                color: mode === "light" ? "black" : "white"
            }}>
                Switch to {mode === "light"? "dark" : "light"}
            </button>
        </header>
    )
} 
 
export default Header;