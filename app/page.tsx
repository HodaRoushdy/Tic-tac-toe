'use client'
import { useEffect } from 'react'
import { useState } from 'react'
import Cell from './components/cell'

export default function Home() {
const [cells,setCells] = useState(['','','','','','','','',''])
const [go,setGo]=useState('cross')
const winningProbab =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
const [winMsg,setwinMsg] = useState('')
useEffect(()=>{
  winningProbab.forEach((probab)=>{
  const circleWin = probab.every((cell)=> cells[cell] === 'circle' )
  const crossWin = probab.every((cell)=> cells[cell] === 'cross')
  if(circleWin){
    setwinMsg('the winner is circle')
  }else if(crossWin){
    setwinMsg('the winner is cross')
  }
})

},[cells])

useEffect(()=>{
  if(cells.every((cell)=> cell !="" ) && !winMsg) 
  {setwinMsg('draw!!')} 


},[cells,winMsg])


  return (
    <main className='fullScreen'>
    <div className="gameBoard">
      {cells.map((cell,index)=>(
      <Cell
      cell={cell}
      id={index} 
      go={go} 
      setGo={setGo} 
      key={index}
      cells={cells}
      setCells={setCells}
      winMsg={winMsg}/>
))}
</div>
<div>
  <h1 className="sentance">{`${winMsg}`}</h1>
  {!winMsg && <h1 className="sentance">{`it's now ${go} turn`}</h1> }
  </div>
    </main>
  )
}
