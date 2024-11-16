import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
      {/* Vertical Links */}
      <ul className="nav flex-column ">
        <li className="nav-item ">
          <Link to="/" className="nav-link text-center text-dark">
            <i className="fas fa-home" data-testid="home-icon" /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tasks" className="nav-link text-center text-dark">
            <i className="fas fa-tasks" data-testid="task-icon" /> Tasks
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SideNav;
