import SideNav from "./SideNav";
import TaskList from "./TaskList";

function MainContent() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-2 d-none d-md-block sidebar">
            <SideNav />
          </nav>
          <main className="col-sm-10 ml-sm-auto px-md-5 content">
            <TaskList />
          </main>
        </div>
      </div>
    </>
  );
}

export default MainContent;
