import { useRef, useState } from "react";
import "./Container.css";
function Container() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(["a", "b", "c", "d"]);

  const getEdit = useRef([]);
  const getDel = useRef([]);
  const getSave = useRef([]);
  const getSaveInput = useRef([]);
  const getCancel = useRef([]);
  const getNameWork = useRef([]);
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

  const handleDel = (x, index) => {
    console.log(x, index);
    setTodoList((prevTodo) => {
      const newArr = prevTodo.filter(
        (prevTodoElement) => prevTodoElement !== x
      );
      return newArr;
    });
  };

  const handleEdit = (index) => {
    console.log(index);
    console.log(getEdit.current[index]);
    getNameWork.current[index].style.display = "none";
    getEdit.current[index].style.display = "none";
    getDel.current[index].style.display = "none";
    getSaveInput.current[index].style.display = "block";
    getSave.current[index].style.display = "block";
    getCancel.current[index].style.display = "block";
  };

  const handleSave = (index) => {
    console.log(index);
  };

  const handleCancel = (index) => {
    console.log(index);
    getNameWork.current[index].style.display = "block";
    getEdit.current[index].style.display = "block";
    getDel.current[index].style.display = "block";
    getSaveInput.current[index].style.display = "none";
    getSave.current[index].style.display = "none";
    getCancel.current[index].style.display = "none";
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
            <p
              ref={(element) => {
                getNameWork.current[index] = element;
              }}
            >
              {x}
            </p>
            <input
              className="saveInput"
              ref={(element) => {
                getSaveInput.current[index] = element;
              }}
              type="text"
            />
            <button
              ref={(element) => {
                getEdit.current[index] = element;
              }}
              className="btn btn-edit"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
            <button
              ref={(element) => {
                getDel.current[index] = element;
              }}
              className="btn btn-delete"
              onClick={() => handleDel(x, index)}
            >
              Delete
            </button>
            <button
              ref={(element) => {
                getSave.current[index] = element;
              }}
              className="btn btn-save"
              onClick={() => handleSave(index)}
            >
              Save
            </button>
            <button
              ref={(element) => {
                getCancel.current[index] = element;
              }}
              className="btn btn-cancel"
              onClick={() => handleCancel(index)}
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
