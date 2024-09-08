import styles from "./product.module.scss";

const Product = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className={styles.product}>
      <div className={styles.left}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlU0HypoZhNoYEBC06joHHjc7-R8orZsVPA&s"
          alt=""
        />
      </div>
      <div className={styles.right}>
        <h3>Name: {name}</h3>
        <h4>category</h4>
        <span>price</span>
        <div className={styles.price}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <ul>
          <li>Size: Large</li>
          <li>Nuts: Hazelnut, 2 x Almond, Macadamia </li>
          <li>Syrups: Vanilla, Honey</li>
          <li>Fruits: Banana, 2 x Raspberry</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
