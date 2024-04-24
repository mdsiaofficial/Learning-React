import { createContext, useState } from "react"
import CompB from "./CompB"

export const UserContext = createContext();
export default function CompA() {

    const [user, setUser] = useState("Ashiq");

    return (
        <div className="box">
            <h1 className="comp_a">Component A</h1>
            <h2>{`Hi, ${user}`}</h2>
            
            <UserContext.Provider value={user}>
                <CompB user = {user}></CompB>
            </UserContext>

            {/* <CompB user = {user}></CompB> */}
        </div>
    )
}
