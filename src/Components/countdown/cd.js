export function Timer() {
  let countDownDate = new Date("Dec 24, 2023 00:00:00");
  setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let Counter =
      days + "dagar" + hours + "timar" + minutes + "min" + seconds + "s";
    console.log(Counter);
    return (
      <div>
        <div>{Counter}</div>
        <div>123</div>
      </div>
    );
  }, 1000);
}
