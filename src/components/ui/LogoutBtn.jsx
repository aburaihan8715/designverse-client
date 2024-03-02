import { useNavigate } from "react-router-dom";
import useUserAuth from "../../hooks/useUserAuth";

const LogOutBtn = () => {
  const { logOutUser } = useUserAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    await logOutUser();
    navigate("/");
  };
  return (
    <button onClick={logOutHandler} className="text-white btn-secondary btn">
      logout
    </button>
  );
};

export default LogOutBtn;
