const FilterContainer = ({ children }) =>{
    return(
        <div className="flex items-center justify-between p-4 bg-gray-700 border-b border-solid border-gray-600">
            { children }
        </div>
    )
}

const ItemsLeft = ({total = 0}) => {
    return(
        <p className="text-gray-400 text-sm">
            { total } items left
        </p>
    )
}

const FilterButtonContainer = ( {children} ) => {
    return(
        <div className="flext items-center space-x-2">
            {children}

        </div>
    )
}

const FilterButton = ({action, active, filter}) => {
    return(
        <button className={`hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
            + (active.toLowerCase().includes(filter.toLowerCase()) // si la tarea active es exactamente el filter 
            ? 'text-blue-400' //nos pondra el texto en azul
            : 'text-gray-600')//si no lo pondra en gris
        }>
            {filter}
        </button>
    )
}
 export {FilterContainer, ItemsLeft, FilterButtonContainer, FilterButton}