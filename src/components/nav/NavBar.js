import React from "react";
import { Link, useHistory } from "react-router-dom";


export const NavBar = () => {

    const history = useHistory()

    return (
        <>
            <Link onClick={() => history.push("./home")}>Home</Link>
            <Link onClick ={() => history.push("./person")}>person</Link>
        </>
    )
}