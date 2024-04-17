import propTypes from "prop-types"

function UserGreeting(props) {

	// way 1 to return
	
	// if (props.isLoggedIn) {
	// 	return (
	// 		<div>
	// 			<h2>Welcome {props.name}, to AKHRA!!!</h2>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div>
	// 			<h2>Please log in first!!!</h2>
	// 		</div>
	// 	);
	// }

	
	// way 2 to return

	// return (
	// 	props.isLoggedIn ?
	// 		<h2 className="welcome-message">Welcome {props.name}, to AKHRA!!!</h2> :
	// 		<h2 className="login-error">Please log in first!!!</h2>
	// );


	const welcome_message = <h2 className="welcome-message">Welcome {props.name}, to AKHRA!!!</h2>;
	const login_error = <h2 className="login-error">Please log in first!!!</h2>;

	return (props.isLoggedIn ? welcome_message : login_error);

	
}


UserGreeting.propTypes = {
	name: propTypes.string,
	isLoggedIn: propTypes.bool,

}

UserGreeting.defaultProps = {
	name: "Guest",
	isLoggedIn: false,
}
export default UserGreeting