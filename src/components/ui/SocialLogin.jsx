import { useNavigate } from "react-router-dom";
import useUserAuth from "../../hooks/useUserAuth";

const SocialLogin = () => {
  const { authenticationUsingGoogle, authenticationUsingGithub } =
    useUserAuth();
  const navigate = useNavigate();

  const googleHandler = async () => {
    try {
      await authenticationUsingGoogle();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const githubHandler = async () => {
    try {
      await authenticationUsingGithub();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center gap-6 p-3 border rounded-md">
      <button onClick={googleHandler} className="avatar">
        <div className="w-5 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
          <img src="https://i.ibb.co/72bXZqD/google.png" />
        </div>
      </button>

      <button onClick={githubHandler} className="avatar">
        <div className="w-5 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
          <img src="https://i.ibb.co/JHJ7PMt/github.png" />
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;

// import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const SocialLogin = () => {
//   const { authenticationUsingGoogle, authenticationUsingGithub } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const from = location.state?.from?.pathname || "/";

//   // google authentication handler
//   const authenticationUsingGoogleHandler = async () => {
//     try {
//       const result = await authenticationUsingGoogle();
//       const loggedInUser = result.user;
//       const userData = {
//         name: loggedInUser.displayName,
//         email: loggedInUser.email,
//       };
//       await fetch("http://localhost:5000/users", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       navigate(from, { replace: true });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // github authentication handler
//   const authenticationUsingGithubHandler = async () => {
//     try {
//       const result = await authenticationUsingGithub();
//       const loggedInUser = result.user;
//       const userData = {
//         name: loggedInUser.displayName,
//         email: loggedInUser.email,
//       };

//       await fetch("http://localhost:5000/users", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });
//       navigate(from, { replace: true });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center gap-6 p-3 border rounded-md">
//         {/* <button className="avatar">
//           <div className="w-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
//             <img src="https://i.ibb.co/Y7nTmxp/facebook.png" />
//           </div>
//         </button> */}

//         <button onClick={authenticationUsingGoogleHandler} className="avatar">
//           <div className="w-5 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
//             <img src="https://i.ibb.co/72bXZqD/google.png" />
//           </div>
//         </button>

//         <button onClick={authenticationUsingGithubHandler} className="avatar">
//           <div className="w-5 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
//             <img src="https://i.ibb.co/JHJ7PMt/github.png" />
//           </div>
//         </button>
//       </div>
//     </>
//   );
// };

// export default SocialLogin;
