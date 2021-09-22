import React from 'react'
import Card from '../Card/Card';
import styles from './Main.module.css';
import { ReactComponent as Loader } from '../img/loader.svg';

const Main = ({ isLoading, hotels }) => {
    return (
        <div className={`container ${styles.container_wrapper}`}>
            {!isLoading ? (
                hotels.length > 0 ? (
                    <div className="columns is-multiline is-centered">
                        {hotels.map((hotel) =>
                            <Card hotel={hotel} key={hotel.name} />
                        )}
                    </div>
                )
                    :
                    (<p> No hay resultados que coincidan con esta búsqueda.. </p>)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Main
