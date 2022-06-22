import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LeftHero from "../components/LeftHero";
import MidHero from "../components/MidHero";
import RightHero from "../components/RightHero";

export default function Home() {
  const [activity, setActivity] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState([]);
  const [editInput, setEditInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("todoList") !== null) {
      const listActivity = JSON.parse(
        window.localStorage.getItem("todoList") || "[]"
      );
      setTodos(listActivity);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        name: activity,
        id: Date.now(),
        isCheckedStatus: false,
      },
    ]);

    const listActivity = JSON.parse(
      window.localStorage.getItem("todoList") || "[]"
    );

    listActivity.push({
      name: activity,
      id: Date.now(),
      isCheckedStatus: false,
    });

    window.localStorage.setItem("todoList", JSON.stringify([...listActivity]));
    setActivity("");
  };

  const editHandler = (postId) => {
    const filteredPost = todos.findIndex((todo) => {
      return todo.id == postId;
    });
    const filteredTodos = todos[filteredPost];
    setEditId(filteredTodos);
  };

  const editHandlerSubmit = (e, todoId) => {
    e.preventDefault();
    //  console.log(postId);
    const cloneTodos = [...todos];
    console.log(cloneTodos);
    console.log(editInput);
    console.log(todoId);
    const filteredClone = cloneTodos.findIndex((cloneTodo) => {
      return cloneTodo.id == todoId;
    });
    cloneTodos[filteredClone].name = editInput;

    const listActivity = JSON.parse(
      window.localStorage.getItem("todoList") || "[]"
    );

    listActivity[filteredClone] = {
      name: cloneTodos[filteredClone].name,
      id: cloneTodos[filteredClone].id,
      isCheckedStatus: cloneTodos[filteredClone].isCheckedStatus,
    };

    window.localStorage.setItem("todoList", JSON.stringify([...listActivity]));

    setTodos(cloneTodos);
    setEditInput("");
    setEditId("");

    console.log(cloneTodos);
  };

  const deleteHandler = (todoId) => {
    console.log(todoId);
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(filteredTodos);

    const listActivity = JSON.parse(
      window.localStorage.getItem("todoList") || "[]"
    );

    window.localStorage.setItem("todoList", JSON.stringify(filteredTodos));
  };

  const checkHandler = (postId) => {
    const filteredTodos = todos.findIndex((todo) => {
      return todo.id == postId;
    });

    const cloneTodos = [...todos];

    const todoIndex = cloneTodos[filteredTodos];

    todoIndex.isCheckedStatus = !todoIndex.isCheckedStatus;

    cloneTodos[filteredTodos] = todoIndex;

    setTodos(cloneTodos);

    const listActivity = JSON.parse(
      window.localStorage.getItem("todoList") || "[]"
    );

    listActivity[filteredTodos] = {
      name: cloneTodos[filteredTodos].name,
      id: cloneTodos[filteredTodos].id,
      isCheckedStatus: cloneTodos[filteredTodos].isCheckedStatus,
    };

    window.localStorage.setItem("todoList", JSON.stringify([...listActivity]));
  };

  return (
    <div style={{ fontFamily: "HelveticaNeue" }}>
      <div
        style={{
          backgroundColor: "#f3f1f5",
          margin: "50px auto",
          borderRadius: "30px",
          color: "black",
        }}
        className="container hero"
      >
        <div className="row">
          <div
            style={{
              backgroundColor: "#f0d9ff",
              borderTopLeftRadius: "30px",
              borderBottomLeftRadius: "30px",
              padding: "30px",
              textAlign: "center",
            }}
            className="col-lg-2 hero-left"
          >
            <LeftHero />
          </div>
          <div style={{ padding: 30 }} className="col-lg-6 hero-mid">
            <MidHero />
            <div
              style={{
                fontWeight: "bolder",
                marginTop: 35,
                fontSize: 20,
                color: "black",
              }}
            >
              TO DO LIST
            </div>
            <div
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 16,
                borderRadius: 12,
              }}
            >
              <form onSubmit={submitHandler}>
                <div style={{ marginTop: 5, marginLeft: -3 }} className="row">
                  <div className="col-lg-6">
                    <input
                      value={activity}
                      onChange={(e) => {
                        setActivity(e.target.value);
                      }}
                      type="text"
                      placeholder="Add to do.."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6">
                    <button
                      style={{
                        backgroundColor: "#F3F1F5",
                        color: "black",
                        border: "none",
                      }}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <ul>
                {todos.map((todo) => {
                  return (
                    <div key={todo.id}>
                      <li>
                        {editId.id == todo.id ? (
                          <>
                            <form
                              onSubmit={(e) => {
                                editHandlerSubmit(e, todo.id);
                              }}
                            >
                              <div className="row">
                                <div className="col">
                                  <input
                                    className="form-control"
                                    type="text"
                                    value={editInput}
                                    placeholder={`Editing to "${todo.name}"....`}
                                    onChange={(e) => {
                                      setEditInput(e.target.value);
                                    }}
                                  />
                                </div>
                                <div className="col">
                                  <button
                                    style={{ marginRight: 5 }}
                                    type="submit"
                                    className="btn btn-light"
                                  >
                                    💾
                                  </button>
                                  <button
                                    className="btn btn-light"
                                    onClick={() => {
                                      setEditId("");
                                      setEditInput("");
                                    }}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </form>
                          </>
                        ) : (
                          <>
                            <div className="row">
                              <div className="col-lg-8">
                                {todo.isCheckedStatus ? (
                                  <>
                                    <span
                                      style={{
                                        textDecoration: "line-through",
                                        textDecorationColor: "blue",
                                        textDecorationThickness: "3px",
                                      }}
                                    >
                                      {todo.name}
                                    </span>
                                    <span
                                      style={{
                                        fontStyle: "italic",
                                        textDecoration: "none",
                                      }}
                                    >
                                      &nbsp; DONEEEE ✔️
                                    </span>
                                  </>
                                ) : (
                                  <>{todo.name}</>
                                )}
                              </div>
                              <div className="col">
                                <input
                                  style={{
                                    width: 38,
                                    height: 38,
                                    marginRight: 5,
                                    marginTop: 0,
                                  }}
                                  defaultChecked={todo.isCheckedStatus}
                                  className="form-check-input"
                                  type="checkbox"
                                  value={isChecked}
                                  onChange={() => {
                                    checkHandler(todo.id);
                                  }}
                                />
                                <button
                                  style={{
                                    marginRight: 5,
                                  }}
                                  className="btn btn-light"
                                  onClick={() => {
                                    editHandler(todo.id);
                                  }}
                                >
                                  📝
                                </button>
                                <button
                                  className="btn btn-light"
                                  onClick={() => {
                                    deleteHandler(todo.id);
                                  }}
                                >
                                  ❌
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>

          <RightHero />
        </div>
      </div>
    </div>
  );
}
