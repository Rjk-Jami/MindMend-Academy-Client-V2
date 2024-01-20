import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const searchInputRef = useRef(null);
    const [searchResults, setSearchResults] = useState([]);
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
    const handleSearch = async () => {
        const searchLetter = searchInputRef.current.value;
        if (searchLetter) {
            try {
                const response = await axios.get(`https://mindmeld-academy-server.vercel.app/getCollegesByAlphabet/${searchLetter}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error(error);

            }
        }
    };
    console.log(searchResults)
    return (
        <>
            <div className="">
            Anywhere, anytime. Start learning today! And Get an Exceptional Education Experience.
            </div>
            <div className="flex justify-center">
                <div className="join border-0">
                    <div className="relative ">
                        <input type="text" ref={searchInputRef} className="input input-bordered border-black focus:outline-none placeholder:italic  md:w-80 max-w-xs join-item" placeholder="Search colleges" />
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
            searchResults && <>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-400 bg-opacity-25 my-6">
                    {/* {
                                        searchResults.map((college, i) => <CollegeCardDesign college={college} key={i} ></CollegeCardDesign>)

                    } */}
                </div>
            
            </>
        }
        </>
    );
};

export default Search;