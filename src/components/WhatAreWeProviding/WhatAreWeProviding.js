import React from 'react'
import bookStack from '../../assets/book-stack.png'
import styles from './WhatAreWeProviding.module.css'

const WhatAreWeProviding = () => {
    const content = [
        {
            title: "Syllabus-Covered Recorded Sessions",
            text: "Never miss a lesson with in-depth, easy-to-understand recorded sessions tailored to the CUET PG syllabus.",
            img: "https://img.freepik.com/free-vector/group-meeting-corporate-collaboration-colleagues-office-strategy-planning-conference-discussion-table-brainstorming-startup-organization-vector-isolated-concept-metaphor-illustration_335657-1992.jpg?t=st=1738918383~exp=1738921983~hmac=89db0c97d7a50e8239f8554b6995f388146e30b5479b8e0ab15f818ca4569d2c&w=740"
        },
        {
            title: "Recordings of Live Sessions",
            text: "Access live sessions anytime, anywhere, for a deeper understanding of key topics.",
            img: "https://img.freepik.com/free-vector/press-play-concept-illustration_114360-1364.jpg?t=st=1738838859~exp=1738842459~hmac=4226da30ce9d99699bcf1e16d8b64c55e747fb09a00e7f2d699186d048e04473&w=740"
        },
        {
            title: "Study Materials",
            text: "All the essential materials you need for each subject, designed for efficient learning and exam preparation.",
            img: bookStack
        },
        {
            title: "Mock Tests",
            text: "Prepare yourself with mock tests that simulate the actual exam environment.",
            img: 'https://img.freepik.com/free-vector/copywriting-social-media-post-content-marketing-internet-commercial-cartoon-character-writing-text-advertising-promotional-strategy-concept-illustration_335657-2066.jpg?t=st=1739171594~exp=1739175194~hmac=41f0fb67633f370df02d6ae5eabc165fce3e2d1e2e2b1df4b93669a2fe2e8a71&w=826'
        },
        {
            title: "Categorized Practice Tests",
            text: "Our Categorized Practice Tests are designed to help you focus on specific topics within your CUET PG syllabus.",
            img: 'https://img.freepik.com/free-vector/checklist-concept-illustration_114360-339.jpg?t=st=1738839561~exp=1738843161~hmac=09e2a74c324dc11b818d61ab6a38de3ca0dbab6085399097c7e6a73756a7503f&w=740'
        },
    ]

    return (
        <section>
            <div className='container'>
                <h2 className='section-title text-black'>What We Are Providing <span>?</span></h2>
                <h4 className='section-subtitle'>Comprehensive Learning Materials and Tools</h4>
                <hr className='border-3' style={{ width: "25%" }} />
                <div className="container">

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                        {content.map((item, index) => (
                            <div key={index} className="col">
                                <div className={`${styles.card} card border-0 h-100 mx-auto`} style={{ maxWidth: '300px' }}>
                                    <img src={item.img} className="card-img-top d-block mx-auto" alt="image" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold dark-text my-0">{item.title}</h5>
                                        <p className="card-text mt-1"
                                        >{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default WhatAreWeProviding
