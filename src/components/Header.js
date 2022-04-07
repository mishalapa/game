import React from 'react'

const Header = ({selectedQuestion}) => {
  return (
    <div className='text'>
    <h1>Палач</h1>
    <p>Ваш вопрос: <span>{selectedQuestion}</span>?</p>
    <p>Введите букву:</p>
    </div>
  )
}

export default Header