import React from 'react'
import './Card.scss'
const Card = ({title="Пока не указоно" , price="Не указона", photo="https://cdn.pixabay.com/animation/2023/11/09/03/05/03-05-45-320_512.gif" }) => {
  return (

<>
<div className="card">
            <img src={photo} alt="" />
            <h3>{title}</h3>
            <p>200$</p>
            <button>купить</button>
        </div>
</>

    )
}

export default Card