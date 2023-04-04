// import "./Navbar.css";
import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import imgLogo from "../../assets/images/logo.png";
export const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div>
        <img
          className={styles.containerNavbarImgLogo}
          src="https://res.cloudinary.com/ds305gx9n/image/upload/v1680583875/logo_ijyhcp.png"
          alt="Logo de mi tienda"
        />
      </div>
      <div>
        <form class="d-flex" role="search">
          <input
            className={styles.containerNavBarInput}
            type="search"
            placeholder="Search"
          ></input>
          <button className={styles.containerNavBarInputBtn} type="submit">
            {" "}
            Buscar
          </button>
        </form>
      </div>
      <div>
        <ul className={styles.containerNavbarUl}>
          <li className={styles.containerNavBarUlLi}>Electrodomésticos</li>
          <li className={styles.containerNavBarUlLi}>Televisión</li>
          <li className={styles.containerNavBarUlLi}>Sonido</li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};
