
import React from 'react'

const SearchFilter = ({search, setSearch, filter, setFilter, countries, setCountries}) => {

    const HandleOnchange = (event)=>{
        event.preventDefault();
          setSearch(event.target.value);
    }
    const HandleSelectChange = (event)=>{
        event.preventDefault();
        setFilter(event.target.value);
    }
    
  return (
    <section className='section-searchFilter container'>
     <div>
    <input 
    type='text'
    placeholder='Search'
    value={search}
    onChange={HandleOnchange}
    />
</div> 
   
      <div>
        <select
          className="select-section"
          value={filter}
          onChange={HandleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
