import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className='container-fluid my-3'>
            <div className={styles.footer}>
                <div className="py-3 px-5">
                    <div className="row mt-5 justify-content-center">
                        <div className={`col-md-4 mb-1 ${styles.brandSide} me-xl-5`}>
                            <a href="/" className="d-flex align-items-center mb-5 ms-3 link-dark text-decoration-none">
                                <img
                                    className={styles.logo}
                                    src='https://aifer.in/_next/image?url=%2Fimages%2FAifer%20Logo%20Final%20White.png&w=256&q=75'
                                    alt="Aifer"
                                />
                            </a>

                            <h5>Follow Aifer</h5>
                            <p className='mb-3'>Follow Aifer Education for offers, course notifications and many more on our social media accounts.</p>

                            <div className={`${styles.socialLinks} d-flex flex-column flex-sm-row justify-content-between pt-4 mb-0 social-icons`}>
                                <ul className="list-unstyled d-flex">
                                    <li className="me-4"><a href="#">
                                        <span>
                                            <i className="fa-brands fa-twitter"></i>
                                        </span>
                                    </a></li>
                                    <li className="me-4"><a href="#">
                                        <span>
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </span>
                                    </a></li>
                                    <li className="me-4"><a href="#">
                                        <span>
                                            <i className="fa-brands fa-instagram"></i>
                                        </span>
                                    </a></li>
                                    <li className="me-4"><a href="#">
                                        <span>
                                            <i className="fa-brands fa-youtube"></i>
                                        </span>
                                    </a></li>
                                </ul>
                            </div>

                        </div>


                        <div className={`col-md-2 mb-1 mt-4 ms-lg-5 ${styles.quickLinks}`}>
                            <h5 className='mb-3'>About Aifer</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Mentors</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Success Stories</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Contact Us</a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">Careers</a></li>
                            </ul>
                        </div>

                        <div className={`${styles.quickLinks} col-md-2 mb-1 mt-4 quick-links`}>
                            <h5 className='mb-3'>Top Courses</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">UGC NET Coaching</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">MPhil Clinical Psycology</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">PsyBridge</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Free Basic Course</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">E-Book</a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">Free Study Materials</a></li>
                            </ul>
                        </div>

                        <div className={`${styles.quickLinks} col-md-3 mb-1 mt-4 quick-links`}>
                            <h5 className='mb-3'>Contact with us</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">+91 87145 75425 </a></li>
                                <li className="nav-item"><a href="#" className="nav-link p-0 text-white">education@aifer.in</a></li>
                            </ul>
                        </div>
                    </div>

                    <hr className='mb-1' />

                    <div className={`d-flex flex-column align-items-center text-center mb-2 ${styles.footerBottom}`}>
                        <p className="d-flex gap-2 justify-content-center mb-4">
                            <a className="text-white me-md-3" href="#">*Terms of services</a>
                            <a className="text-white me-md-3" href="#">*Privacy Policy</a>
                            <a className="text-white" href="#">*Refund policy</a>
                        </p>
                        <p className="mb-0">© Aifer Education 2025. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
