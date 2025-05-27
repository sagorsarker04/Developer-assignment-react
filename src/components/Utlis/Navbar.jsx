import { Link } from "react-router-dom";
import Logout from "./logout";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center mb-4">
      <div className="text-lg font-bold">AffpilotAuth</div>
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/dashboard" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/settings" className="hover:underline">
            Settings
          </Link>
        </li>
        <li>
          <Logout/>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
