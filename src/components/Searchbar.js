import React, {useState} from 'react'
import '../styles/Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function Searchbar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        });

        if(searchWord === ""){
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }   
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    
  
    return (
    <div className="search">
        <div className="searchInput">
            <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className="searchIcon">
                { filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} /> }
            </div>
        </div>
        {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                    <p>{value.name}</p>
                    ) 
                })};
            </div>
        )}
    </div>
    )
}

export default Searchbar