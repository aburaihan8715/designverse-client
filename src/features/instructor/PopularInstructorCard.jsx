import { Link } from "react-router-dom";

const PopularInstructorCard = ({ item }) => {
  const followerHandler = () => {
    alert("Not implement yet!!");
  };
  return (
    <div
      data-aos="zoom-in"
      className="card relative rounded-md border shadow-md hover:shadow-white"
    >
      <figure className="">
        <img
          className="object-cover"
          src={item.instructorImage}
          alt="instructor"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.instructorName}</h2>
        <div className="space-x-2">
          <span>Follower</span>
          <button
            onClick={followerHandler}
            className="badge badge-secondary cursor-pointer text-white hover:shadow-lg hover:shadow-white"
          >
            +99
          </button>
        </div>
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
