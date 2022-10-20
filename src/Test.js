import React from 'react'
export default function Test(){
    const [istrue , setvalue]= React.seState(true);
function change(){
    setvalue(prevstate=>!prevstate)
}
    return(
        <div onClick={change} >
            <h1>{istrue ? 'yes':'no'}</h1>
            </div>
    )
// }
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         setSquares(prevSquares => {
//             const newSquares = []
//             for(let i = 0; i < prevSquares.length; i++) {
//                 const currentSquare = prevSquares[i]
//                 if(currentSquare.id === id) {
//                     const updatedSquare = {
//                         ...currentSquare,
//                         on: !currentSquare.on
//                     }
//                     newSquares.push(updatedSquare)
//                 } else {
//                     newSquares.push(currentSquare)
//                 }
//             }
//             return newSquares
//         })
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             key={square.id} 
//             id={square.id}
//             on={square.on} 
//             toggle={toggle}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }



// export default function Box(props) {
//     const styles = {
//         backgroundColor: props.on ? "#222222" : "transparent"
//     }
    
//     return (
//         <div 
//             style={styles} 
//             className="box"
//             onClick={()=>props.toggle(props.id)}
//         >
//         </div>
//     )
// }