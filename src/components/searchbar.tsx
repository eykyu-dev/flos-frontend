import './searchbar.css'
import { GoSearch } from 'react-icons/go';

function SearchBar(){
    return(
        <div className="input-box">
            <input placeholder="What are you looking for?"></input>
            <button id="search-icon"><GoSearch size={24}/></button>
        </div>
    )
}

export default SearchBar