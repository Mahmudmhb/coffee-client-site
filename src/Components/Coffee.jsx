import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
  const { name, chef, supplier, taste, category, details, photo, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
          // headers: {
          //     'content-type': 'application/json'
          // },
          // body : JSON.stringify()
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((remain) => remain._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className=" w-4/5 mx-auto ">
      <div>
        <div className="card card-side flex justify-between items-center bg-base-100 p-3 shadow-xl">
          <div>
            <figure>
              <img className="w-60 h-72 " src={photo} alt="Movie" />
            </figure>
          </div>
          <div>
            <h2 className="card-title">name:{name}</h2>
            <h2 className="card-title">Chef:{chef}</h2>
            <p>{details}</p>
          </div>
          <div className="btn-group space-y-3 ">
            <div>
              <Link to={`/coffeedetails/${_id}`}>
                <button className="btn btn-circle">view</button>
              </Link>
            </div>
            <div>
              <Link to={`/coffeeupdate/${_id}`}>
                <button className="btn btn-circle">Edit</button>
              </Link>
            </div>
            <div className="bg-red-500 rounded-full ">
              <button
                onClick={() => handleDelete(_id)}
                className="text-2xl p-3 text-white"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
