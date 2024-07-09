import "./styles.css";
import avatar from "../../assets/free-icon-avatars-4725937.png";

function ProfileCard() {
  const userData = {
    avatar: "",
    userName: "John Jonson",
    profession: "Actor",
    hobbies: "diving",
  };

  return (
    <div>
      <img src={avatar} alt="ucer_avatar" />
      <h1>{userData.userName}</h1>
      <h2> Profession:{userData.profession}</h2>
      <h2> Hobbies: {userData.hobbies}</h2>
    </div>
  );
}

export default ProfileCard;
