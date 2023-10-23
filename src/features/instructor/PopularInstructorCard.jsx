import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      className="card relative rounded shadow-md hover:shadow-white"
    >
      <figure>
        <img
          className="h-40 w-full object-cover transition duration-500 hover:scale-105"
          src={item.user.userImage}
          alt="instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {item.user.userName}</h2>
        <p>Email: {item.user.userEmail}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeClasses/${item.user.userEmail}`}>
            <button className="btn-secondary btn-outline btn-sm btn">
              See Classes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
