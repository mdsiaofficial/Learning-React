import { useContext, useEffect, useRef, useState } from "react"
import CompA from "./CompA"
import { UserContext } from "./CompA"

export default function CompD() {

    // const refer = useRef(0);
    // console.log(refer);

    // const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const user = useContext(UserContext);
    let [num, setNum] = useState(0);

    useEffect(() => {
        console.log("CONSOLE render");
        // console.log(inputRef);
    });


    // function handleClick() {
    //     // setNum(n => n + 1);
    //     // refer.current++;
    //     // console.log(refer.current);
    //     inputRef.current.focus();
    //     inputRef.current.style.backgroundColor = "red";
    // }
    function handleClick1() {
        // setNum(n => n + 1);
        // refer.current++;
        // console.log(refer.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        // setNum(n => n + 1);
        // refer.current++;
        // console.log(refer.current);
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        // setNum(n => n + 1);
        // refer.current++;
        // console.log(refer.current);
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }

    return (
        <div className="box">
            <h1 className="comp_d" >Component D</h1>
            {/* <CompA></CompA> */}
            {/* <h2>{`bye, ${props.user}`}</h2> */}
            <h2>{`bye, ${user}`}</h2>

            {/* <div>
                <button onClick={handleClick}>
                    click me!
                </button>
                <input type="text" ref={inputRef}/>
            </div> */}

            <div>
                <button onClick={handleClick1}>
                    click me! 1
                </button>
                <input type="text" ref={inputRef1}/>
            </div>
            <div>
                <button onClick={handleClick2}>
                    click me! 2
                </button>
                <input type="text" ref={inputRef2}/>
            </div>
            <div>
                <button onClick={handleClick3}>
                    click me! 3
                </button>
                <input type="text" ref={inputRef3}/>
            </div>
        </div>
    )
}
