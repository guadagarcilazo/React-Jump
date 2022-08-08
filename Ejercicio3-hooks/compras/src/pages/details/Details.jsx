import React from 'react';
import "./Details.css";
import {Link} from 'react-router-dom';

export const Details = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <span className="logo">Detalles del producto </span>
          <Link to="/cart" className="cart-button">Carrito</Link>
        </div>
      </nav>

        <div className="back-button">
            <Link to='/'>Volver</Link>
        </div>

      <main>
            <div className="details-wrapper">

                <div className="image-wrapper">
                    <img src="https://static.zara.net/photos///2022/W/0/1/p/5857/052/088/2/w/750/5857052088_6_1_1.jpg?ts=1653041220579" alt="Imagen detalle" />
                </div>

                <h2 className="title">CAMISETA ASIMÉTRICA BÁSICA</h2>

                <div className="content">
                    <p>Camiseta de cuello redondo y manga corta. Bajo asimétrico.</p>
                    <p>Trabajamos con nuestros proveedores, trabajadores, sindicatos y organismos internacionales para desarrollar una cadena de suministro en la que se respetan y promueven los derechos humanos, contribuyendo a los Objetivos de Desarrollo Sostenible</p>
                </div>

                <div className="product-info">
                    <div className="colores">
                        <hr/>
                        <ul className="colors-list">
                            <li>Floreado</li>
                            <li>Blanco con estampa</li>
                            <li>Miel</li>
                        </ul>
                        <hr/>
                    </div>

                    <div className="tallas">
                        <hr/>
                        <ul className="sizes-list">
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                        </ul>
                        <hr/>
                    </div>

                    <div className="price">
                        <span className="price-text">3.990,00 ARS</span>
                    </div>
                </div>
            </div>

            <div className="add-to-cart-wrapper">
                <Link to='/cart' className="add-to-cart-button">Añadir al carrito</Link>
            </div>
      </main>
    </div>
  )
}




