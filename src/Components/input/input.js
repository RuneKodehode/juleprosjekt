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
    localStorage.setItem("meldingar", JSON.stringify([...tasks, newTask]));
    setTask("");
  };
  useEffect(() => {
    if (localStorage.getItem("meldingar")) {
      const stored = JSON.parse(localStorage.getItem("meldingar"));
      setTasks(stored);
    }
  }, []);
  let curTime = new Date().toString().substring(15, 21);
  return (
    <div>
      {" "}
      <div className="addTask"></div>
      <div id="input">
        <input id="inputbox" onChange={message} />
        <button id="btn" onClick={addTask}>
          {" "}
          Add Task
        </button>
      </div>
      <div className="list" id="messages">
        {tasks.map((msg) => {
          return (
            <Fragment key={msg.id}>
              <div>
                <h1>{msg.title + " kl:" + curTime}</h1>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
