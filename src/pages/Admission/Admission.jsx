
import React, { useContext } from 'react';
import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
// import Colleges from '../Colleges/Colleges';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseCollages from '../../Hooks/UseColleges';
import { AuthContext } from '../../providers/AuthProvider';
// import { AuthContext } from '../../components/hooks/AuthProvider';
const Admission = () => {
    const [colleges,isLoading] = UseCollages()
    const {user} = useContext(AuthContext)
    const { control, handleSubmit, reset, watch, register, formState: { errors } } = useForm({
        defaultValues: {
            select: null,
        },
    })
    const selectedOption = watch('select');
    const selectCollege = (data) => {

            axios.post('https://mindmeld-academy-server.vercel.app/admission',{name: data.name, subject:data.Subject, email:data.email, image:data.image, gender:data.gender,
            address:data.address, number:data.number,dateOfBirth:data.dateOfBirth, college:data.select.value })
            .then(res=>{
                console.log(res.data)
                if(res.data.insertedId){
                    reset()
                    Swal.fire("Send Admission Request Successfully!");
                }
            })
        }









return (<>
<div>
        <div>
            <h1 className="text-white font-bold text-center my-4 text-xl md:text-2xl lg:text-3xl">Alumni Success: Capturing Milestones Through Graduation Group Portraits</h1>
        </div>
        <div className="card shrink-0 md:w-3/5 mx-auto shadow-2xl bg-slate-800">
            <form className="card-body" onSubmit={handleSubmit(selectCollege)}>
                <label className="label">
                    <span className="label-text font-semibold">Select a College Name</span>
                </label>
                <Controller
                    name="select"
                    control={control}
                    render={({ field }) => (
                        <Select className='text-black'
                            {...field}
                            options={[
                                { value: "Liberty University", label: "Liberty University" },
                                { value: "Northern Lights College", label: "Northern Lights College" },
                                { value: "University of ABC", label: "University of ABC" },
                                { value: "XYZ State College", label: "XYZ State College" },
                                { value: "University of Excellence", label: "University of Excellence" },
                                { value: "University of Canada", label: "University of Canada" },
                                { value: "XYZ College", label: "XYZ College" },
                                { value: "Community College One", label: "Community College One" },
                                { value: "Tech Legend Institute", label: "Tech Legend Institute" },
                                { value: "Arts College", label: "Arts College" },
                            ]}
                        />
                    )}
                />

                {
                    selectedOption && <><div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        {/* first name */}
                        <div className="">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input value={user?.displayName} placeholder="Name" className="input input-bordered" type='name' {...register("name", { required: true })} />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>


                        </div>
                        {/* Subject */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input placeholder="Subject" className="input input-bordered" type='Subject' {...register("Subject", { required: true })} />
                            {errors.Subject && <span className='text-red-600'>This field is required</span>}
                        </div>

                        {/* Candidate Email */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input placeholder="Email" value={user?.email} className="input input-bordered" type='email' {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-600'>This field is required</span>}
                        </div>
                        {/* Candidate Phone
number */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input placeholder="Number" className="input input-bordered" type='text' {...register("number", { required: true })} />
                            {errors.number && <span className='text-red-600'>This field is required</span>}
                        </div>
                        {/* address */}
                        <div className="">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input placeholder="Address" className="input input-bordered" type='name' {...register("address", { required: true })} />
                                {errors.address && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        {/* dateOfBirth */}
                        <div className="">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input placeholder="Date of Birth" className="input input-bordered" type='date' {...register("dateOfBirth", { required: true })} />
                                {errors.dateOfBirth && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        {/* image */}
                        <div className="">
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input placeholder="Photo URL" value={user?.photoURL} className="input input-bordered" type='name' {...register("image", { required: true })} />
                                {errors.name && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        {/* gender */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <select className="select select-bordered" {...register("gender", { required: true })}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.gender && <span className="text-red-600">This field is required</span>}
                        </div>

                    </div>

                        <input className='btn btn-primary' type="submit" />
                    </>
                }

            </form>

        </div>
    </div>
</>);
};

export default Admission;