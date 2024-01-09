import { useState, useEffect } from 'react';
import './timer.css'; // Import the CSS file
import hk from './hk.gif'

const Timer = () => {
    const [time, setTime] = useState(new Date('01/17/2020'));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date('01/17/2020'));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const calculateTimeLeft = () => {
        const difference = new Date() - time;
        let remainingTime = {};

        if (difference > 0) {
            remainingTime = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return remainingTime;
    };

    const { days, hours, minutes, seconds } = calculateTimeLeft();

    return (
        <div className="w-screen h-screen bg-cover bg-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className='pt-20 text-7xl'>We have been together for</h1>
            <div className='pt-10 text-3xl font-semibold text-amber-50'>
                <span>{days}</span> days {}
                <span>{hours}</span> hours {}
                <span>{minutes}</span> minutes {} 
                <span>{seconds}</span> seconds {}
            </div>
            <div className="stars-container"> 
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div className='flex justify-center items-center'>
                <img src={hk} alt="hello kitty" />
            </div>
        </div>
    );
};

export default Timer;

