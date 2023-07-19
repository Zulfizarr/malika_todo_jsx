import { useState } from "react";
import { Modal } from "../Modal";

export const ListItem = ({state, id, name, setState}) => {
    const [modal, setModal] = useState(false)
    const handleClick = (event) => {
        switch(event.target.id){
            case "delete":{
                let filter = state.filter(item => item.id !== id)
                setState(filter)
                window.localStorage.setItem("todos", JSON.stringify(filter))
            }
        }
    }
  return (
    <>
    <li
      className="bg-light w-100 my-2 rounded text-dark justify-content-between p-2 d-flex align-items-center"
      style={{ transform: "translateX(-15px)" }}
    >
      <h3>{name}</h3>
      <div>
        <button className="btn btn-danger" onClick={handleClick} id="delete">Delete</button>
        <button className="btn btn-success" onClick={() => setModal(!modal)}>Edit</button>
      </div>
    </li>
    <Modal modal={modal} setModal={setModal} id={id} state={state} setState={setState}/>
    </>
  );
};
