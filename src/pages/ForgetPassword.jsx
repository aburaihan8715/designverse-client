import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";

const ForgetPassword = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-md rounded-md border p-4 shadow-lg">
        <div>
          <h1 className="mb-4 text-center text-3xl uppercase">
            forget password
          </h1>
        </div>

        <div>
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
