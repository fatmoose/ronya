import One from './photos/one.jpeg';
import Two from './photos/two.jpg';
import Three from './photos/three.jpg';
import Four from './photos/four.jpg';
import Five from './photos/five.jpeg';
import Six from './photos/six.jpg';
import Seven from './photos/seven.jpg';
import Eight from './photos/eight.jpg';
import Nine from './photos/nine.jpg';
import Ten from './photos/ten.jpeg';
import Eleven from './photos/eleven.jpg';
import Twelve from './photos/twelve.jpg';
import { Carousel, IconButton } from "@material-tailwind/react";
  
export function Slideshow() {
    return (
    <div className="h-full w-full items-center justify-center">

    <p className="text-7xl">Pics of Us!</p>
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        <img
          src={One}
          alt="image 1"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Two}
          alt="image 2"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Three}
          alt="image 3"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Four}
          alt="image 4"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Five}
          alt="image 5"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Six}
          alt="image 6"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Seven}
          alt="image 7"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Eight}
          alt="image 8"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Nine}
          alt="image 9"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Ten}
          alt="image 10"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Eleven}
          alt="image 11"
          className="h-screen w-screen object-scale-down"
        />
        <img
          src={Twelve}
          alt="image 12"
          className="h-screen w-screen object-scale-down"   
        />
      </Carousel>
    </div>
    );
  }
export default Slideshow;