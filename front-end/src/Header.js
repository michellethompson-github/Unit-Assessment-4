import React from "react";

class Header extends React.Component {

    render(){
    return (
        <header className="header">
            <div className="brand">
                <a href="index.html">GardenersPlus+</a>
            </div>
            <div className="header-links">
                <a href="signin">Sign In</a>
            </div>
        </header>
    );
}
}
export default Header;