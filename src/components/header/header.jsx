import React from "react";
import { Link } from "react-router-dom";
import "./header_css.scss"
import { signOutFromGoogle } from "../../database/configDb"
import { ReactComponent as Logo } from "./crown.svg"
import { connect } from 'react-redux'
import PopoverPage from "../cart_popover/cart_popover"

const Header = (props) =>
{

    return (<div className="header">
        <Link to="/"> <Logo /></Link>

        <div className="headerLinks">
            <Link to="/shop">Shop</Link>
            <Link to="/shop">Contact</Link>
            {props.currentUser == null ?
                <Link to="/signin"> SignIn </Link> : <Link to="/signin" onClick={signOutFromGoogle}> SignOut </Link>
            }
            <PopoverPage/>
        </div>            
    </div >
    )
}
const mapStateToProps = (state) =>
{
    return { currentUser: state.user.currentUser };
};
export default connect(mapStateToProps)(Header)
