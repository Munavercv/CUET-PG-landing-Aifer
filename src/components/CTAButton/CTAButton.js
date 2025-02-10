import React from 'react';
import styles from './CTAButton.module.css';
import { useDispatch } from 'react-redux';
import { toggleShow } from '../../redux/slices/enrollPopupSlice';

const CTAButton = ({ text }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                className={styles.ctaBtn}
                onClick={() => dispatch(toggleShow())}
            >
                {text}
            </button>
        </div>
    );
};

export default CTAButton;
