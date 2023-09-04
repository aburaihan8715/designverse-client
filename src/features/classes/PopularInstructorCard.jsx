import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  return (
    <div key={item._id} className="card bg-base-100 shadow-md rounded">
      <figure>
        <img className="w-full h-40 object-cover" src={item.user.image} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {item.user.name}</h2>
        <p>Email: {item.user.email}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeClasses/${item._id}`}>
            <button className="btn btn-sm btn-secondary">See Classes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
