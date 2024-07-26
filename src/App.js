import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to lanvaus.</h1>
      <p style={styles.paragraph}>We're glad to have you here. Explore and enjoy!</p>
    </div>
  );
};

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index path="/" element={<WelcomePage />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.5rem',
    color: '#666',
  },
};


export default App;
