import React from "react";
import { Link } from "react-router-dom";
import "./header_css.scss"
import { signOutFromGoogle } from "../../database/configDb"
import { ReactComponent as Logo } from "./crown.svg"

const Header = (props) =>
{
    console.log(props.param)
    return (<div className="header">
        <Link to="/"> <Logo /></Link>
        <div className="headerLinks">
            <Link to="/shop">Shop</Link>
            <Link to="/shop">Contact</Link>
            {props.param == null ?
                <Link to="/signin"> SignIn </Link> : <Link to="/signin" onClick={signOutFromGoogle}> SignOut </Link>}
        </div>
    </div>)
}

export default Header