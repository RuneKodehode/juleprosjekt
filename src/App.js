import "./App.css";
import { Timer } from "./Components/countdown/cd";

import { Guestbook } from "./Components/input/input";

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1 id="juleHeader">Juleoppgave</h1>
        <Timer />
      </div>
      <Guestbook />
      <h2 id="disc">
        Disclaimer: all rights to the background image belongs fully to
        Kim@kodehode®
      </h2>
    </div>
  );
}

export default App;
