
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import './App.css';

function App() {

  const url = 'http://localhost:3001'
  const socket = io(url)


  const name = useRef()

  const handle = ()=>{
    const data = name.current.value
    socket.emit('chat',data)

  }


  socket.on('chat',(data)=>{
    console.log(data)
  })

  useEffect(() => {
   

  }, [])
  

  return (
   <>
    <div>
      <div>

    <input type="text" ref={name} />
<button onClick={handle}>Submit</button>
      </div>
    </div>
   </>
  );
}

export default App;
