// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import MyComp from "./MyComp.jsx"
import Counter from "./Counter.jsx"
import MyComp2 from "./MyComp2.jsx"
import ColorPicker from "./ColorPicker.jsx"
import MyComp3 from "./MyComp3.jsx"
import TodoList from "./Todo_List.jsx"
import MyComp4 from "./MyComp4.jsx"
import DigitalClock from "./DigitalClock.jsx"
function App() {

	const foods = [ {id:1, cal: 65, foodname: "Ruti",},
                    {id:2, cal: 165, foodname: "Biriyani"},
                    {id:3, cal: 465, foodname: "Polao"},
                    {id:4, cal: 645, foodname: "Khichuri"},
                    {id:5, cal: 865, foodname: "Vat"},];
					
	const veg = [ {id:6, cal: 65, foodname: "Ruti",},
                    {id:7, cal: 165, foodname: "Biriyani"},
                    {id:8, cal: 465, foodname: "Polao"},
                    {id:9, cal: 645, foodname: "Khichuri"},
                    {id:10, cal: 865, foodname: "Vat"},];

	return (
		<div>
			<Header></Header>

			<Food></Food>
			<Card></Card>

			<Student name="Ashiq" age={25} isStudent={true}></Student>
			<Student name="Anika" age={15} isStudent={true}></Student>
			<Student name="Amena" age={48} isStudent={false}></Student>
			<Student name="Kabir" age={53} isStudent={false}></Student>
			<Student name="Roni" age={25} isStudent={true}></Student>

			<Button></Button>

			<UserGreeting isLoggedIn={true} name="Ashiq"></UserGreeting>

			<div>
				{/* using ternary operator */}
				{foods.length > 0 ? <List items={foods} category="Vari khabar"></List> : null}

				{/* using short circuit */}
				{veg.length > 0 && <List items={veg} category="veg"></List>}
			</div>

			<ProfilePicture></ProfilePicture>
			<MyComp></MyComp>

			<Counter></Counter>

			<MyComp2></MyComp2>

			<ColorPicker></ColorPicker>

			<MyComp3></MyComp3>

			<TodoList></TodoList>

			<MyComp4></MyComp4>

			<DigitalClock></DigitalClock>
			
			<Footer></Footer>
		</div>
	);
}

export default App
