'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +new Date('2023-10-29') - +new Date();
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const IndexPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ 
            backgroundImage: `url('/countdown_page_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
      {/* <h1 className="text-4xl font-bold text-white mb-4">Presale starts in:</h1> */}
      {/* <h2 className="text-2xl font-semibold mb-2">Countdown Timer</h2> */}
      {/* <div className="flex text-white mt-96">
        {timeLeft.days > 0 && (
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mr-4">
            <span>{timeLeft.days}</span> d
          </p>
        )}
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mr-4">
            <span>{timeLeft.hours}</span><br/>h
          </p>
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-medium mr-4">
            <span>{timeLeft.minutes}</span> m
          </p>
          <p className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-medium">
            <span>{timeLeft.seconds}</span> s
          </p>
      </div> */}

<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds} 
    </span>
    sec
  </div>
</div>

    </div>
  );
};

export default IndexPage;