import React from "react";
import CardRender from "./CardRender";
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
    const location = useLocation();
    return (
        <>
            <div className="nav_rows">
                <div className="nav_col">
                    <div className="nav_cont">
                        <div className="nav_links">
                            <Nav activeKey={location.pathname} >
                                <li><Link to='/materials/cement' style={{ color: "white" }}>Cement</Link></li>
                                <li><Link to='/materials/bricks' style={{ color: "white" }}>Bricks</Link></li>
                                <li><Link to='/materials/steel' style={{ color: "white" }}>TMT Steel</Link></li>
                                <li><Link to='/materials/concrete' style={{ color: "white" }}>Concrete</Link></li>
                                <li><Link to='/materials/sand' style={{ color: "white" }}>Sand</Link></li>
                                <li><Link to='/materials/glass' style={{ color: "white" }}>Glass</Link></li>
                                <li><Link to='/materials/timber' style={{ color: "white" }}>Timber</Link></li>
                            </Nav>
                        </div>
                    </div>
                </div>
                <div className="nav_col">
                    <div className="item_col">
                        <CardRender />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideNav;