import propic from "./assets/propic.jpg"
function Card() {
    return (
      <div className="card">
        <img className="card-img" src={propic} alt="profile picture" />
        <h2 className="card-title">MDSIAOFFICIAL</h2>
        <p className="card-text">I am Md Shoriful Islam Ashiq</p>
      </div>
  
    );
  }
  
  export default Card