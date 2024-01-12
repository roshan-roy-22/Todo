// List.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { deleteTodo } from "./Redux/userSlice";

function List({ todo }) {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const listGroupItem = document.getElementById(`listItem-${todo.id}`);
    if (listGroupItem) {
      listGroupItem.style.backgroundColor = check ? "#C8FFE0" : "white";
    }
  }, [check, todo.id]);

  const handleRemove = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <ListGroup.Item
        id={`listItem-${todo.id}`}
        className="align-items-center  "
      >
        <div className="d-flex justify-content-between  ">
          <div className="d-flex align-items-center justify-content-center  ">
            <Form>
              <Form.Check
                type="checkbox"
                checked={check}
                onChange={() => setCheck(!check)}
              />
            </Form>
            <p className="ms-2  mt-3 ">{todo.text}</p>
          </div>
          <button className="btn btn-danger" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default List;
