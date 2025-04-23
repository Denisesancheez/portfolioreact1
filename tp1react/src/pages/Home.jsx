import React from 'react';
import Header from '../components/Header';
import FotoCard from '../assets/FotoCard.jpeg'; 
import Main from '../components/Main';
import Footer from '../components/Footer';

const Home = () => {
    let Alumno = {
        nombre: "Denise",
        apellido: "Sanchez",
        Edad: 23,
        Lenguajes: ["JavaScript", "HTML", "CSS", "C#"],
        mascota: [
            {
                nombre: "cacho",
                especie: "perro",
                edad: 11
            }
        ],
        imagen: FotoCard 
    };

    return (
        <div>
            <Header />
            <Main Alumno ={Alumno}/>
            <Footer/>
        </div>
    );
};

export default Home