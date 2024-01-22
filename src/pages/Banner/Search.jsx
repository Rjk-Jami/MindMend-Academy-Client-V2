import axios from 'axios';
import React, { useEffect, useRef, useState, } from 'react';
import { FaSearch } from "react-icons/fa";
import CollegeCardDesign from '../../Hooks/CollegeCardDesign';
//swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { useSearchContext } from '../../providers/SearchProvider';

const Search = () => {
    const searchInputRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false)
    const [noResultsFound, setNoResultsFound] = useState(false);
    // const {searchResults,
    //     setSearchResults,
    //     loading,
    //     setLoading,
    //     noResultsFound,
    //     setNoResultsFound}= useSearchContext()
    useEffect(() => {
        const handleKeyPress = (event) => {
            // Check if Ctrl (or Command on Mac) + K is pressed
            if ((event.ctrlKey || event.metaKey) && (event.key === 'k' || event.key === 'K')) {
                // Prevent the default behavior of the key combination
                event.preventDefault();

                // Focus on the search input
                searchInputRef.current.focus();
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    const deleteNoFound = () => {
        setNoResultsFound(false);
    }

    const handleSearch = async () => {

        const searchLetter = searchInputRef.current.value;
        if (searchLetter) {
            setNoResultsFound(true)
            setLoading(true)

            try {
                const response = await axios.get(`http://localhost:5000/getCollegesByAlphabet/${searchLetter}`);

                setSearchResults(response.data);

            } catch (error) {
                console.error(error);

            }



        }

        setLoading(false)
        setNoResultsFound(searchResults.length === 0);

    };
    const searchDone = () => {
        setSearchResults([])
        setNoResultsFound(false);
    }

    console.log(searchResults)
    return (
        <div className=' '>


            <div className="mx-3">
                <div className="join border-0 w-2/4">
                    <div className=" flex relative w-full">
                        <input type="text" ref={searchInputRef} className="w-full input  input-bordered border-black focus:outline-none  join-item bg-transparent " placeholder="Search University" />
                        <div className=" hidden  absolute lg:flex items-center gap-1 inset-y-0 right-0  text-xs opacity-40 mx-2">
                            <kbd className="kbd">ctrl</kbd>
                            <p>+</p>
                            <kbd className="kbd">k</kbd>
                        </div>
                    </div>
                    <button onClick={handleSearch} className="btn join-item btn-outline  rounded-r-full"><FaSearch />
                    </button>

                </div>

            </div>
            {
                loading ? ""
                    : <>{(searchResults < 1 && noResultsFound) &&
                        <div className='flex  me-3' >
                            <div role="alert" className="alert bg-rose-400  bg-opacity-60 flex  ">

                                <button onClick={deleteNoFound} className="btn btn-circle btn-xs flex justify-center items-center btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className=" stroke-current shrink-0 h-6 w-" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                                <span>No result found!</span>
                            </div>
                        </div>
                    }</>
            }


            {
                loading ? <div className="flex justify-center">
                    <span className="loading loading-bars loading-sm"></span>
                </div>
                    : <>
                        {(searchResults && searchResults.length !== 0) &&

                            <>
                                <div role="alert" className="alert bg-green-400 bg-opacity-60 flex">
                                    <button onClick={searchDone} className="btn btn-circle btn-xs flex justify-center items-center btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                                    <span>Search Result For:{searchInputRef.current.value}</span>
                                </div>
                                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- bg-slate-400 bg-opacity-25 my-6">
                                    {
                                        searchResults.map((college, i) => <CollegeCardDesign college={college} key={i} ></CollegeCardDesign>)

                                    }
                                </div> */}
                                <div className="w-2/3 mx-auto">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={0}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                        breakpoints={{
                                            
                                            // when window width is <= 768px
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                            },
                                            // more breakpoints as needed
                                        }}
                                    >
                                        {
                                            searchResults.map((college, i) => <SwiperSlide className='mx-auto' key={i = i + 1}> <CollegeCardDesign college={college} key={i} ></CollegeCardDesign></SwiperSlide>)
                                        }

                                    </Swiper>
                                </div>

                            </>}

                    </>

            }

        </div>
    );
};

export default Search;
