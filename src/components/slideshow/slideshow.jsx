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
import PhotoAlbum from "react-photo-album";
 

const Photos = [    
    {
      src: One,
      width: 3,
      height: 4
    },
    {
      src: Two,
      width: 4,
      height: 3
    },
    {
      src: Three,
      width: 3,
      height: 4
    },
    {
      src: Four,
      width: 3,
      height: 4
    },
    {
      src: Five,
      width: 3,
      height: 4
    },
    {
      src: Six,
      width: 3,
      height: 4
    },
    {
      src: Seven,
      width: 3,
      height: 4
    },
    {
      src: Eight,
      width: 4,
      height: 3
    },
    {
      src: Nine,
      width: 4,
      height: 3
    },
    {
      src: Ten,
      width: 3,
      height: 4
    },
    {
      src: Eleven,
      width: 4,
      height: 3
    },
    {
      src: Twelve,
      width: 4,
      height: 3
    },
]
  
export function Slideshow() {
    return (
        <><div className='text-7xl pb-5'>Pics of US!!!</div>

        <PhotoAlbum layout="rows" photos={Photos} />

        </>
    );
  }
export default Slideshow;