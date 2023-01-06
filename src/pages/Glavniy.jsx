import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import './glavniy.css'

const Glavniy = () =>{
    return (
        <div className="glavniy">
            <Navbar />
                <header>
                    <div className="container">
                        <h1>Доставим ваш груз в любую точку России</h1>
                        <p>Доставляем сборный груз от 1кг по всей стране узнай стоймость перевозки прямо сейчас</p>
                    </div>
                    <div className="header_button">
                        <div className="calculator">
                        <div className="calc_bg">
                            <div className="calc_img"></div>
                        </div>
                        <h4>расчитать стоймость</h4>
                        </div>
                        <div className="girl">
                        <div className="girl_bg">
                            <div className="girl_img"></div>
                        </div>
                        <h4>личный менеджер</h4>
                        </div>
                    </div>
                </header>
                    <Section />
                    
            <Footer />
        </div>
    )
}

export default Glavniy