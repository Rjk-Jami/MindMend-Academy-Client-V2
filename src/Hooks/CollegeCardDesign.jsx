import { MdSports } from "react-icons/md";
import { PiFileTextFill } from "react-icons/pi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const CollegeCardDesign = ({college}) => {

    return (
        <div className="card card-compact w-72 bg-slate-900 shadow-xl">
                        <figure className="mt-11"><img className='h-40 w-48 rounded-2xl' src={college.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className=" text-center text-2xl font-semibold m-0 p-0 text-white">{college.name}</h2>
                            <div className=" text-center  ">
                                <p className='text-lg font-medium'>Admission Dates</p>
                                <p className='font-bold font-serif text-sm'>{college.admissionDates[0]} to {college.admissionDates[1]}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <p></p>
                                <Link to={`/colleges/${college._id}`}><button className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md  px-6 py-2 text-white hover:text-success  transition">
                                    Details
                                    
                                </button></Link>
                            </div>
                            <div className="">
                                {/* <hr  className=''/>
                                 */}
                                <hr style={{ backgroundColor: 'rgb(98,239,189)', height: '2px' }} />
                                <div className=" flex justify-around items-center my-4 font-mono text-lg">
                                    <div className=" flex items-center gap-1">
                                        <BsFillCalendarEventFill className='text-success '></BsFillCalendarEventFill> <span>/</span> <span className='font-bold'>{college.events.length}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <PiFileTextFill className='text-success'></PiFileTextFill> <span>/</span> <span className='font-bold'>{college.researchHistory.length}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdSports className='text-success' ></MdSports> <span>/</span> <span className='font-bold'>{college.sports.length}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
    );
};

export default CollegeCardDesign;