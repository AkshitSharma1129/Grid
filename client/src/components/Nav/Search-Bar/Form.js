import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'
import { useContext } from 'react';
import { SearchContext } from '../../../Context/SearchContext';
// import Modal from './Modal'
const Form = () => {
    const [ searchInput, setSearchInput] = useState('')
    const searchContext = useContext(SearchContext)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
      setSearchInput(e.target.value);
      adjustInputSize(); // Call a function to adjust input size based on content
  };

  const adjustInputSize = () => {
      const input = document.getElementById('searchInput');
      input.style.height = 'auto';
      input.style.height = input.scrollHeight + 'px';
  };

    const handelFormSubmit = (e) => {  
        e.preventDefault()
        searchContext.setSearchQuery(searchInput)
        navigate('/search')
    }
    
    return ( <div>
            <form className="search__form" onSubmit={handelFormSubmit}>
            {/* <textarea
                    className="search__form_input"
                    placeholder="Describe the outfit you are looking for!!"
                    value={searchInput}
                    onChange={handleInputChange}
                     required 
                /> */}
                {/* <input type="text"  placeholder='Descibe the outfit you are lookin for !!' className="search__form__input" value={searchInput} onChange={handelChange} required/> */}
                <input
                    id="searchInput"
                    type="text"
                    placeholder="Describe the outfit you are looking for!!"
                    className="search__form__input"
                    value={searchInput}
                    onChange={handleInputChange}
                    required
                />
                <button className="search__form__button" type='submit'>
                    <SearchIcon fontSize='medium'/>
                </button>
            </form>
           
              </div>
     );
}
 
export default Form;