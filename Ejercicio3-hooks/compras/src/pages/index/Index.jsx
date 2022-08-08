import React from 'react'
import {Link} from 'react-router-dom';
import './Index.css';

export const Index = () => {
  return (
    <div>
    <nav>
        <div className="nav-wrapper">
            <span className='h1'>Productos</span>
            <Link to="/cart" className="cart-button">Carrito</Link>
        </div>
    </nav>

    <main>
        <div className="search-box-wrapper">
            <input type="text" placeholder='Buscar más productos' className="search-box" />
        </div>
        <div className="list-wrapper">
            <section className="list">
                <Link to='/details/1' className="list-item">
                    <img src="https://static.zara.net/photos///2022/W/0/1/p/5857/052/088/2/w/750/5857052088_6_1_1.jpg?ts=1653041220579" alt='Imagen' />
                    <div className="list-item-box">
                        <span>Más detalles sobre el producto</span>
                    </div>
                </Link>
                <Link to='/details/2' className="list-item">
                    <img src="https://static.zara.net/photos///2022/W/0/1/p/4174/952/023/2/w/750/4174952023_6_1_1.jpg?ts=1639484560046" alt='Imagen' />
                    <div className="list-item-box">
                        <span>Más detalles sobre el producto</span>
                    </div>
                </Link>
                <Link to='/details/3' className="list-item">
                    <img src="https://static.zara.net/photos///2022/S/0/1/p/5857/815/750/2/w/750/5857815750_6_1_1.jpg?ts=1659698525102" alt='Imagen' />
                    <div className="list-item-box">
                        <span>Más detalles sobre el producto</span>
                    </div>
                </Link>
                <Link to='/details/4' className="list-item">
                    <img src="https://static.zara.net/photos///2022/S/0/1/p/5857/052/042/2/w/750/5857052042_6_1_1.jpg?ts=1659439490539" alt='Imagen' />
                    <div className="list-item-box">
                        <span>Más detalles sobre el producto</span>
                    </div>
                </Link>
                <Link to='/details/5' className="list-item">
                    <img src="https://static.zara.net/photos///2022/S/0/1/p/1131/321/250/2/w/750/1131321250_6_1_1.jpg?ts=1659441276157" alt='Imagen' />
                    <div className="list-item-box">
                        <span>Más detalles sobre el producto</span>
                    </div>
                </Link>
            </section>

        </div>

    </main>
</div>
  )
}


