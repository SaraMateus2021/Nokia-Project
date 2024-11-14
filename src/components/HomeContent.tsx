import SideNav from "./SideNav";

function HomeContent() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-sm-2 d-none d-md-block sidebar">
            <SideNav />
          </nav>
          <main className="col-sm-10 ml-sm-auto px-md-5 content">
            <p>Welcome to my task list app.</p>
          </main>
        </div>
      </div>
    </>
  );
}

export default HomeContent;
