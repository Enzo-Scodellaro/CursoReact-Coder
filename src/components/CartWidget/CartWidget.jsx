import { GiShoppingCart } from "react-icons/gi";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <div className={styles.cart}>
      <GiShoppingCart className={styles.cartMenuIcon} size={20} />
      <span className={styles.cartMenuNum}>0</span>
    </div>
  );
};

export default CartWidget;
