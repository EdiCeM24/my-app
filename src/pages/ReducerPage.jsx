import React, { useReducer } from 'react';


function reducer (state, action ) {
     switch(action.type) {
        case 'increment':
            return {count: state.count +1}
            case 'decrement':
                return {count: state.count -1}
                case 'reset': 
                   return {count: 0}
                 default:
                    return state;  
     }
}

const ReducerPage = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});



  return (
    <div className='p-20 text-center justify-center text-2xl text-white font-semibold'>
       <h2 className='mb-6'>A Reducer is a new tutorials in the year 2025.</h2>
       <p className='border px-8 py-4 w-36 mx-auto rounded-sm text-center'>{state.count}</p>
       <button onClick={() =>dispatch({type: 'increment'})} className='block mx-auto bg-gradient-r from-blue-500 via-purple-500 to-pink-500 w-24 p-2 hover:text-fuchsia-500 transition duration-150 ease-in-out'>Increment</button>
       <button onClick={() =>dispatch({type: 'decrement'})} className='block mx-auto bg-gradient-r from-blue-500 via-purple-500 to-pink-500 w-24 p-2 hover:text-fuchsia-500 transition duration-150 ease-in-out'>Decrement</button>
       <button onClick={() =>dispatch({type: 'reset'})} className='block mx-auto bg-gradient-r from-blue-500 via-purple-500 to-pink-500 w-24 p-2 hover:text-fuchsia-500 transition duration-150 ease-in-out'>Reset</button>
    </div>
  )
}

export default ReducerPage
