import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import Dragon from './components/Dragon.gif'
import Command from './components/Commands'
import Dialog from './components/Dialog'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
       <div className='game-area'>
         <div className='status-area'>
            <Player />
            <Enemy name={'Dragon'}/>
         </div>
         <div className='dragon-area'>
            <Command />
            <img className='dragon' src={Dragon} alt='Dragon'></img>
         </div>
         <div className='dialog-area'>
            <Dialog/>
         </div>
       </div>
      </div>
    );

  }
  
}

export default App;
