import { useState } from "react";
import styles from "./category.module.scss";
import Product from "../Product/Product";

const Category = ({ menuItems, name }) => {
  const [showProduct, setShowProduct] = useState(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.items}>
        {menuItems &&
          menuItems.map((item) => (
            <div
              key={item.id}
              className={styles.item}
              onClick={() => setShowProduct(item)}
            >
              <div className={styles.backImage}>
                <span>$ {item.priceSell}</span>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdlU0HypoZhNoYEBC06joHHjc7-R8orZsVPA&s"
                  alt=""
                />
              </div>
              <div className={styles.name}>{item.name[0].value}</div>
            </div>
          ))}
      </div>
      {showProduct && (
        <div
          className={styles.modalBackdrop}
        >
          <Product
            name={showProduct.name[0].value}
            onClick={() => setShowProduct(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Category;
