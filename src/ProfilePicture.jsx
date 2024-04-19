

function ProfilePicture() {
    const imgURL = "./src/assets/propic.jpg";
    
    const handleClick = (e) => {
        console.log("That me.");
        e.target.style.display = "none";

    }

    return (
        <img className="card" src={imgURL} alt="" onClick={(e) => handleClick(e)}/>
    );
}

export default ProfilePicture