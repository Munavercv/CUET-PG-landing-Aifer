import React from 'react';
import styles from './CTAButton.module.css';

const CTAButton = ({ text }) => {
    return (
        <div>
            <button className={styles.ctaBtn}>
                {text}
            </button>
        </div>
    );
};

export default CTAButton;
