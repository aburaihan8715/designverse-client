import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCartData from "../hooks/useCartData";
import useRole from "../hooks/useRole";
import ActiveLink from "./ActiveLink";
import Button from "./Button";
import BrandLogo from "./BrandLogo";
import LogOutBtn from "../features/authentication/LogOutBtn";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_bb_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_bb_api_key}`;

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [flags, setFlags] = useState(false);
  const { user } = useAuth();
  // console.log(user);
  const { cartData } = useCartData();
  // console.log(cartData);
  const { roleData } = useRole();
  // console.log(roleData);

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
        <ActiveLink className="font-semibold uppercase" to="/classes">
          Classes
        </ActiveLink>
      </li>

      <li>
        <ActiveLink className="font-semibold uppercase" to="/contact">
          Contact us
        </ActiveLink>
      </li>
      {/* { pointerEvents: "none", backgroundColor: "grey" } */}
      {user && roleData?.role && (
        <li>
          <ActiveLink
            className="font-semibold uppercase"
            to={`/dashboard/${roleData?.role}`}
          >
            Dashboard
          </ActiveLink>
        </li>
      )}

      {user && roleData?.role === "student" && cartData?.length > 0 && (
        <li>
          <Link
            to="/dashboard/selectedClasses"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <button className="btn-sm btn bg-transparent hover:bg-transparent">
              <span className="text-error">
                <FaShoppingCart></FaShoppingCart>
              </span>
              <div className="badge badge-success text-white">
                +{cartData?.length || 0}
              </div>
            </button>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="fixed left-0 right-0 top-0 z-20">
      <div className="">
        <div className="navbar h-20 bg-base-100 px-10 shadow-md">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                className="dropdown-content menu rounded-box menu-sm z-20 ms-auto mt-3 w-52 gap-2 bg-base-100 p-2 shadow"
              >
                {menuItems}
              </ul>
            </div>

            <div>
              <BrandLogo isHidden={true} />
            </div>
          </div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{menuItems}</ul>
          </div>

          <div className="navbar-end">
            <div className="inline-flex items-center gap-4">
              {!user && (
                <Link to="/login">
                  <Button className="btn-secondary text-white">login</Button>
                </Link>
              )}

              {user && (
                <div className="relative flex items-center gap-4">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    title={user.displayName}
                    className="inline-flex items-center"
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </button>

                  {isProfileOpen && (
                    <ProfileModal setIsProfileOpen={setIsProfileOpen}>
                      {!flags && (
                        <ProfileCard flags={flags} setFlags={setFlags} />
                      )}
                      {flags && <ProfileEditForm setFlags={setFlags} />}
                    </ProfileModal>
                  )}

                  <div>
                    <LogOutBtn />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// profile modal

const ProfileModal = ({ children, setIsProfileOpen }) => {
  return (
    <div className="absolute right-10 top-16 flex w-60 flex-col rounded-md bg-gradient-to-b from-purple-300 to-pink-300 p-2 pb-4 text-center text-gray-50 transition duration-100 hover:bg-gradient-to-t">
      <div onClick={() => setIsProfileOpen(false)} className="self-end">
        <span className="flex h-10 w-10 cursor-pointer justify-center rounded-full bg-red-400 text-2xl hover:bg-red-600">
          &times;
        </span>
      </div>
      <div>{children}</div>
    </div>
  );
};

// profile card component
const ProfileCard = ({ setFlags }) => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="relative">
          <img
            className="rounded-full p-1 ring ring-gray-50"
            src={user?.photoURL}
            width={100}
            height={100}
            alt="profile"
          />
          <button
            onClick={() => setFlags(true)}
            className="btn-secondary btn-xs btn absolute -right-4 top-1/2 text-white"
          >
            Edit
          </button>
        </div>

        <h4 className="border-b text-2xl font-semibold capitalize">
          {user?.displayName}
        </h4>
        <div className="border-b font-semibold">
          {user?.email ? user.email : "unknown"}
        </div>
      </div>
    </>
  );
};

// profile edit form

const ProfileEditForm = ({ setFlags }) => {
  const { updateUserProfile, user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const file = e.target[1].files[0];

    if (!name || file === undefined) return alert("Please Input valid data!!");
    // console.log(name);
    // console.log(file);

    let imgURL;
    let formData = new FormData();
    formData.append("image", file);

    try {
      const imageRes = await axios.post(image_hosting_url, formData);
      const imageData = imageRes.data;
      // console.log(data);

      if (imageData?.success) {
        imgURL = imageData.data.display_url;
      }
      const profileUpdateRes = await updateUserProfile(name, imgURL);
      console.log("1st", profileUpdateRes);

      const userUpdateRes = await axiosSecure.put(`/users/${user?.email}`, {
        name,
        imgURL,
      });
      console.log("2st", userUpdateRes);
      const classesUpdateRes = await axiosSecure.patch(
        `/classes?email=${user?.email}`,
        {
          name,
          imgURL,
        },
      );
      console.log("3st", classesUpdateRes);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile updated successfully!!",
        showConfirmButton: false,
        timer: 1500,
      });
      setFlags(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      {/* error message */}
      {/* {updaterError && (
        <div className="alert alert-error rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{updaterError}</span>
        </div>
      )} */}

      {/* name input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-gray-800">Name</span>
        </label>
        <input
          type="text"
          defaultValue={user?.displayName}
          placeholder="Enter name"
          className="input-bordered input w-full"
        />
      </div>

      {/* image input */}
      <div className="form-control">
        <label className="label">
          <span className="label-text font-semibold text-gray-800">
            Pick photo
          </span>
        </label>
        <input
          type="file"
          className="file-input-bordered file-input-secondary file-input w-full"
        />
      </div>

      {/* form submit button */}
      <div className="mt-4 flex justify-between gap-2">
        <span
          onClick={() => setFlags(false)}
          className="btn-secondary btn-xs btn"
        >
          back to profile
        </span>
        <button className="btn-secondary btn-xs btn" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};
