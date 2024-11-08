import React from "react"
import "./Header.scss"
import Card from "../Card/Card"
import Title from "../Title/Title"

const Header = () => {
    return (
        <>
        <Title>Транспорт</Title>
            <div className="wrap">
                <Card title="Велосипед" photo="/card4.png" /> 
                <Card title="Мотоцикл" photo="/card2.webp" /> 
                <Card title="Самокат" photo="/card3.jpg" /> 
                <Card  /> 
              
            </div>
        </>
    )
}

export default Header
