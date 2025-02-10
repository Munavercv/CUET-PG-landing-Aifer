import React, { useState } from 'react';
import styles from './PaymentModal.module.css';
import { useDispatch } from 'react-redux';
import { toggleShow } from '../../redux/slices/enrollPopupSlice';
import offerImg from '../../assets/CUET Payment Page Banner.jpg'

const PaymentModal = () => {
    const dispatch = useDispatch();

    const [pincode, setPincode] = useState('');

    const handlePincodeChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue.length <= 6) {
            setPincode(inputValue);
        }
    };

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupBox}>
                <div className={styles.imageContainer}>
                    <img
                        src={offerImg}
                        alt="Modal Image"
                        className={styles.modalImage}
                    />
                    <button
                        className={styles.closeBtn}
                        onClick={() => dispatch(toggleShow())}
                    >
                        &times;
                    </button>
                </div>

                <div className={`${styles.inputContainer} shadow-sm py-3 px-2`}>
                    <form>
                        <div className='mb-1'>
                            <input
                                type="number"
                                className="form-control"
                                id="pincode"
                                name='pincode'
                                placeholder='Pincode'
                                value={pincode}
                                onChange={handlePincodeChange}
                            />
                        </div>
                        <div className="form-check text-start mb-4">
                            <input
                                className="form-check-input"
                                type="radio" name="checkRadio"
                                id="checkRadio" value="option1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="checkRadio"
                            >
                                I do accept the <a href="#">Terms & Conditions</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className={`${styles.submitBtn} w-100 py-0`}
                        >PROCEED TO PAY</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default PaymentModal;
