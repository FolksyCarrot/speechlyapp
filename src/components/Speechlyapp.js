import react from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";


export const Speechlyapp = () => {
    return(
        <>
            <Route>
                <ApplicationViews />
            </Route>
        </>
    )
}