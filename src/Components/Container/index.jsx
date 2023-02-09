import { useState } from "react";
import "./Container.css";
function Container() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([1, 2, 3, 4]);
  const [showSave, setShowSave] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [showEdit, setShowEdit] = useState(true);
  const [showDel, setShowDel] = useState(true);
  const [showP, setShowP] = useState(true);
  const handleValue = (event) => {
    setTodo(event.target.value);
  };
  const handleAdd = () => {
    if (todo.length === 0) {
      alert("Khong duoc de trong o nay");
    } else {
      setTodoList((prevTodo) => [...prevTodo, todo]);
    }
  };
  const handleDel = (x) => {
    console.log(x);
    setTodoList((prevTodo) => {
      const newArr = prevTodo.filter(
        (prevTodoElement) => prevTodoElement !== x
      );
      return newArr;
    });
  };
  const handleEdit = () => {
    setShowSave(true);
    setShowCancel(true);
    setShowP(false);
    setShowEdit(false);
    setShowDel(false);
  };
  const handleCancel = () => {
    setShowSave(false);
    setShowCancel(false);
    setShowP(true);
    setShowEdit(true);
    setShowDel(true);
  };
  return (
    <div>
      <div className="inputTodo">
        <input type="text" name="" id="" value={todo} onChange={handleValue} />
        <button className="btn btn-add" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="displayTodo">
        {todoList.map((x, index) => (
          <li key={index}>
            <p style={showP ? { display: "block" } : { display: "none" }}>
              {x}
            </p>
            <input type="text" />
            <button
              style={showEdit ? { display: "block" } : { display: "none" }}
              className="btn btn-edit"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              style={showDel ? { display: "block" } : { display: "none" }}
              className="btn btn-delete"
              onClick={() => handleDel(x)}
            >
              Delete
            </button>
            <button
              style={showSave ? { display: "block" } : { display: "none" }}
              className="btn btn-save"
            >
              Save
            </button>
            <button
              style={showCancel ? { display: "block" } : { display: "none" }}
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Container;
