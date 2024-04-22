import { useState } from "react";

function MyComp2() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value);
    }

    function handleCommentChange(e) {
        setComment(e.target.value);
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} placeholder="Your Name" />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} placeholder="Your Name" />
            <p>Quantity: {quantity}</p>

            <input type="text" value={comment} onChange={handleCommentChange} placeholder="Your Comments" />
            <p>Comments: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Select Any 1</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>Payment: {payment}</p>
        </div>
    )
}

export default MyComp2