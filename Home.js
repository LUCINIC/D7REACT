import React,{ useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LatestRelease from '../components/LatestReleases'
import { ThemeContext } from '../components/ThemeContext'
import { lightTheme, darkTheme } from '../data/Theme'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div style={{ background: theme.background, color: theme.text }}></div>
        <Navigation />
        <Hero />
        <LatestRelease />
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default Home