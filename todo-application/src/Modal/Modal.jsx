import { useEffect, useState } from "react"

export const Modal = ({modal, setModal, state, id, setState}) => {
    const [name , setName] = useState("")
    useEffect(() => {
        let obj = state.find(item => item.id === id )
        setName(obj.name)
    }, [id])
    const handleSub = (event) => {
        event.preventDefault()
        const data = new FormData(event.target)
        const idx = state.findIndex(item => item.id === id)
        state[idx].name = data.get("value").trim()
        setState(state)
        setModal(!modal)
        window.localStorage.setItem("todos", JSON.stringify(state))
        window.location.reload()
    }
    return(
        <div className="modal__overlay align-items-center justify-content-center position-fixed top-0 start-0 end-0 bottom-0 " style={{background: "rgba(0, 0, 0, 0.4)", display: modal === true ? "flex": "none" }}>
            <div className="modals w-25 mx-auto bg-light">
                <div className="modal__header position-relative bg-primary d-flex align-items-center justify-content-center">
                    <h2>Yangilash</h2>
                    <button className="position-absolute top-0 end-0 btn btn-danger rounded-0" onClick={() => setModal(!modal) }>&times;</button>
                </div>
                <div className="modal__body p-2">
                    <form className="w-50 mx-auto" onSubmit={handleSub}>
                        <input className="form-control w-100" type="text" placeholder="Yangilash" defaultValue={name} name="value"/>
                        <button className="btn btn-success mt-3">Yuborish</button>
                    </form>
                </div>
            </div>
        </div>
    )
}