import { ReactNode } from "react";
import Header from "./Header";
import SideNav from "./SideNav";

interface LayoutProps {
    children: ReactNode;
  }
  
const Layout = ({children} : LayoutProps) => {
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-sm-2 d-none d-md-block sidebar">
                        <SideNav />
                    </nav>
                    <main className="col-sm-10 ml-sm-auto col-lg-10 px-md-5 content">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
} 

export default Layout;