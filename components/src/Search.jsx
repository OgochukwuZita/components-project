 import {useState}from 'react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState('');

   const handleInputChange = (event) => {
     setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchResult(event.target.value);
    }
  };
  return (
    <div className='search'>
           <input
        type="text"
        placeholder="Search..."
       value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {<p style={{color:'white'}}>{searchResult}</p>}
    </div>
  );
 }


