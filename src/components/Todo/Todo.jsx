const Todo = ({ todo, handleCompleted, handleDelete }) => {
    const {id, title, completed } = todo
    return (
        <div className=" flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() =>  handleCompleted(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="check-icon.svg" alt="Check Icon" />
                        </div>
                    ) : (
                        <span onClick={() =>  handleCompleted(id)} className="border border-solid border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={"pl-3" + (completed && "line-through")}> {/**condicion si ya fue completado se va tachar la tarea*/}
                     { title } 
                </p>
            </div>
            <img
                onClick={() => handleDelete(id)}
                className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
                src="/close-icon.svg"
                alt="Close Icon"
            />
        </div>
    )
}

export { Todo }