import { useState } from 'react';


const CounterApp: React.FC = () => {

    const [count, setCount] = useState(0);


    return (
        <div className="h-screen w-full grid place-content-center space-y-4">
            <h1 className="text-xl text-blue-600">Counter App</h1>
            <p className="text-center text-4xl text-fuchsia-500">Count: {count}</p>

            <button 
                onClick={() => setCount(count + 1)}
                className="bg-blue-400 px-6 py-2 rounded-md text-white"
            >
                Increment
            </button>

            <button 
                onClick={() => setCount(count - 1)}
                className="bg-blue-400 px-6 py-2 rounded-md text-white"
            >
                Decrement
            </button>

            <button
                onClick={() => setCount(0)} 
                className="bg-blue-400 px-6 py-2 rounded-md text-white"
            >
                Reset
            </button>
        </div>
    )
}


export default CounterApp;