import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { authenticationUsingGoogle, authenticationUsingGithub } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // google authentication handler
  const authenticationUsingGoogleHandler = () => {
    authenticationUsingGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // github authentication handler
  const authenticationUsingGithubHandler = () => {
    authenticationUsingGithub()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="flex gap-6 justify-center">
        {/* <button className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/Y7nTmxp/facebook.png" />
          </div>
        </button> */}

        <button onClick={authenticationUsingGoogleHandler} className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/72bXZqD/google.png" />
          </div>
        </button>

        <button onClick={authenticationUsingGithubHandler} className="avatar">
          <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/JHJ7PMt/github.png" />
          </div>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
