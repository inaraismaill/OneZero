// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import styles from "./menu.module.scss";
import Category from "../components/Category/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, selectCategoryById } from "../app/features/menuSlice";

const Menu = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["menuData"],
  //   queryFn: () => fetch("/menu.json").then((res) => res.json()),
  //   retry: false,
  // });

  //useQuery və Tailwind ilə yazırdım sonra şərtlərə diqqət yetirdikdən sonra dəyişdim bu hissələri, tailwindin yüklənmiş olma səbəbidə budur.

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const categoryClick = (id) => {
    dispatch(selectCategoryById(id));
    setSelectedCategoryId(id);
  };

  const { allFetchData, isLoading, error, selectedCategory } = useSelector(
    (state) => state.menu
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!allFetchData) return <div>No data available</div>;

  const filteredCategories = allFetchData.data?.categories?.filter(
    (item) => !item.isArchived
  );

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h1 className={styles.title}>MENU</h1>
        <ul className={styles.list}>
          <li
            onClick={() => categoryClick(null)}
            className={`${styles.listItem} ${
              selectedCategoryId === null ? styles.selected : ""
            }`}
          >
            ALL
          </li>
          {filteredCategories &&
            filteredCategories?.map((item) => (
              <li
                key={item.id}
                className={`${styles.listItem} ${
                  selectedCategoryId === item.id ? styles.selected : ""
                }`}
                onClick={() => categoryClick(item.id)}
              >
                {item.name[0]?.value || "Unnamed"}
              </li>
            ))}
        </ul>
      </div>
      <div>
        {selectedCategoryId != null ? (
          <Category
            menuItems={selectedCategory?.menuItems}
            name={selectedCategory?.name[0].value}
          />
        ) : (
          filteredCategories &&
          filteredCategories?.map((item) => (
            <Category
              key={item.id}
              menuItems={item?.menuItems}
              name={item?.name[0].value}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
