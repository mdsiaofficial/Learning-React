import { useState } from "react";

function MyComp() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState("0");
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Ashiq");
    }

    const incrementAge = () => {
        setAge(1+age);
    }

    const togleEmployee = () => {
        setIsEmployed(!isEmployed);
    }

    console.log(name);
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Employed: {isEmployed ? "YES": "NO"}</p>
            <button onClick={togleEmployee}>Set Employee</button>
        </div>
    )
}

export default MyComp