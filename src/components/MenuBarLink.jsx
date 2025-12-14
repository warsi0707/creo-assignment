import { memo } from "react";
import { Link } from "react-router";

function MenuBarLink({link, title, text}){
    return (
        <Link to={`${link}`} title={title} className="hover:text-green-secondary">{text}</Link>
    )
}

export default  memo(MenuBarLink)