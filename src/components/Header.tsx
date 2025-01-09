import { NavLink} from "react-router-dom";
// import { DarkMode } from "./DarkMode";
import styles from "./Header.module.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import sidebar from "../assets/sidebar-svg.png";

export default function Header(
//   {
//   isDark,              DARKMODE
//   setIsDark,
// }: {
//   isDark: boolean;
//   setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
// }

){

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const desplegarNavbar = () => {
   setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
    <header className={styles.header}>
      <NavLink to={"/"} className={styles.logo}>
        <img className={styles.logoImg} src={logo} alt="logo" />
      </NavLink>
      <nav className={styles.navbar}>
        <button className={styles.buttonSidebar} title="a" onClick={desplegarNavbar}><img className={styles.imageSidebar} title="sidebar" src={sidebar}></img></button>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${styles.navLinkClass} ${isActive ? styles.active : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"women"}
          className={({ isActive }) =>
            `${styles.navLinkClass} ${isActive ? styles.active : ""}`
          }
        >
          Women
        </NavLink>
        <NavLink
          to={"men"}
          className={({ isActive }) =>
            `${styles.navLinkClass} ${isActive ? styles.active : ""}`
          }
        >
          Men
        </NavLink>
        <NavLink
          to={"kids"}
          className={({ isActive }) =>
            `${styles.navLinkClass} ${isActive ? styles.active : ""}`
          }
        >
          Kids
        </NavLink>
        <NavLink
          to={"beauty"}
          className={({ isActive }) =>
            `${styles.navLinkClass} ${isActive ? styles.active : ""}`
          }
        >
          Beauty
        </NavLink>
      </nav>
      {/* <div className={styles.darkmode}> DARKMODE
        <DarkMode
          isChecked={isDark}
          handleChange={(e) => setIsDark(e.target.checked)}
        />
      </div> */} 
      
    </header>
    <div 
      className={`${styles.overlay} ${isSidebarOpen ? styles.open : ''}`}
      onClick={() => setIsSidebarOpen(false)}
    />

    {/* Sidebar */}
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <NavLink to={"/"} className={styles.logo}>
          <img className={styles.logoImg} src={logo} alt="logo" />
        </NavLink>
        <button 
          onClick={() => setIsSidebarOpen(false)}
          className={styles.closeButton}
        >
          x
        </button>
      </div>

      {/* Contenido del sidebar */}
      <nav className={styles.sidebarNav}>
        <NavLink onClick={() => setIsSidebarOpen(false)} to={"/"}>Home</NavLink>
        <NavLink onClick={() => setIsSidebarOpen(false)} to={"women"}>Women</NavLink>
        <NavLink onClick={() => setIsSidebarOpen(false)} to={"men"}>Men</NavLink>
        <NavLink onClick={() => setIsSidebarOpen(false)} to={"kids"}>Kids</NavLink>
        <NavLink onClick={() => setIsSidebarOpen(false)} to={"beauty"}>Beauty</NavLink>
      </nav>

      {/* Información adicional */}
      <div className={styles.sidebarInfo}>
        <h3>Información Adicional</h3>
        <ul>
          <li>
            <NavLink onClick={() => setIsSidebarOpen(false)} to={"contacto"}>Contacto</NavLink>
            </li>
          <li>Sobre Nosotros</li>
          <li>Ayuda</li>
        </ul>
      </div>
    </div>
    </>
  );
}
