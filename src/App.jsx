import One from './components/pageOne'
import Two from './components/pageTwo'
import Timer from './components/timer/timer'
import Slideshow from './components/slideshow/slideshow'
import StickyBox from "react-sticky-box";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, ZoomIn } from "react-scroll-motion";
import './App.css'
const ZoomInScrollOut = batch(FadeIn(), ZoomIn());

import { useState, useEffect } from 'react';


function App() {
  const { width, height } = useWindowSize()
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let backgroundColor;

  const startColor = [161, 0, 129]; // RGB value for purple
  const endColor = [101, 0, 161]; // RGB value for red

  const colors = [];
  const steps = 10; // Number of steps for the transition

  for (let i = 0; i <= steps; i++) {
    const r = Math.floor(startColor[0] + ((endColor[0] - startColor[0]) / steps) * i);
    const g = Math.floor(startColor[1] + ((endColor[1] - startColor[1]) / steps) * i);
    const b = Math.floor(startColor[2] + ((endColor[2] - startColor[2]) / steps) * i);
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }

  const colorIndex = Math.floor(scrollY / (height / steps)) % colors.length; // Calculate the index based on scrollY
  backgroundColor = colors[colorIndex]; // Set the backgroundColor based on the index


  return (
    <>
    <ScrollContainer style={{ backgroundColor }}>

      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
          <span> < One/> </span>
        </Animator>
      </ScrollPage>


      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
            <span> < Two/> </span>
        </Animator>
      </ScrollPage>


    <ScrollPage>
      <StickyBox>
        <Animator animation={MoveOut(0, -200)}> 
          <span> < Timer/> </span>
        </Animator>
      </StickyBox>
    </ScrollPage>

      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <span> < Slideshow/> </span>
        </Animator>
      </ScrollPage>

      <ScrollPage>

      <Confetti
        width={width}
        height={height}
      />

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
        <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>🥰🥰🥰 Happy 4 Years 🥰🥰🥰</Animator>
        <Animator animation={MoveIn(1000, 0)}>💞💞💞 Heres to many more 💞💞💞</Animator>
        <p className='text-7xl'>I love you</p>
        <Animator animation={MoveIn(1000, 0)}>I hope you like this &quot;handmade&quot; gift</Animator>
        <Animator animation={MoveIn(-1000, 0)}>🥳🥳🥳 I will see you soon 🥳🥳🥳</Animator>
      </span>
    </div>
      </ScrollPage>

  </ScrollContainer>
    
    </>
  )
}

export default App
