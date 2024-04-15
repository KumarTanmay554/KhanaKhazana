import Card from '../UI/Card';
import Item from './MealItem/Item';
import classes from './Available.module.css';
import {  useEffect, useState } from 'react';



const Available = () => {
  const [meals,setMeals] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [error,setError] = useState()


  useEffect(()=>{
    const fetchMeals = async ()=>{
      const response = await fetch('https://khanakhanzana-305c3-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
      
      if(!response.ok){
        throw new Error('Something went wrong')
      }


      const data = await response.json()

      const loadedMeal =[];
      for(const key in data){
        loadedMeal.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          
        })
      }
      setMeals(loadedMeal)
      setIsLoading(false)
    }
    fetchMeals().catch(error=>{
      setIsLoading(false)
      setError(error.message)

    })



  },[])

  if(isLoading){
    return  <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(error){
    return <section className={classes.MealsError}>
      <p>{error}</p>
    </section>
  }


  const mealsList = meals.map((meal) => (
    <Item
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Available;