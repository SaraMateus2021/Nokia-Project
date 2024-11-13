function SideNav() {
  return (
    <>
      <div className="col-sm-2 border=1">
        <h3>Menu</h3>
        {/* Vertical Links */}
        <div className="d-flex flex-column">
          <a href="#" className="text-decoration-none mb-2">
            Home
          </a>
          <a href="#" className="text-decoration-none">
            Task
          </a>
        </div>
      </div>
    </>
  );
}

export default SideNav;
