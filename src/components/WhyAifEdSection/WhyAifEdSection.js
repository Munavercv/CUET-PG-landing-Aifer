import React from 'react'
import styles from './WhyAifEdSection.module.css'

const WhyAifEdSection = () => {

    return (
        <section className={styles.WhyChooseAiSec}>
            <div className="container py-3" id="icon-grid">
                <h2 className='section-title text-black'>Why Aifer Education <span>?</span></h2>
                <hr className='border-3' style={{width: "25%"}}/>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-3">
                    <div className="col d-flex align-items-start">
                        <div className={`${styles.checkIcon} me-2`}>
                            <i className="fa-solid fa-person-chalkboard"></i>
                        </div>
                        <div>
                            <h3 className="fw-semibold mb-0 fs-4"><span className='fw-bold fs-2'>3+</span> Years of Excellence in Education </h3>
                            <p>Experience the difference with over 3 years of delivering top-tier education.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className={`${styles.checkIcon} me-2`}>
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>
                        <div>
                            <h3 className="fw-semibold mb-0 fs-4"><span className='fw-bold fs-2'>2K+</span> Successful Results</h3>
                            <p>Thousands of students have successfully cracked their exams with Aifer’s guidance.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className={`${styles.checkIcon} me-2`}>
                        <i className="fa-solid fa-ranking-star"></i>
                        </div>
                        <div>
                            <h3 className="fw-semibold mb-0 fs-4"><span className='fw-bold fs-2'>50+</span> Rank Holders</h3>
                            <p>Join our growing list of top achievers who have reached the pinnacle of success in CUET PG.</p>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}

export default WhyAifEdSection
