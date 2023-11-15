
import { Dispatch, SetStateAction } from "react";

type cellProps={
    go:string;
    setGo:Dispatch<SetStateAction<string>>;
    id:number;
    cells:string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
    winMsg:string
}
const cell =({go,setGo,id,cells,setCells,cell,winMsg}:cellProps)=>{

    const handleClick =()=>{
        if(winMsg){
            return
        }
        const taken = !!cells[id]
        if(!taken){
            if(go === "circle"){
                changeCellVal("circle")
                setGo("cross")
            }else if (go === "cross"){
                changeCellVal("cross")
                setGo("circle")
            }
        }
        }
    const changeCellVal =(val:string)=>{
        const copyCells =[...cells]
        copyCells[id]=val
        setCells(copyCells)
    }

return(
    <div className="square" onClick={handleClick}>
        <div className={cell}> {cell ? (cell === 'circle' ? 'O' : 'X') : ''}</div>
    </div>
)
}
export default cell

