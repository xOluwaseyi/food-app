import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-app-4198e-default-rtdb.firebaseio.com/meal.json"
      );
      // if (!response.ok) {
      //   throw new Error("Something went wrong");
      // }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section className={classes.mealsLoading}>
        <h1>{httpError}</h1>
      </section>
    );
  }

  return (
    <>
      {isLoading && (
        <section className={classes.mealsLoading}>
          <h1>Meals are loading...</h1>
        </section>
      )}
      {!isLoading && (
        <section className={classes.meals}>
          <Card>
            <ul>
              {meals.map((meal) => {
                return <MealItem key={meal.id} {...meal} />;
              })}
            </ul>
          </Card>
        </section>
      )}
    </>
  );
};

export default AvailableMeals;
