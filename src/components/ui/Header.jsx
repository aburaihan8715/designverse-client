import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import BrandLogo from "./BrandLogo";
import LogoutBtn from "./LogoutBtn";
// import useAuth from "../hooks/useAuth";
// import useCartData from "../hooks/useCartData";
// import useRole from "../hooks/useRole";
// import ActiveLink from "./ActiveLink";
// import Button from "./Button";
// import BrandLogo from "./BrandLogo";
// import LogOutBtn from "../features/authentication/LogOutBtn";
// import { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import useClassesData from "../hooks/useClassesData";

// const image_bb_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
// const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_api_key}`;

const Header = () => {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [flags, setFlags] = useState(false);
  // const { user } = useAuth();
  // const { cartData } = useCartData();
  // const { roleData } = useRole();
  // const user = true;
  const role = "admin";

  const menuItems = (
    <>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/instructors">
          Instructors
        </ActiveLink>
      </li>
      <li>
        <ActiveLink className="font-semibold uppercase" to="/courses">
          Courses
        </ActiveLink>
      </li>

      <li>
        <ActiveLink className="font-semibold uppercase" to="/contact">
          Contact
        </ActiveLink>
      </li>
      {/* { pointerEvents: "none", backgroundColor: "grey" } */}

      <li>
        <ActiveLink
          className="font-semibold uppercase"
          to={`/dashboard/${role}`}
        >
          Dashboard
        </ActiveLink>
      </li>

      <li>
        <Link
          to="/dashboard/selectedClasses"
          className="p-0 bg-transparent hover:bg-transparent"
        >
          <button className="bg-transparent btn-sm btn hover:bg-transparent">
            <span className="text-error">
              <FaShoppingCart />
            </span>
            <div className="text-white badge badge-success">+{0}</div>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10">
      <div className="">
        <div className="h-20 px-10 shadow-md navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="z-20 gap-2 p-2 mt-3 shadow dropdown-content menu rounded-box menu-sm ms-auto w-52 bg-base-100"
              >
                {menuItems}
              </ul>
            </div>

            <div>
              <BrandLogo isHidden={true} />
            </div>
          </div>
          <div className="hidden navbar-center lg:flex">
            <ul className="gap-2 px-1 menu menu-horizontal">{menuItems}</ul>
          </div>

          <div className="navbar-end">
            <div className="inline-flex items-center gap-4">
              <Link className="text-white btn-secondary btn" to="/login">
                login
              </Link>

              <div className="relative flex items-center gap-4">
                <button title="Abu Raihan" className="inline-flex items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                  </div>
                </button>

                {/* {isProfileOpen && (
                    <ProfileModal setIsProfileOpen={setIsProfileOpen}>
                      {!flags && (
                        <ProfileCard flags={flags} setFlags={setFlags} />
                      )}
                      {flags && <ProfileEditForm setFlags={setFlags} />}
                    </ProfileModal>
                  )} */}

                <div>
                  <LogoutBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// profile modal
// const ProfileModal = ({ children, setIsProfileOpen }) => {
//   return (
//     <div className="absolute flex flex-col p-2 pb-4 text-center transition duration-100 rounded-md left-1/2 top-16 w-60 -translate-x-2/3 bg-gradient-to-b from-purple-300 to-pink-300 text-gray-50 hover:bg-gradient-to-t sm:right-10">
//       <div onClick={() => setIsProfileOpen(false)} className="self-end">
//         <span className="flex justify-center w-10 h-10 text-2xl bg-red-400 rounded-full cursor-pointer hover:bg-red-600">
//           &times;
//         </span>
//       </div>
//       <div>{children}</div>
//     </div>
//   );
// };

// profile card component
// const ProfileCard = ({ setFlags }) => {
//   const { user } = useAuth();
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center gap-1">
//         <div className="relative">
//           <img
//             className="object-cover p-1 rounded-full h-28 w-28 ring ring-gray-50"
//             src={user?.photoURL}
//             width={100}
//             height={100}
//             alt="profile"
//           />
//           <button
//             onClick={() => setFlags(true)}
//             className="absolute text-white btn-secondary btn-xs btn -right-4 top-1/2"
//           >
//             Edit
//           </button>
//         </div>

//         <h4 className="text-2xl font-semibold capitalize border-b">
//           {user?.displayName}
//         </h4>
//         <div className="font-semibold border-b">
//           {user?.email ? user.email : "unknown"}
//         </div>
//       </div>
//     </>
//   );
// };

// profile edit form component
// const ProfileEditForm = ({ setFlags }) => {
//   const [profileLoading, setProfileLoading] = useState(false);
//   const { updateUserProfile, user } = useAuth();
//   const { axiosSecure } = useAxiosSecure();
//   const { roleData } = useRole();
//   const { refetch } = useClassesData();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setProfileLoading(true);
//     const name = e.target[0].value;
//     const file = e.target[1].files[0];
//     if (!name || file === undefined) return alert("Please Input valid data!!");

//     let imgURL;
//     let formData = new FormData();
//     formData.append("image", file);

//     try {
//       const imageRes = await axios.post(image_hosting_url, formData);
//       const imageData = imageRes.data;

//       if (imageData?.success) {
//         imgURL = imageData.data.display_url;
//       }
//       // call the update profile function
//       await updateUserProfile(name, imgURL);

//       // sent update data to the server
//       await axiosSecure.put(`/users/${user?.email}`, {
//         name,
//         imgURL,
//       });

//       if (roleData.role === "instructor") {
//         await axiosSecure.patch(`/classes?email=${user?.email}`, {
//           name,
//           imgURL,
//         });
//       }

//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "Profile updated successfully!!",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       setFlags(false);
//       setProfileLoading(false);
//       refetch();
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       {/* error message */}
//       {/* {updaterError && (
//         <div className="rounded-md alert alert-error">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6 stroke-current shrink-0"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span>{updaterError}</span>
//         </div>
//       )} */}

//       {/* name input */}
//       <div className="form-control">
//         <label className="label">
//           <span className="font-semibold text-gray-800 label-text">Name</span>
//         </label>
//         <input
//           type="text"
//           defaultValue={user?.displayName}
//           placeholder="Enter name"
//           className="w-full input-bordered input"
//         />
//       </div>

//       {/* image input */}
//       <div className="form-control">
//         <label className="label">
//           <span className="font-semibold text-gray-800 label-text">
//             Pick photo
//           </span>
//         </label>
//         <input
//           type="file"
//           className="w-full file-input-bordered file-input-secondary file-input"
//         />
//       </div>

//       {/* form submit button */}
//       <div className="flex justify-between gap-2 mt-4">
//         <span
//           onClick={() => setFlags(false)}
//           className="btn-secondary btn-xs btn"
//         >
//           back to profile
//         </span>
//         <button className="btn-secondary btn-xs btn" type="submit">
//           {profileLoading && (
//             <span className="loading loading-spinner loading-xs" />
//           )}
//           <span>submit</span>
//         </button>
//       </div>
//     </form>
//   );
// };
