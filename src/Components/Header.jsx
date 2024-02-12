import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center my-10 border ">
      <NavLink className="mr-5 text-xl" to="/">
        home
      </NavLink>
      <NavLink className="mr-5 text-xl" to="/coffees">
        Add Coffees
      </NavLink>

      <NavLink className="mr-5 text-xl" to="/coffeeshop">
        CoffeesShop
      </NavLink>
    </div>
  );
};

export default Header;
