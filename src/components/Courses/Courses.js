import React, { useEffect, useState } from 'react'
import styles from './Courses.module.css'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toggleShow } from '../../redux/slices/enrollPopupSlice'

const Courses = () => {
    const dispatch = useDispatch()

    const [courses, setCourses] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await axios.get('https://node.aifer.in/CUETPG')
                setCourses(data.data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])

    const handleEnroll = () => {
        dispatch(toggleShow())
    }

    const images = [
        'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://img.freepik.com/free-photo/young-people-studying-using-laptop_23-2147844843.jpg?t=st=1739166177~exp=1739169777~hmac=e1d0a9aebffc64bfaf5db5cd27a2859a3cf9e2a6193bdf0567cd6d83e20d71d0&w=1380',
        'https://img.freepik.com/free-photo/students-cafe-reading-materials_23-2147655931.jpg?t=st=1739166224~exp=1739169824~hmac=f1fc1fbce3b8181d389dbfac8db682ce536181543b4f90f6301fadc9905a1b97&w=1380',
        'https://img.freepik.com/free-photo/three-serious-students-studying-doing-homework_1262-15313.jpg?t=st=1739166319~exp=1739169919~hmac=b043da3063db1b073f5cdbd2a15f11f2b544e631efa9f97553fae7d84bb91e5b&w=1380',
        'https://img.freepik.com/free-photo/hipster-woman-teenager-sitting-enjoy-reading-book-cafe-vintage-filter-toned_1150-1486.jpg?t=st=1739166447~exp=1739170047~hmac=e6129e3671e91ba602ec2f417144f481ed116773b7b95ef903ab0e955e7f30c0&w=1380',
        'https://img.freepik.com/free-photo/men-teach-women-how-work-with-laptops-work_1150-26818.jpg?t=st=1739166477~exp=1739170077~hmac=d59a05b8ce2e98bd43ff1ff41951665e56e579510d43b687af6c63bc79c81d5b&w=1380',
        'https://img.freepik.com/free-photo/adult-students-preparing-presentation-class_1262-14795.jpg?t=st=1739166515~exp=1739170115~hmac=91df7ea9a2202d88fc4ae2d76fbce872bf38a4f640353265f1923ed373aee2c6&w=1380',
        'https://img.freepik.com/free-photo/youngsters-with-laptop-cafe_23-2147655813.jpg?t=st=1739166582~exp=1739170182~hmac=861ea5020a721c35b926216b46e88aaa8de26cf75f1d39d22028cd25c73421bf&w=1380'
    ]

    return (
        <section className={styles.courses} id='courses'>

            <div className="py-3">
                <div className="container">
                    <h2 className='section-title text-white'>Courses We Provide</h2>
                    <h4 className='section-subtitle text-white'>We offer CUET PG coaching for the following programs</h4>
                    <hr className='border-3' style={{ width: "25%" }} />
                </div>

                <div className='container-fluid'>
                    {loading && <p className="text-center text-white mt-5">Loading courses...</p>}

                    {!loading && courses && courses.length > 0 &&
                        <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 justify-content-center">
                            {courses.map((course, index) => (
                                <div
                                    className={`${styles.card} card py-2 border-0 mb-3 rounded-4 shadow mx-sm-3 mx-lg-2 mx-3`}
                                    key={index}
                                >
                                    <img src={images[index]} className="card-img-top rounded-3" alt={course.featured_title} />
                                    <div className="card-body">
                                        <h5 className="mb-0 dark-text text-center">{course.title}</h5>
                                        <p className="card-text mt-2">{course.featured_title}</p>
                                        <div className={`${styles.price} mt-2`}>
                                            <strong>&#8377;999</strong>&nbsp;
                                            <span className='text-decoration-line-through ms-2 text-secondary'>&#8377;2999</span>
                                        </div>
                                        <button
                                            onClick={handleEnroll}
                                            className='mt-2 mb-0'
                                        >Enroll Now</button>
                                    </div>
                                </div>
                            ))}

                        </div>}
                </div>

            </div>
        </section>
    )
}

export default Courses
