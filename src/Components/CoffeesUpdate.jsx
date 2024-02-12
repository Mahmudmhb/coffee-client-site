import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeesUpdate = () => {
  const updatedata = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, _id } =
    updatedata;
  // console.log(updatedata);

  const handleUpdateCoffee = (event) => {
    console.log("hitting update");

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addDetailsOFCoffe = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(addDetailsOFCoffe);

    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addDetailsOFCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Coffee has been Updated",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <h1>this is update page{updatedata.name}</h1>

      <form onSubmit={handleUpdateCoffee}>
        <div className="mx-auto grid grid-cols-2 g gap-4">
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Chef</span>
            </div>
            <input
              type="text"
              placeholder="Chef"
              className="input input-bordered w-full"
              name="chef"
              defaultValue={chef}
            />
          </div>
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Supplier</span>
            </div>
            <input
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full"
              name="supplier"
              defaultValue={supplier}
            />
          </div>
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              placeholder="Taste"
              className="input input-bordered w-full"
              name="taste"
              defaultValue={taste}
            />
          </div>
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered w-full"
              name="category"
              defaultValue={category}
            />
          </div>
          <div className=" w-full">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered w-full"
              name="details"
              defaultValue={details}
            />
          </div>
        </div>
        <div className=" w-full">
          <div className="label">
            <span className="label-text">Photo</span>
          </div>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered w-full"
            name="photo"
            defaultValue={photo}
          />
        </div>
        <div className=" w-full">
          <button className="btn btn-success w-full text-white mt-5">
            <input type="submit" value="Update Coffee" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoffeesUpdate;
