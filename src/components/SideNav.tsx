import { Link } from "react-router-dom";
function SideNav() {
  return (
    <>
        {/* Vertical Links */}
        <ul className="nav flex-column ">
         <li className="nav-item ">
            <Link to="/" className="nav-link text-center text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tasks" className="nav-link text-center text-dark">
               Tasks
            </Link>
          </li>
        </ul>
    </>
  );
}

export default SideNav;
