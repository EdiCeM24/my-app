import React, {useReducer, useState} from 'react';




const myTask = (state, action) => {
   switch(action.type) {
    case 'addTodo':
      return [
          ...state,
          {
            id: Date.now(),
            text: action.payload
          } 
      ];
      case 'remove':
        return state.filter(todo=> todo.id !== action.payload)

       default :
       return state 
        
   } 
}
const initialState = [];

let num = [1, 2, 3, 4]
let d = num.filter(x => x !== 2)
console.log(d)

const Task = () => {
    const [ state, dispatch ] = useReducer(myTask, initialState);

    const [ todo, setTodo ] = useState('');

    function handleTodo() {
        if(todo.trim() === "")
            return;
        dispatch({type: 'addTodo', payload: todo})
        setTodo("");
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
           handleTodo();
        }
    }

  return (
    <div className='flex mt-40 items-center justify-evenly gap-3'>
       <input type='text' 
          className='mb-10'
          name='text'
          onKeyDown={handleKeyPress}
          placeholder='Enter a task'
          value={todo} 
          onChange={(e) => setTodo(e.target.value)} 
        />
       <button type='submit '  onClick={handleTodo} className='mb-10'>Add</button>
       
       <ol>
         {state.map(todo => (
            <li key={todo.id}>{todo.text})</li>)}
              <button 
                onClick={() => dispatch({type: ' remove', payload: todo.id})}>Remove</button>
            </li>    
       </ol>
    
       
    </div>
  )
}

export default Task
