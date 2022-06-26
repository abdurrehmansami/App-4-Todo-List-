import React, { useState } from "react";
// import todo from '../images/todo.svg'
import img from "../Images/img.jpg";

const Todo = () => {
  const [inputData, setinputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (inputData === "") {
    } else {
      setItems([...items, inputData]);
      setinputData("");
    }
  };
  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateditems);
  };
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={img} alt="icon" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Item "
              value={inputData}
              onChange={(e) => {
                setinputData(e.target.value);
              }}
            />

            <i
              className="fa fa-plus add-btn"
              // aria-hidden="true"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{elem}</h3>

                  <i
                    className="far fa-trash-alt add-btn"
                    // aria-hidden="true"
                    title="Delete Item"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  ></i>
                </div>
              );
            })}
          </div>
          {/* clear all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
