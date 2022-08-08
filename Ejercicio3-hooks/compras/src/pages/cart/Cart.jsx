import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom';


export const Cart = () => {
  return (
    <div>
          <nav>
            <div className="conteiner">
              <span className="logo">Productos </span>
              <span className="cart-text">Tu Compra</span>
            </div>
          </nav>
    
          <main>
            <div className="cart-item-list">
                <div className="cart-item">
                    <div className="cart-item-title">Descripcion del producto</div>
                    <div className="cart-item-details-list">
                        <span className="cart-detail">
                            <span className="title">Talle </span>
                            <span className="content">S </span>
                        </span>
                        <span className="cart-detail">
                            <span className="title">Color </span>
                            <span className="content">Miel</span>
                        </span>
                    </div>
                    <div className="cart-item-footer">
                        <span className="cart-item-price">3.990,00 ARS</span>
                        <div className="cart-item-count">
                            <span className="subs">- </span>
                            <span className="qty">1</span>
                            <span className="add"> +</span>
                        </div>
                    </div>
                </div>

                <div className="cart-item">
                    <div className="cart-item-title">Descripcion del producto</div>
                    <div className="cart-item-details-list">
                        <span className="cart-detail">
                            <span className="title">Talle </span>
                            <span className="content">L </span>
                        </span>
                        <span className="cart-detail">
                            <span className="title">Color </span>
                            <span className="content">Blanco con estampa</span>
                        </span>
                    </div>
                    <div className="cart-item-footer">
                        <span className="cart-item-price">3.990,00 ARS</span>
                        <div className="cart-item-count">
                            <span className="subs">- </span>
                            <span className="qty">1</span>
                            <span className="add"> +</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="buttons">
                <Link to='/' className="btn-keep">Sigue comprando </Link>
                <span className="btn-checkout">
                    <span>Pagar </span> 
                    <span className="total">7.980,00 ARS</span>
                </span>
            </div>
          </main>
        </div>
  )
}
