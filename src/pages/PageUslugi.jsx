import React from "react";
import About from "../components/About";
import Accordion from "../components/Accordion";
import CarType from "../components/CarType";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OstavitZayavku from "../components/OstavitZayavku";
import './glavniy.css'

const PageUslugi = () =>{
    return(
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
            <div className="page2_bg">
                <CarType />
                <About />
                <OstavitZayavku />
                <Accordion />
            </div>   
        <Footer />
    </div>
    )
}

export default PageUslugi