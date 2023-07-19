import { useState } from "react";
import { Input } from "./input";
import { List } from "./List";

function App() {
  const locals = window.localStorage.getItem("todos")
  const [state, setState] = useState(locals ? JSON.parse(locals) : [])
  return (
    <div className="text-light text-center todo__app d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="container">
        <h1>Todo App</h1>
        <Input state={state} setState={setState}/>
        <List setState={setState} state={state}/>
      </div>
    </div>
  );
}
export default App;
