import React from 'react'
import location from '../img/location.png'
import sleep from '../img/hotel.png'
import styles from './Card.module.css';
import Price from '../Price/Price';

const Card = ({ hotel }) => {

    const { name, photo, description, city, country, rooms, price } = hotel;

    return (
        <div className={`column is-5-tablet is-mobile is-4-desktop ${styles.column_wrapper}`}>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img
                            src={
                                photo.charAt(0) !== '.' ? photo : 'https://media.staticontent.com/media/pictures/37daa642-6968-4338-ba53-6ece05a59d07/853x0?op=NONE&enlarge=false&gravity=ce_0_0&quality=80'
                            }
                            alt={name}
                        />
                    </figure>
                </div>
                <div className={`card-content ${styles.card_wrapper}`}>
                    <div className={`media ${styles.media_wrapper}`}>
                        <div className="media-left"></div>
                        <div className="media-content">
                            <p className={`title is-4 ${styles.name}`}>{name}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p className={styles.description}>{description}</p>
                        <div className={`${styles.div_wrapper}`}>

                            <div className={`${styles.img_wrapper}`}>
                                <img src={location} alt="" />
                            </div>
                            <span className={`${styles.text}`}>{city}, {country}</span>
                        </div>

                        <div className={`${styles.div_wrapper}`}>
                            <div className={`${styles.img_wrapper}`}>
                                <img src={sleep} alt="" />
                            </div>
                            <span className={`${styles.text}`}>{rooms} Habitaciones</span>
                        </div>

                        <div className={`${styles.img_wrapper_special}`}>
                            <Price price={price} />
                        </div>
                        <br />

                        <a href="#" className={`button is-info ${styles.button}`}>
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

/*rafce*/