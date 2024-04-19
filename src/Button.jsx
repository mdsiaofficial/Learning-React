// import styles from "./Button.module.css"

/*
style can be 
inline
external 
module

 */
function Button() {

	const styles = {
		backgroundColor: "slateblue",
		color: "white",
		padding: "10px 20px",
		borderRadius: "2px",
		border: "none",
		curso: "pointer",
		margin: "10px",

	}

	let count = 0;
	// const handleClick = () => console.log("AH AH AH");

	// const handleClick = () => {
	// 	count++;
	// 	console.log(count);
	// };

	// const handleClick2 = (name) => console.log(`${name}, stop it. now!!!`);

	const handleClick = (e) => {
		count++;
		e.target.textContent = `Ahh ${count}`;
		console.log(e);
	};

	return (
		<div>
			{/* <button className="button">Click Me</button>  */}

			{/* <button className={styles.button}>Click Me</button> */}

			{/* <button onClick={()=>handleClick2("fuck")} style={styles} className={styles}>Click Me</button> */}

			{/* <button onClick={handleClick} style={styles} className={styles}>Click Me {count}</button> */}

			<button onClick={ (e) => handleClick(e)} style={styles} className={styles}>Click Me</button>
		</div>
	);
}

export default Button;
