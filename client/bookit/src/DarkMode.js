import "./styles/DarkMode.css"
import "./styles/styles.css"

function DarkMode()  {
const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
}

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
}

const storedTheme = localStorage.getItem("theme");

const defaultDark =
  storedTheme === "dark"

if (defaultDark) {
  setDark();
}

const toggleTheme = (e) => {
    if (e.target.checked) {
      setDark();
    } else {
      setLight();
    }
  };

 
    return (

      <div className="toggle-theme-wrapper">
        <span className="slider round">Dark Mode</span>
        <label className="toggle-theme" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"

            onChange={toggleTheme}
            defaultChecked={defaultDark}
          />
          <div className="slider round"></div>
        </label>
      </div>
    );
  };
  
  export default DarkMode;