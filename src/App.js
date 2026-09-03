import "./css/reset.css";
import "./css/App.css";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import HowItWorks from "./Components/HowItWorks";
import GetStarted from "./Components/GetStarted";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <HowItWorks />
      <GetStarted />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
