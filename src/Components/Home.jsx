import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div className="mx-auto ">
      <Header></Header>
      {/* <h1>this is home page</h1> */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
