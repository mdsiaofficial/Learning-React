import propic from "./assets/propic.jpg"
function Card() {
    return (
      <div className="card">
        <img className="cardImg" src={propic} alt="profile picture" />
        <h2>MDSIAOFFICIAL</h2>
        <p>I am Md Shoriful Islam Ashiq</p>
      </div>
  
    );
  }
  
  export default Card