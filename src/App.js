// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           hello world
//         </a>
//       </header>
//     </div>
//   );
// }

class ABC extends Component {
  render(){
    this.state = {
      name : "Almas",
      roll_num : 16,
      skills : ["HTML" , "CSS" , "JS" , "Bootstrap"]
    }
    return(
      <>
      <h1>Class Component</h1>
      <h2>Name :  {this.state.name}</h2>
      <h2>Roll-num :  {this.state.roll_num}</h2>
      {this.state.skills.map((i)=>(
        <p> : {i}</p>
      ))}
      
      </>

    )
  }

}

export default ABC;
