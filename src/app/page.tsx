"use client";

import Todo from "@/components/Todo/Todo";
import { useState } from "react";

export default function Home() {
  const [incomplete, setIncomplete] = useState<any[]>([]);
  const [ongoing, setOngoing] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);

  const [activity, setActity] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [id, setId] = useState<number>(0);

  function handleAddTodo() {
    if (activity.trim() === "") {
      document.getElementById("activity")?.focus();
    } else if (category.trim() === "") {
      document.getElementById("category")?.focus();
    } else if (description.trim() === "") {
      document.getElementById("description")?.focus();
    } else {
      setId(id + 1);

      const newTodo = {
        id,
        activity,
        category,
        description,
        status: "incomplete",
      };

      setIncomplete([...incomplete, newTodo]);

      setActity("");
      setCategory("");
      setDescription("");
    }
  }

  function addIncomplete(todo: any) {
    setIncomplete([...incomplete, todo]);
  }

  function addOngoing(todo: any) {
    setOngoing([...ongoing, todo]);
  }

  function addCompleted(todo: any) {
    setCompleted([...completed, todo]);
  }

  function deleteIncomplete(todo: any, status: any) {
    let temp = [...incomplete];

    const res = [];

    for (let x = 0; x < temp.length; x++) {
      if (temp[x].status === "incomplete") {
        res.push(temp[x]);
      }
    }

    setIncomplete(res);

    if (status === "ongoing") {
      addOngoing(todo);
    } else if (status === "completed") {
      addCompleted(todo);
    }
  }

  function deleteOngoing(todo: any, status: any) {
    let temp = [...ongoing];

    const res = [];

    for (let x = 0; x < temp.length; x++) {
      if (temp[x].status === "ongoing") {
        res.push(temp[x]);
      }
    }

    setOngoing(res);

    if (status === "completed") {
      addCompleted(todo);
    } else if (status === "incomplete") {
      addIncomplete(todo);
    }
  }

  function deleteCompleted(todo: any, status: any) {
    let temp = [...completed];

    const res = [];

    for (let x = 0; x < temp.length; x++) {
      if (temp[x].status === "completed") {
        res.push(temp[x]);
      }
    }

    setCompleted(res);

    if (status === "ongoing") {
      addOngoing(todo);
    } else if (status === "incomplete") {
      addIncomplete(todo);
    }
  }

  function handleChangeIncomplete(id: number, e: any) {
    for (let i = 0; i < incomplete.length; i++) {
      if (incomplete[i].id === id) {
        incomplete[i].status = e.target.value;
        deleteIncomplete(incomplete[i], e.target.value);
        break;
      }
    }
  }

  function handleChangeOngoing(id: number, e: any) {
    for (let i = 0; i < ongoing.length; i++) {
      if (ongoing[i].id === id) {
        ongoing[i].status = e.target.value;
        deleteOngoing(ongoing[i], e.target.value);

        break;
      }
    }
  }

  function handleChangeCompleted(id: number, e: any) {
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].id === id) {
        completed[i].status = e.target.value;
        deleteCompleted(completed[i], e.target.value);

        break;
      }
    }
  }

  function deleteTaskIncomplete(id: number) {
    for (let i = 0; i < incomplete.length; i++) {
      if (incomplete[i].id === id) {
        const temp = [...incomplete];
        temp.splice(i, 1);
        setIncomplete(temp);
        break;
      }
    }
  }

  function deleteTaskOngoing(id: number) {
    for (let i = 0; i < ongoing.length; i++) {
      if (ongoing[i].id === id) {
        const temp = [...ongoing];
        temp.splice(i, 1);
        setOngoing(temp);
        break;
      }
    }
  }

  function deleteTaskCompleted(id: number) {
    for (let i = 0; i < completed.length; i++) {
      if (completed[i].id === id) {
        const temp = [...completed];
        temp.splice(i, 1);
        setCompleted(temp);
        break;
      }
    }
  }

  return (
    <main className="flex flex-col">
      <section className="flex flex-col justify-center items-center px-5 min-h-[50vh] bg-[#e3f6f5] ">
        <h1 className="font-bold text-5xl text-[#272343]">TODO</h1>
        <p className="font-normal text-lg text-[#2d334a]">
          List all your activities!
        </p>
      </section>

      <section className="mt-[-5vh] ">
        <div className="flex flex-row justify-center px-3 gap-x-3 max-sm:flex-col max-sm:gap-y-3 max-sm:gap-x-0 max-md:flex-col max-md:gap-y-3 max-lg:flex-col max-lg:gap-y-3">
          <div className="flex flex-col bg-[#fffffe] border-[#272343] border-[1px] px-5 py-4 rounded">
            <h2 className="font-bold text-[#272343]">Activity Name:</h2>
            <input
              type="text"
              id="activity"
              name="activity"
              className="px-3 py-2 border-[#272343] border-[1px] text-sm"
              placeholder="Enter your activity..."
              value={activity}
              onChange={(e) => setActity(e.target.value)}
            />
          </div>

          <div className="flex flex-col bg-[#fffffe] border-[#272343] border-[1px] px-5 py-4 rounded">
            <h2 className="font-bold text-[#272343]">Category:</h2>
            <input
              type="text"
              id="category"
              name="category"
              className="px-3 py-2 border-[#272343] border-[1px] text-sm"
              placeholder="Enter your category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="flex flex-col bg-[#fffffe] border-[#272343] border-[1px] px-5 py-4 rounded">
            <h2 className="font-bold text-[#272343]">Description:</h2>
            <input
              type="text"
              id="description"
              name="description"
              className="px-3 py-2 border-[#272343] border-[1px] text-sm"
              placeholder="Enter your description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col justify-center bg-[#fffffe] border-[#272343] border-[1px] rounded">
            <button
              id="btnAddTodo"
              className="text-lg min-w-[100%] min-h-[100%] px-4 py-4"
              onClick={handleAddTodo}
            >
              {">"}
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-4 mt-8">
        <h2 className="font-bold text-xl text-[#272343]">Your To-Do-List</h2>

        <div className="mt-4">
          <h3 className="font-semibold text-lg text-[#272343]">
            Incomplete Tasks
          </h3>
          <div className="flex flex-row gap-x-4 gap-y-7 flex-wrap mt-4">
            {incomplete.length === 0 ? (
              <p>There is no incomplete task.</p>
            ) : (
              incomplete.map((index, todo) => (
                <Todo
                  key={incomplete[todo].id}
                  id={incomplete[todo].id}
                  activity={incomplete[todo].activity}
                  category={incomplete[todo].category}
                  description={incomplete[todo].description}
                  status={incomplete[todo].status}
                  onChange={handleChangeIncomplete}
                  onClick={deleteTaskIncomplete}
                />
              ))
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-lg text-[#272343]">
            Ongoing Tasks
          </h3>
          <div className="flex flex-row gap-x-4 gap-y-7 flex-wrap mt-4">
            {ongoing.length === 0 ? (
              <p>There is no ongoing task.</p>
            ) : (
              ongoing.map((index, todo) => (
                <Todo
                  key={ongoing[todo].id}
                  id={ongoing[todo].id}
                  activity={ongoing[todo].activity}
                  category={ongoing[todo].category}
                  description={ongoing[todo].description}
                  status={ongoing[todo].status}
                  onChange={handleChangeOngoing}
                  onClick={deleteTaskOngoing}
                />
              ))
            )}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-lg text-[#272343]">
            Completed Tasks
          </h3>
          <div className="flex flex-row gap-x-4 gap-y-7 flex-wrap mt-4">
            {completed.length === 0 ? (
              <p>There is no completed task.</p>
            ) : (
              completed.map((index, todo) => (
                <Todo
                  key={completed[todo].id}
                  id={completed[todo].id}
                  activity={completed[todo].activity}
                  category={completed[todo].category}
                  description={completed[todo].description}
                  status={completed[todo].status}
                  onChange={handleChangeCompleted}
                  onClick={deleteTaskCompleted}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
