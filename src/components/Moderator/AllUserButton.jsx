import { useNavigate } from "react-router-dom";

const AllUsersButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/all-users")}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      All Users
    </button>
  );
};

export default AllUsersButton;
