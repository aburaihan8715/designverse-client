import { Link } from "react-router-dom";

const BrandLogo = ({ isHidden }) => {
  return (
    <Link
      to="/"
      className={`${isHidden ? "hidden" : ""}  uppercase sm:inline-block`}
    >
      <div className="inline-flex flex-col">
        <h1 className="bg-gradient-to-r from-pink-500 to-purple-200 bg-clip-text text-3xl tracking-tighter text-secondary text-transparent">
          FashionVerse
        </h1>
        <span className="tracking-[25px]">school</span>
      </div>
    </Link>
  );
};

export default BrandLogo;
