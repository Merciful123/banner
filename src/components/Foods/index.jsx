import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import styles from "./index.module.css";

const FoodTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [meals, setMeals] = useState([]);

  // Fetch food categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        // Limit to 6 categories
        const fetchedCategories = response.data.categories.slice(0, 6);
        setCategories(fetchedCategories);
        if (fetchedCategories.length > 0) {
          setSelectedCategory(fetchedCategories[0].strCategory);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch meals based on selected category
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        );
        setMeals(response.data.meals);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    fetchMeals();
  }, [selectedCategory]);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Food Categories"
        selectedKey={selectedCategory}
        onSelectionChange={setSelectedCategory}
        color="success"
        variant="bordered"
        className="flex justify-center overflow-x-auto max-sm:flex-col relative max-sm:top-[290px] w-full p-1 mx-auto mt-4 "
      >
        {categories.map((category) => (
          <Tab
            key={category.strCategory}
            title={category.strCategory}
            className={`mt-0 rounded-[32px]   px-2  flex ${
              selectedCategory === category.strCategory ? styles.activeTab : " "
            }`}
          >
            <div
              className={`${styles.cardContainer} mx-auto flex flex-wrap justify-center gap-5 max-sm:mt-[300px]`}
            >
              {meals.map((meal) => (
                <Card key={meal.idMeal} className={`${styles.cardColumn} p-2 `}>
                  <div
                    className={`${styles.foodCard} flex gap-5 h-[200px] justify-center items-center`}
                  >
                    <CardBody>
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="h-[200px] max-sm:h-[150px] max-sm:w-[150px] w-[200px] object-cover rounded-[50%]"
                      />
                    </CardBody>
                    <div className="flex items-start flex-col gap-2">
                      {/* <CardHeader> */}
                      <p>Title: {meal.strMeal}</p>
                      {/* </CardHeader> */}
                      <p className="text-gray-800">Price: $10</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default FoodTabs;
