const ErrorMessage = ({ children }) => {
  return (
    <p className="my-4 text-center font-medium text-red-500">{children}</p>
  );
};

export default ErrorMessage;
