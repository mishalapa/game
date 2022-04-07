import React from 'react'

const Figure = ({wrongLetters}) => {
    const errors = wrongLetters.length;
  return (
    <svg height="450" width="300" className="figure__container">

        <line x1="60" y1="20" x2="240" y2="20"></line>
        <line x1="240" y1="20" x2="240" y2="50"></line>
        <line x1="60" y1="20" x2="60" y2="350"></line>
        <line x1="0" y1="350" x2="120" y2="350"></line>

   
        {errors > 0 && <circle className='color__man' cx="240" cy="80" r="30"></circle>}
    
        {errors > 1 && <line className='color__man' x1="240" y1="110" x2="240" y2="190"></line>}
  
        {errors > 2 && <line className='color__man' x1="240" y1="130" x2="190" y2="100"></line>}
        {errors > 3 && <line className='color__man' x1="240" y1="130" x2="290" y2="100"></line>}
   
        {errors > 4 && <line className='color__man' x1="240" y1="190" x2="190" y2="250"></line>}
        {errors > 5 && <line className='color__man' x1="240" y1="190" x2="290" y2="250"></line>}
        
      </svg>
  )
}

export default Figure