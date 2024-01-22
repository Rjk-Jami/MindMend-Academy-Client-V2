import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import CollegeCardDesign from '../../Hooks/CollegeCardDesign';

const Search = () => {
    const searchInputRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false)

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
    const deleteNoFound =()=>{
        setIsActive(false);

    }
    const handleSearch = async () => {
        const searchLetter = searchInputRef.current.value;
        if (searchLetter) {
            setLoading(true)

            try {
                const response = await axios.get(`http://localhost:5000/getCollegesByAlphabet/${searchLetter}`);

                setSearchResults(response.data);

            } catch (error) {
                console.error(error);

            }
            setLoading(false)


        }
        setIsActive(true);

    };
    console.log(searchResults)
    return (
        <div className=' '>


            <div className="mx-3">
                <div className="join border-0 w-full">
                    <div className=" flex relative w-full">
                        <input type="text" ref={searchInputRef} className="w-full input  input-bordered border-black focus:outline-none  join-item bg-transparent " placeholder="Search colleges" />
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
                loading ? <div className="flex justify-center">
                    <span className="loading loading-bars loading-sm"></span>
                </div>
                    : <>
                        {(searchResults && searchResults.length !== 0) &&

                            <>
                                <div role="alert" className="alert alert-success">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Search Result For:{searchInputRef.current.value}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-slate-400 bg-opacity-25 my-6">
                                    {
                                        searchResults.map((college, i) => <CollegeCardDesign college={college} key={i} ></CollegeCardDesign>)

                                    }
                                </div>
                            </>}
                        
                    </>
            }
            {
                           ( searchResults.length === 0 || searchResults===null) && <div className={`my-element ${isActive ? '' : 'hidden'}, mt-4 w-1/3`}>
                                <div role="alert" className="alert alert-error">
                                    <button onClick={deleteNoFound} className={` ${isActive ? '' : 'hidden'}btn btn-circle btn-xs flex justify-center items-center btn-ghost`}><svg xmlns="http://www.w3.org/2000/svg" className=" stroke-current shrink-0 h-6 w-" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                                    <span>No result found!</span>
                                </div>
                            </div>
                        }
        </div>
    );
};

export default Search;
