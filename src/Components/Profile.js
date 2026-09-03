import "../css/profile.css";
import "../css/App.css";
import LiteYouTube from "./LiteYouTube";

function Profile() {
  return (
    <div className="profile-div">
      <div className="profile-grid">
        <div className="columnPic"></div>
        <div className="center-div">
          <h1 className="profileName">Loan Officer Referral Program</h1>
          <p className="profileTagline">
            We&apos;re hiring originators in California, Colorado, Idaho, New
            Mexico, Texas, Utah &amp; Florida. Refer a licensed loan officer to
            First Class Home Mortgage and earn up to $695 per hire.
          </p>
          <p className="profileP">
            The Partner/Recruiting Referral Program is a great way you can make
            extra cash!
          </p>
          <LiteYouTube
            id="dmEV-6MeL7Y"
            title="Troy Warner explains the First Class Home Mortgage loan officer referral program"
          />
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
