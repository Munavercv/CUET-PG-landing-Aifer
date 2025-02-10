import React from 'react'
import CTAButton from '../CTAButton/CTAButton'
import styles from './EnrollNow.module.css'

const EnrollNow = () => {
    return (
        <section className='border-bottom border-2'>
            <div className={`${styles.enrollContainer} container py-4 text-center`}>
                <h2 className='dark-text'>Enroll Now</h2>
                <h6
                >Start Your Journey Today with Aifer Education.</h6>
                <div className='mt-4'>
                    <CTAButton text="Enroll Now"/>
                </div>
            </div>
        </section>
    )
}

export default EnrollNow
