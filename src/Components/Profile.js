import "../css/profile.css";
import "../css/App.css";
import ParticlesBg from "particles-bg";

function Profile() {
  return (
    <div className="profile-div">
      <div className="particle-bg">
        <ParticlesBg
          color="#2ca4f2"
          num={75}
          type="cobweb"
          bg={true}
          config={{ rps: 0.00001 }}
        />
      </div>
      <div className="profile-grid">
        <div className="columnPic">
          {/* <img
            className="troyProfilePic"
            src="../images/steveJones.jpg"
            alt="First Class"
          /> */}
        </div>
        <div className="center-div">
          <h1 className="profileName">We Are Hiring Originators</h1>
          <p className="profileP">
            The Partner/Recruiting Referral Program is a great way you can make
            extra cash!
          </p>
          <div className="buttonBlueDiv">
            <a href="#getStarted" className="buttonBlue">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
