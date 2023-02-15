import { NavLink } from "react-router-dom";

function RouteLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Job router</h1>
                    <NavLink to = "/">Home</NavLink>
                    <NavLink to ="about">About</NavLink>
                </nav>
            </header>
           
        </div>
      );
}

export default RouteLayout ;