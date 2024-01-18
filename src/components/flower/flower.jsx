import './flower.css';
import One from './photos/one.png';
import Two from './photos/two.png';
import Three from './photos/three.png';
import Four from './photos/four.png';
import Five from './photos/five.png';


const Flower = () => {
    return (
        <div className='flower'>
            <p className="font-sans text-5xl md:text-7xl text-white-700"> ❤️ Virtual Flowers for You ❤️ </p>

            <div className="flex justify-center items-center py-20">
            
            <img src={One} alt="One" className="h-12 p-3 md:size-80 object-fit-contain md:p-5" />
            <img src={Two} alt="Two" className="size-10 p-3 md:size-80 object-fit-contain md:p-5" />
            <img src={Three} alt="Three" className="size-20 p-3 md:size-80 object-fit-contain md:p-5" />
            <img src={Four} alt="Four" className="size-20 p-3 md:size-80 object-fit-contain md:p-5" />
            <img src={Five} alt="Five" className="h-20 p-3 md:h-80 object-fit-contain md:p-5" />

            </div>

            <p className="text-xs font-sans md:text-1xl text-white-700"> I couldn&apos;t figure out the tiktok flower animation ¯\_(ツ)_/¯ </p>
        </div>
        

    );
}

export default Flower;
