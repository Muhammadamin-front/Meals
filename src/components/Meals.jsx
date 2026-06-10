import axios from "axios";
import "../index.css"
import { useEffect, useState } from "react";
const Meals = () => {
    const API = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
const [items,setItems] = useState([])
useEffect(()=>{
    axios.get(API)
    .then((res) =>{
        setItems(res.data.meals)
    })
    .catch(error =>{
        return error
    })
},[])
const itemslist = items.map(({strMeal,strMealThumb,idMeal})=>{
    return (
        <section key={idMeal} className="card">
            <img src={strMealThumb} alt={strMeal} />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
})

  return <div className="cards">
{itemslist}
  </div>;
};

export default Meals;
