import { useNavigate } from "react-router-dom";
import Container from "../../components/Container/Container";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="py-4">
      <Container>
        <button onClick={() => navigate(-1)} className="btn btn-accent btn-xs">
          go back
        </button>
        <div className="flex justify-center items-center">
          <img src="https://i.ibb.co/YhZ77K0/404.png" alt="404 image" />
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
