import { FilterButton, FilterButtonContainer, FilterContainer, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = () => {
    return(
        <FilterContainer>
            <ItemsLeft/>
            <FilterButtonContainer>
                <FilterButton action = {()=>{}} active = 'All' filter='All'/> 
                <FilterButton action = {()=>{}} active = 'All' filter='Active'/> 
                <FilterButton action = {()=>{}} active = 'All' filter='Completed'/>
            </FilterButtonContainer>
        </FilterContainer>
    )
}

export { TodoFilters }