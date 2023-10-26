import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  return (
    <div
      data-aos="zoom-in"
      className="card relative rounded-md border shadow-md hover:shadow-white"
    >
      <figure>
        <img
          className="h-40 w-full object-cover transition duration-500 hover:scale-105"
          src={item.instructorImage}
          alt="instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {item.instructorName}</h2>
        <p>Email: {item.instructorEmail}</p>
        <div className="card-actions justify-end">
          <Link to={`/seeClasses/${item.instructorEmail}`}>
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
