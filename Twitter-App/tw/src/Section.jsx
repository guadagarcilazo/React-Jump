import React from 'react';
import './Section.css'

export function Section() {
    return (
        <div className='contenedor-iconos'>
        <a href='' className="fa-regular fa-envelope"></a>
        <a href='' className="fa-regular fa-rectangle-list"></a>
        <a href='' className="fa-regular fa-bookmark"></a>
        <a href='' className="fa-regular fa-circle"></a>
        <span href='' className='point-circle'>...</span>
        <div>
        <a href="#" className="myButton">+</a>
        <div className='line'></div>
        <div className='lini'></div>
        </div>
        </div>
    )
}