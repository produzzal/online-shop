import React, { useEffect, useState } from 'react';
import './Shop.scss'

const Shop = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='contenedorCards grid grid-cols-2 md:grid-cols-5'>

            {
                product.map(item => <div class="card">
                    <div class="wrapper">
                        <div class="colorProd"></div>
                        <div class="imgProd">
                            <img
                                src={item.picture}
                                alt=""
                                className=" h-[310px] w-[325px]"
                            />
                        </div>
                        <div class="infoProd">
                            <p class="nombreProd">
                                {item.name}
                            </p>
                            <p class="extraInfo">{item.date}</p>
                            <div class="actions">
                                <div class="preciosGrupo">
                                    <p class="precio precioOferta">{item.price}</p>
                                    <p class="precio precioProd">{item.discount_price}</p>
                                </div>
                                <div class="icono action aFavs">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                        <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
                                    </svg>
                                </div>
                                <div class="icono action alCarrito">
                                    <svg
                                        class="inCart"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 64 64"
                                    >
                                        <title>Quitar del carrito</title>
                                        <path d="M30 22H12M2 6h6l10 40h32l3.2-9.7"></path>
                                        <circle cx="20" cy="54" r="4"></circle>
                                        <circle cx="46" cy="54" r="4"></circle>
                                        <circle cx="46" cy="22" r="16"></circle>
                                        <path d="M53 18l-8 9-5-5"></path>
                                    </svg>
                                    <svg
                                        class="outCart"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 64 64"
                                    >
                                        <title>Agregar al carrito</title>
                                        <path d="M2 6h10l10 40h32l8-24H16"></path>
                                        <circle cx="23" cy="54" r="4"></circle>
                                        <circle cx="49" cy="54" r="4"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Shop;