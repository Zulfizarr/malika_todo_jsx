import {v4} from "uuid"
export const Input = ({state, setState}) => {
    const handleKey = (event) => {
        if(event.keyCode === 13){
            let todo = {
                name: event.target.value.trim(),
                id: v4()
            }
            setState((state) =>  [...state, todo])
            window.localStorage.setItem("todos", JSON.stringify([...state, todo]))
            event.target.value = null
        }
    }
    return(
        <input className="form-control w-25 mx-auto" type="text" placeholder="Create Todo"  onKeyUp={handleKey} />
    )
}