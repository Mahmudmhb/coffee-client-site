import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  // console.log(handleSign);
  const { handleSignUp } = useContext(AuthContext);
  // console.log(conext);
  // const  = conext;
  const handleSign = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const signUpUser = { email, password };
    // console.log(signUpUser);
    handleSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Successfuly registart");
        const email = result.user.email;
        const creationTime = result.user.metadata.creationTime;
        const signUpEnail = { email, creationTime: creationTime };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(signUpEnail),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        // const lastime =
        console.log(email);
      })
      .catch((error) => {
        console.log(error);
        alert(`${error}`);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className=" ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold py-5">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSign} className="card-body">
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <Link className="p-4" to="/login">
              {" "}
              Do you have Acount?{" "}
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
