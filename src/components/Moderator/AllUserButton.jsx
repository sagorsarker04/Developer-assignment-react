import { useNavigate } from "react-router-dom";

const AllUsersButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/all-users")}
      className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
    >
      View All Users
    </button>
  );
};

export default AllUsersButton;
