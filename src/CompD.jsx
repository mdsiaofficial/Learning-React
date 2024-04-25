import { useContext, useEffect, useRef, useState } from "react"
import CompA from "./CompA"
import { UserContext } from "./CompA"

export default function CompD() {

    // const refer = useRef(0);
    // console.log(refer);

    const inputRef = useRef(null);

    const user = useContext(UserContext);
    let [num, setNum] = useState(0);

    useEffect(() => {
        console.log("CONSOLE render");
        console.log(inputRef);
    });


    function handleClick() {
        // setNum(n => n + 1);
        // refer.current++;
        // console.log(refer.current);
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red";
    }
    return (
        <div className="box">
            <h1 className="comp_d" >Component D</h1>
            {/* <CompA></CompA> */}
            {/* <h2>{`bye, ${props.user}`}</h2> */}
            <h2>{`bye, ${user}`}</h2>

            <button onClick={handleClick}>
                click me!
            </button>
            <input type="text" ref={inputRef}/>
        </div>
    )
}
