"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function page({ params }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-5 md:p-10 w-full bg-base-300">
      <h1 className="text-4xl md:text-6xl text-primary mb-10">
        {params.category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {meals.map((meal) => (
          <div className="card card-compact w-72 md:w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-72 md:w-96 h-auto" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{meal.strMeal}</h2>
              <Link
                className="card-actions justify-end"
                href={`/meal/${meal.idMeal}`}
              >
                <button className="btn btn-primary">Try</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default page;
