const Coffees = () => {
  const handleAddTOCoffee = (event) => {
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
    // console.log(addDetailsOFCoffe);

    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addDetailsOFCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // form.reset();
        alert("successfully");
      });
  };
  return (
    <div className=" w-5/6 mx-auto">
      {/* <h1>this is coffee page</h1> */}

      <form onSubmit={handleAddTOCoffee}>
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
          />
        </div>
        <div className=" w-full">
          <button className="btn btn-success w-full text-white mt-5">
            <input type="submit" value="Add Coffee" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Coffees;
