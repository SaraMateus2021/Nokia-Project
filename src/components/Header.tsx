const Header = () => {
  return (
    <>
      <div className="container-fluid d-flex align-items-center p-5 bg-white text-black border border-2 border-dark header">
        <a className="navbar-brand me-3" href="#">
          <img
            src="../../public/nokia-logo.svg"
            alt="Bootstrap Logo"
            width="150"
            height="60"
            className="d-inline-block align-text-top"
          />
        </a>

        <div className="flex-grow-1 d-flex justify-content-center">
          <h1 className="m-0 text-primary">New App</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
