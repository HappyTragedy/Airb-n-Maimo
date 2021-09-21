import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <section className={`hero is-info ${styles.navbar}`}>
            <div className="hero-body">
                <p className="title">
                    Bienvenidos a Maimo
                </p>
                <p className="subtitle">
                    Los mejores hoteles
                </p>
            </div>
        </section>
    );
}

export default NavBar;