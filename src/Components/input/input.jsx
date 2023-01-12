import React, { Fragment, useEffect, useState } from "react";

export function Guestbook() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const message = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    const newTask = { id: new Date().getTime().toString(), title: task };
    setTasks([...tasks, newTask]);
    localStorage.setItem("messages", JSON.stringify([...tasks, newTask]));
    setTask("");
  };
  useEffect(() => {
    if (localStorage.getItem("messages")) {
      const stored = JSON.parse(localStorage.getItem("messages"));
      setTasks(stored);
    }
  }, []);
  let currentTime = new Date().toString().substring(15, 21);
  return (
    <div>
      {" "}
      <div className="addTask"></div>
      <div id="input">
        <input value={task} id="inputbox" onChange={message} />
        <button id="btn" onClick={addTask}>
          {" "}
          Send
        </button>
      </div>
      <div className="list" id="messages">
        {tasks.map((e) => {
          return (
            <Fragment key={e.id}>
              <div id="chat">
                <h1 id="message">{e.title}</h1>
                <h3 id="timestamp">{"kl:" + currentTime}</h3>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
