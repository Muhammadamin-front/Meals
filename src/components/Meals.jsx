import axios from "axios";
import "../index.css"
import { useEffect, useState } from "react";
const Meals = () => {
const [items,setItems] = useState([])
useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res) =>{
        console.log(items);
        
        setItems(res.data.meals)
    })
    .catch(error =>{
        return error
    })
},[])
const itemslist = items.map(({strMeal,strMealThumd,idMeal})=>{
    return (
        <section key={idMeal} className="card">
            <img src={strMealThumd} alt="Image" />
            <section className="content">
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
})

  return <div>
{itemslist}
  </div>;
};

export default Meals;
