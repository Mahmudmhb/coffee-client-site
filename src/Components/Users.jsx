import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const totalUsers = useLoaderData();
  //   console.log(totalUsers);
  const [loaderUsers, setLoaderUsers] = useState(totalUsers);
  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        }).then((result) => {
          console.log(result);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          const remailing = loaderUsers.filter((remain) => remain._id !== id);
          setLoaderUsers(remailing);
        });
      }
    });
  };

  return (
    <div className="text-center">
      <h1 className="text center text-5xl text-bold">
        total users {loaderUsers.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>creation Time</th>
              <th>last Time login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loaderUsers.map((user) => (
              <tr key={user._id}>
                <th>{user._id}</th>
                <td>{user.email}</td>
                <td>{user.creationTime}</td>
                <td>{user.lastTimelogin}</td>
                <td
                  onClick={() => handleDelete(user._id)}
                  className="btn my-1 "
                >
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
