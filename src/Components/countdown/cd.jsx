import { useState, useEffect } from "react";

export function Timer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      let countDownDate = new Date("Dec 24, 2023 00:00:00");
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <div id="countdown">
        {`${time.days}`}d {`${time.hours}`}t {`${time.minutes}`}m{" "}
        {`${time.seconds}`}s
      </div>
    </div>
  );
}
