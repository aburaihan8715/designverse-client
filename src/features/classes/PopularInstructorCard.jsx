import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  return (
    <div data-aos="zoom-in" className="card bg-base-100 shadow-md rounded">
      <figure>
        <img className="w-full h-40 object-cover transition duration-700 hover:scale-105" src={item.user.image} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {item.user.name}</h2>
        <p>Email: {item.user.email}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeClasses/${item._id}`}>
            <button className="btn btn-sm btn-secondary btn-outline">See Classes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
