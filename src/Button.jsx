// import styles from "./Button.module.css"

/*
style can be 
inline
external 
module

 */
function Button() {

	const styles = {
		"background-color": "slateblue",
		"color": "white",
		"padding": "10px 20px",
		"border-radius": "10px",
		"border": "none",
		"cursor": "pointer",
		"margin": "10px",

	}

	return (
		<div>
			{/* <button className="button">Click Me</button>  */}
			{/* <button className={styles.button}>Click Me</button> */}
			<button style={styles} className={styles}>Click Me</button>
		</div>
	);
}

export default Button;
