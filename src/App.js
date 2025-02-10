import { useSelector } from "react-redux";
import Courses from "./components/Courses/Courses";
import EnrollNow from "./components/EnrollNow/EnrollNow";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import WhatAreWeProviding from "./components/WhatAreWeProviding/WhatAreWeProviding";
import WhyAifEdSection from "./components/WhyAifEdSection/WhyAifEdSection";
import PaymentModal from './components/PaymentModal/PaymentModal'

function App() {
  const { show } = useSelector(state => state.enrollPopup)

  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <WhyAifEdSection />
      <WhatAreWeProviding />
      <Courses />
      <EnrollNow />
      <Footer />

      {show &&
        <PaymentModal />
      }
    </div>
  );
}

export default App;
