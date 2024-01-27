import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegesDetails = ({ }) => {
    const college = useLoaderData()

    console.log(college)
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={college.image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{college.name}</h1>
                        <p className='text-base  md:text-lg lg:text-xl   '><span className='font-bold'>Admission Dates</span> : <span>{college.admissionDates[0]}</span> to <span>{college.admissionDates[1]}</span></p>
                        <div className=" text-justify m-3  text-yellow-50 text-lg">
                            <p><span className='font-bold'>Events:</span> <span>{college.events.join(', ')}</span></p>
                            <p><span className='font-bold'>Research History:</span> <span>{college.researchHistory.join(', ')}</span></p>
                            <p><span className='font-bold'>Sports:</span> <span>{college.sports.join(', ')}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero  bg-gray-900">
                <div className="hero-content text-center ">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold text-primary">Admission Process</h1>
                        <p className="py-2 text-justify">Our college admission process is designed to be straightforward and inclusive. Begin by completing our online application, providing essential personal and academic details. Submit supporting documents, including transcripts and recommendation letters. Our admissions team carefully reviews each application to assess academic achievements, extracurricular activities, and personal statements. Shortlisted candidates may be invited for interviews or additional assessments. We prioritize a holistic approach, valuing diversity and a passion for learning. Successful applicants receive acceptance notifications, followed by guidance on enrollment procedures. Our transparent and merit-based admission process ensures a vibrant and talented student community, fostering a dynamic educational environment.</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default CollegesDetails;