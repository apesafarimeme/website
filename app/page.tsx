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
    <div className="landingImage flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
      <Image
        fill
        src="/countdown_page_bg.png"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt=''
        priority={true}
      />

      <div className="landingTimer grid grid-flow-col gap-5 text-center auto-cols-max">
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