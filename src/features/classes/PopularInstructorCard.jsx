import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  return (
    <div data-aos="zoom-in" className="card shadow-md rounded relative hover:shadow-xl">
      <figure>
        <img className="w-full h-40 object-cover transition duration-700 hover:scale-105" src={item.user.userImage} alt="instructor" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {item.user.userName}</h2>
        <p>Email: {item.user.userEmail}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeClasses/${item.user.userEmail}`}>
            <button className="btn btn-sm btn-secondary btn-outline">See Classes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
