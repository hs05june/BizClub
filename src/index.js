import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyle from './Pages/styles/GlobalStyle';
import Draggable from 'react-draggable'


ReactDOM.render(
  <React.StrictMode>
    
    <GlobalStyle />
    <BrowserRouter>
    {/* <Draggable
        axis="x"
        handle=".overall"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}> */}
      <App />
      {/* </Draggable> */}
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

