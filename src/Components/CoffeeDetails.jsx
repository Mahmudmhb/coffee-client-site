import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={coffeeDetails.photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {coffeeDetails.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{coffeeDetails.chef}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Add to Cart</div>
            <div className="badge badge-outline">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
