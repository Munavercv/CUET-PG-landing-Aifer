import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar shadow-sm">
                <div className="container">
                    <a className="navbar-brand">
                        <img
                            src="https://aifer.in/_next/image?url=%2Fimages%2FAifer%20Logo%20Final.png&w=256&q=75"
                            alt="Aifer"
                            className={`${styles.brand} d-inline-block align-text-top`}
                        />
                    </a>
                    <div className="ms-auto d-flex align-items-center">
                        <a
                            href="#courses"
                            className="text-secondary me-3 me-sm-5 text-decoration-none fw-semibold nav-link"
                        >
                            Courses
                        </a>
                        <button className={`${styles.joinBtn} fw-bold`}>Join Now</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
