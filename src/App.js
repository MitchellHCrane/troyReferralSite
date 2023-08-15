import "./css/reset.css";
import "./css/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import GetStarted from "./Components/GetStarted";
import ReferralForm from "./Components/ReferralForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <GetStarted />
      <ReferralForm />
      <Footer />
    </div>
  );
}

export default App;
