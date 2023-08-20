import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Form.css'
import { useContext } from 'react';
import { SearchContext } from '../../../Context/SearchContext';
import Modal from './Modal'
const Form = () => {
    const [ searchInput, setSearchInput] = useState('')
    const searchContext = useContext(SearchContext)
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handelChange = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value.length > 0) {
            setIsModalOpen(true);
          } else {
            setIsModalOpen(false);
          }
    }

    const handelFormSubmit = (e) => {  
        e.preventDefault()
        searchContext.setSearchQuery(searchInput)
        navigate('/search')
    }
    const closeModal = () => {
        setIsModalOpen(false);
      };
    return ( <div>
            <form className="search__form" onSubmit={handelFormSubmit}>
                <input type="text"  placeholder='Descibe the outfit you are lookin for !!' className="search__form__input" value={searchInput} onChange={handelChange} required/>
                <button className="search__form__button" type='submit'>
                    <SearchIcon fontSize='medium'/>
                </button>
            </form>
            {isModalOpen && (
                <Modal onClose={closeModal}>
                  {/* Place your modal content here */}
                  {/* For example, you can display a message or additional search details */}
                </Modal>
              )}
              </div>
     );
}
 
export default Form;