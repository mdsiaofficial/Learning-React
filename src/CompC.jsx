import CompD from "./CompD"
import { UserContext } from "./CompA"
import { useContext } from "react"
export default function CompC() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1 className="comp_c">Component C</h1>
            <CompD user={user}></CompD>
        </div>
    )
}
