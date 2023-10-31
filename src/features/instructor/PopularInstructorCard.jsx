import { useState } from "react";
import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  const [love, setLove] = useState(false);
  return (
    <div
      data-aos="zoom-in"
      className="card relative rounded-md border shadow-md hover:shadow-white"
    >
      <figure className="">
        <img
          className="h-40 w-full object-cover transition duration-500 hover:scale-105"
          src={item.instructorImage}
          alt="instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span>{item.instructorName}</span>
          <button onClick={() => setLove(!love)}>
            {!love && <span>🤍</span>}
            {love && <span>🧡</span>}
          </button>
        </h2>

        <p>{item.instructorEmail} 💌</p>
        <p>{item.phoneNumber} ☎</p>

        <div className="">
          <Link to={`/seeClasses/${item.instructorEmail}`}>
            <button className="btn-secondary btn-outline btn-block btn-sm btn">
              See Classes ↗
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
