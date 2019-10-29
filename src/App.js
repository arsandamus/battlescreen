import React from 'react';
import Player from './components/Player'
import Enemy from './components/Enemy'
import Dragon from './components/meta1_animated.gif'
import Avatar from './components/avatar_animated.gif'
import Command from './components/Commands'
import Dialog from './components/Dialog'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
       <div className='game-area'>
         <div className='enemystatus-area'>
            <Enemy name={'Dragon'}/>
            <img className='dragon' src={Dragon} alt='Dragon'></img>
            
         </div>
         <div className='playerstatus-area'>
         <img className='avatar' src={Avatar} alt='Avatar'></img>
            <div className='dialog-area'>
            
            <Dialog/>
            <Player/>
            </div>
            <Command />
            
            
            
         </div>
       </div>
      </div>
    );

  }
  
}

export default App;
