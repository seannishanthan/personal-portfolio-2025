import Experience from './Experience.jsx'
import Projects from './Projects.jsx'
import Header from './Header.jsx'
import Intro from './Intro.jsx'
import Footer from './Footer.jsx'
import './index.css'



function App() {
    const homeDivStyle = {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    };

  return (
    <>
      <div style={homeDivStyle}>
        <Header/>
        <Intro/>
      </div>
      
      <Experience/>
      <Projects/>
      <Footer/>

    </>
  )
}

export default App
