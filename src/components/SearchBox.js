import React from 'react';

const SearchBox = ({searchfield, seachChange }) => {
    return (
    <div className='pa2 ba b--green bg-lightest-blue'>
        <input 
          type='search' 
          placeholder='Search Robots'
          onChange={seachChange}
        />
    </div> 

    );
}

export default SearchBox;