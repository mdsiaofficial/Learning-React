import CompC from "./CompC"
import { UserContext } from "./CompA"
import { useContext } from "react";

export default function CompB() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1 className="comp_b">Component B</h1>
            
            {/* <CompC user={props.user}></CompC> */}
            <CompC user={user}></CompC>


        </div>
    )
}
