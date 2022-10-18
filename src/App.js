import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {action, animation, comedy, horror, originals, romance} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
function App( ) {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'  />
      <RowPost url={action} title='Action' isSmall  />
      <RowPost url={comedy} title='Comedy' isSmall  />
      <RowPost url={horror} title='Horror' isSmall  />
      <RowPost url={romance} title='Romance' isSmall  />
      <RowPost url={animation} title='Animation' isSmall  />
    </div>
  )
  };

// import axios from 'axios';
// import {useState} from 'react';

// function App() {
//   const [state,setState] =useState([])
//   return (
//     <div>
//       <h1>Hello world</h1>
//       <button  onClick={()=>{
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=>{ 
//           //console.log(response.data)
//           setState(response.data)
//         })
//       }}> Click Me </button>
//       {state.map((obj,index)=>{
//         return(
//          <div>
//            <h1> {index +1} </h1>
//            <h1>{obj.title}</h1>
//            <h4>{obj.body}</h4>
//          </div> 
          
//         )
        
//       })}
//     </div>
//   )
// }

export default App




