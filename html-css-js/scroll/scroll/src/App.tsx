import './App.css'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5
      }
    })
  }, [])

  return (
    <>
      <progress max="100" value="0" ></progress>
      <nav>
        <h1>Dashboard</h1>
      </nav>
      <section></section>
      <section></section>
      <section></section>
    </>
  )
}

export default App
