import { ListItem } from "./ListIten"

export const List = ({state, setState}) => {
    return(
        <ul className=" mx-auto " style={{width: "27%"}}>
            {state?.map(item => {
                return(
                    <ListItem setState={setState} name={item.name} state={state} id={item.id} key={item.id}/>
                )
            })}
        </ul>
    )
}