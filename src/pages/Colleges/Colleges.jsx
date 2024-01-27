import React from 'react';
import { Fade } from "react-awesome-reveal";
import loader from "../../assets/loader.svg"
import CollegeCardDesign from '../../Hooks/CollegeCardDesign';
import UseCollages from '../../Hooks/UseColleges';


const Colleges = () => {
    const [colleges, isLoading] = UseCollages()
    return (
        <div>
            <div className=" ">
                <h1 className='underline underline-offset-4  font-bold text-center my-4 text-xl md:text-2xl lg:text-3xl'>All Colleges</h1>
            </div>

            <div className="flex gap-7">
                <div className="hidden md:block w-2/12">
                    <p className=''>search</p>
                </div>
                {isLoading ? <div className="flex items-center justify-center h-screen">
                    <img src={loader} alt="" />
                </div> : <div className="w-full">
                    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8'>
                        {
                            colleges.map((college, i) => <CollegeCardDesign college={college} key={i} ></CollegeCardDesign>
                            )
                        }
                        <div className="">

                        </div>

                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Colleges;