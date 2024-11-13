import SideNav from "./SideNav";

function MainContent() {
  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <SideNav />
          <div className="col-sm-10">
            <h3>Tasks</h3>
            <ul>
              <li>
                Task 1
              </li>
              <li>
                Task 2
              </li>
              <li>
                Task 3
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
