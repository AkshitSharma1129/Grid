import React, { useState } from 'react';
import './Form.css';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../../Context/SearchContext';
import Modal from '../../Search/Modal';

const Form = ({ setModalOpen }) => { // Pass setModalOpen as a prop
  const [searchInput, setSearchInput] = useState('');
  const searchContext = useContext(SearchContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    adjustInputSize();
  };

  const adjustInputSize = () => {
    const input = document.getElementById('searchInput');
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchContext.setSearchQuery(searchInput);
    navigate('/search');
  };

  return (
    <div>
      <form className="search__form" onSubmit={handleFormSubmit}>
        <input
          id="searchInput"
          type="text"
          placeholder="Describe the outfit you are looking for!!"
          className="search__form__input"
          value={searchInput}
          onChange={handleInputChange}
          required
          onClick={() => setModalOpen(true)} // Open the modal when clicked
        />
        <button className="search__form__button" type="submit">
          <SearchIcon fontSize="medium" />
        </button>
      </form>
    </div>
  );
};

export default Form;
