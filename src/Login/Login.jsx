import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const handleLoginFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    handleLogin(email, password)
      .then((result) => {
        console.log(result.user);
        alert("successfully login");
        const lastTimelogin = result.user.metadata.lastSignInTime;
        const users = { email, lastTimelogin };
        console.log(lastTimelogin);
        fetch(`http://localhost:5000/users/`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        console.log(error);
        alert(`${error}`);
      });
    fetch(``);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold py-5">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLoginFrom} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link className="p-4" to="/signup">
              {" "}
              are you new? please{" "}
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
