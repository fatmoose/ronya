import One from './components/pageOne'
import Two from './components/pageTwo'
import Timer from './components/timer/timer'
import Slideshow from './components/slideshow/slideshow'
import Flower from './components/flower/flower'
import StickyBox from "react-sticky-box";
import TransparentBuffer from './space';
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

  return (
    <>
    <ScrollContainer className="bg-cover bg-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

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
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
      </ScrollPage>

    <ScrollPage>
      <StickyBox>
        <Animator animation={MoveOut(0, -200)}> 
          <span> < Timer/> </span>
        </Animator>
      </StickyBox>
    </ScrollPage>

    <ScrollPage>
            <span> <TransparentBuffer /> </span>
    </ScrollPage>

      <ScrollPage className='h-500'>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <span> < Slideshow/> </span>
        </Animator>
      </ScrollPage>


      <ScrollPage>
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
      </ScrollPage>

      <ScrollPage className='h-500'>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
            <span> < Flower/> </span>
        </Animator>
      </ScrollPage>


      <ScrollPage>
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
            <span> <TransparentBuffer /> </span>
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
