const NotFoundPage = () => {
  return <div>NotFoundPage</div>;
};

export default NotFoundPage;

/*
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-4">
      <Helmet>
        <title>FashionVerse | NotFoundPage</title>
      </Helmet>
      <div>
        <button onClick={() => navigate(-1)} className="btn btn-accent btn-xs">
          go back
        </button>
        <div className="flex items-center justify-center">
          <img src="https://i.ibb.co/YhZ77K0/404.png" alt="404 image" />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
*/
