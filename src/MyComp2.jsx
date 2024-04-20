import { useState } from "react";

function MyComp2() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Your Name" />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Your Name" />
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default MyComp2