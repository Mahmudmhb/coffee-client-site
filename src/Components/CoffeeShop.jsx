import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";

const CoffeeShop = () => {
  const totalCoffee = useLoaderData();
  // console.log(totalCoffee);
  const [coffees, setCoffees] = useState(totalCoffee);
  console.log(coffees);
  return (
    <div>
      <h1>total coffees {coffees.length}</h1>
      <div className="grid grid-cols-2">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default CoffeeShop;
