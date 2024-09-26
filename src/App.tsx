import "./null.css";
import "./App.css";
import Header from "./components/header/Header.tsx";
import SectionOnce from "./components/sectiononce/index.tsx";
import SecTdamien from "./components/sectiontwo/index.tsx";
import Sectithree from "./components/SectionServices/index.tsx";
import Footer from "./components/Footer/index.tsx";
import ExploreWork from "./components/ExploreWork/index.tsx";
import FrequentlyQuestions from "./components/FREQUENTLY/index.tsx";
import TestimonialsCards from "./components/Testimonials/index.tsx";

function App() {
  return (
    <>
      <Header></Header>
      <SecTdamien></SecTdamien>
      <SectionOnce></SectionOnce>
      <Sectithree></Sectithree>
      <ExploreWork />
      <FrequentlyQuestions />
      <TestimonialsCards />
      <Footer />
    </>
  );
}

export default App;
