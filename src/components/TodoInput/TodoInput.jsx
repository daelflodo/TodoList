import { useState } from "react"
import { Todo } from "../Todo/Todo"


const TodoInput = ({addTodo}) => {

    const [title, setTitle] = useState('')

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleTodo = (event) => {
        if(event.key.toLowerCase() === 'enter'){
            addTodo(title)
            setTitle('') //limpiamos el input
        }
    }

   

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className=" border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input
                type="text"
                className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                placeholder="What's next..."
                onChange={handleChange}
                value={title}
                /**Al precionar una tecla especifica nos permite darle un evento */
                onKeyDown={event => handleTodo(event)}
            />
        </div>
    )
}
export { TodoInput }