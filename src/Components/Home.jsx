import { Outlet } from "react-router-dom";
import Header from "./Header";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
  // const { hello } = useContext(AuthContext);
  // console.log(hello);
  return (
    <div className="mx-auto ">
      <Header></Header>
      <h1>this is home page </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
