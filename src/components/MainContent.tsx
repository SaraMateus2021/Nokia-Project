import SideNav from "./SideNav";
import TaskList from "./TaskList";

function MainContent() {
  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <SideNav />
          <div className="col-sm-10">
            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
