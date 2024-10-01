"use client"
import React from 'react'
import Crm1 from "../(crm)/Crm1"
import Crm2 from "../(crm)/Crm2"

const page = () => {
    return (
        <div>
            <h3 className='text-2xl font-medium mb-5'>This Week’s Overview</h3>
            <div className="grid grid-cols-3 max-[1300px]:grid-cols-2 max-md:grid-cols-1 gap-7">
                <div className="p-[30px] bg-white">
                    <h3 className='font-medium text-3xl'>197</h3>
                    <div className="flex justify-between">
                        <div className="">
                            <p className='text-[#64748b] py-2'>Clients Added</p>
                            <div className='text-sm text-[#64748b] font-medium gap-x-1 flex items-center '>
                                <div className="flex text-xs rounded-md items-center px-2 py-1  bg-[#10B981]">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z" fill="#fff"></path></svg><span className="text-white">+2.5%</span>
                                </div>
                                Since last week
                            </div>
                        </div>
                        <svg width="80" height="80" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#ddd" strokeWidth="5" />
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#3C50E0" strokeWidth="5" strokeDasharray="65, 100" transform="rotate(-90 20 20)" />
                        </svg>
                    </div>
                </div>
                <div className="p-[30px] bg-white">
                    <h3 className='font-medium text-3xl'>745</h3>
                    <div className="flex justify-between">
                        <div className="">
                            <p className='text-[#64748b] py-2'>Contracts Signed</p>
                            <div className='text-sm text-[#64748b] font-medium gap-x-1 flex items-center '>
                                <div className="flex text-xs rounded-md items-center px-2 py-1  bg-[#10B981]">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z" fill="#fff"></path></svg><span className="text-white">+3.5%</span>
                                </div>
                                Since last week
                            </div>
                        </div>
                        <svg width="80" height="80" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#ddd" strokeWidth="5" />
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#3C50E0" strokeWidth="5" strokeDasharray="35, 100" transform="rotate(-90 20 20)" />
                        </svg>
                    </div>
                </div>
                <div className="p-[30px] bg-white">
                    <h3 className='font-medium text-3xl'>512</h3>
                    <div className="flex justify-between">
                        <div className="">
                            <p className='text-[#64748b] py-2'>Invoice Sent</p>
                            <div className='text-sm text-[#64748b] font-medium gap-x-1 flex items-center '>
                                <div className="flex text-xs rounded-md items-center px-2 py-1  bg-[#10B981]">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z" fill="#fff"></path></svg><span className="text-white">+0.5%</span>
                                </div>
                                Since last week
                            </div>
                        </div>
                        <svg width="80" height="80" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#ddd" strokeWidth="5" />
                            <circle cx="20" cy="20" r="16" fill="none" stroke="#3C50E0" strokeWidth="5" strokeDasharray="75, 100" transform="rotate(-90 20 20)" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="min-[1300px]:flex gap-x-7 my-10">
                <div className="bg-white p-[20px] max-[1300px]:w-full  w-[55%]">
                    <h3 className='text-2xl font-medium'>Payments Overview</h3>
                    <Crm1 />
                    <div className="flex justify-evenly">
                        <div className="text-center py-2">
                            Received Amount
                            <h3 className='text-xl font-medium text-center'>$45,070.00</h3>
                        </div>
                        <div className="border"></div>
                        <div className="text-center py-2">
                            Due Amount
                            <h3 className='text-xl font-medium text-center'>$32,400.00</h3>
                        </div>
                    </div>
                </div>
                <div className="w-[45%] max-[1300px]:w-full bg-white">
                    <Crm2 />
                </div>
            </div>
            <div className="bg-white p-5 text-[#64748b]">
                <h3 className='text-2xl font-medium mb-5'>Leads Report</h3>
                <div className="grid grid-cols-12 border-b mb-10">
                    <div className="col-span-3">Name</div>
                    <div className="col-span-3 max-md:col-span-5 max-[400px]:col-span-6">Email</div>
                    <div className="col-span-3 max-md:hidden">Project</div>
                    <div className="col-span-1 max-[1200px]:hidden">Duration</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-3 ">Status</div>
                    <div className="col-span-1 max-[400px]:hidden">Actions</div>
                </div>
                <div className="grid grid-cols-12 mb-8 items-center">
                    <div className="col-span-3 flex items-center gap-x-2 text-[#64748b] font-medium"><img src="/assets/img/user1.webp" width={44} height={44} alt="country1" /><span className='max-[1200px]:hidden'>Charlie Donin</span> </div>
                    <div className="col-span-3 max-[400px]:col-span-4 relative">wdavis@aol.com</div>
                    <div className="col-span-3 max-md:hidden">25 Dec 2024 - 28 Dec 2024</div>
                    <div className="max-[1200px]:hidden col-span-1">
                        3 Days</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-5 text-[#FB545E] text-sm  max-md:flex justify-center"><p className='bg-[#FFF2F2] p-2 py-1  rounded-md w-max'>Lost Lead</p></div>
                    <div className="col-span-1 ml-4 max-[400px]:hidden"><svg className="hover:fill-red-500 duration-300 cursor-pointer fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" fill=""></path><path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" fill=""></path><path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z" fill=""></path><path d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z" fill=""></path></svg></div>
                </div>
                <div className="grid grid-cols-12 mb-8 items-center">
                    <div className="col-span-3 flex items-center gap-x-2 text-[#64748b] font-medium"><img src="/assets/img/user2.webp" width={44} height={44} alt="country1" /><span className='max-[1200px]:hidden'>Makenna Carder</span> </div>
                    <div className="col-span-3 max-[400px]:col-span-4 relative">
                        ltorres@aol.com</div>
                    <div className="col-span-3 max-md:hidden">25 Dec 2024 - 28 Dec 2024</div>
                    <div className="max-[1200px]:hidden col-span-1">
                        3 Days</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-5 max-md:flex justify-center text-[#49BD88] text-sm  "><p className='bg-[#ECFAF5] p-2 py-1 rounded-md w-max'>Active</p></div>
                    <div className="col-span-1  ml-4 max-[400px]:hidden"><svg className="hover:fill-red-500 duration-300 cursor-pointer fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" fill=""></path><path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" fill=""></path><path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z" fill=""></path><path d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z" fill=""></path></svg></div>
                </div>
                <div className="grid grid-cols-12 mb-8 items-center">
                    <div className="col-span-3 flex items-center gap-x-2 text-[#64748b] font-medium"><img src="/assets/img/user3.webp" width={44} height={44} alt="country1" /><span className='max-[1200px]:hidden'>Talan Dokidis</span> </div>
                    <div className="col-span-3 max-[400px]:col-span-4 relative">
                        rtaylor@aol.com</div>
                    <div className="col-span-3 max-md:hidden">25 Dec 2024 - 28 Dec 2024</div>
                    <div className="max-[1200px]:hidden col-span-1">
                        3 Days</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-5 max-md:flex justify-center text-[#49BD88] text-sm  "><p className='bg-[#ECFAF5] p-2 py-1 rounded-md w-max'>Active</p></div>
                    <div className="col-span-1 ml-4 max-[400px]:hidden"><svg className="hover:fill-red-500 duration-300 cursor-pointer fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" fill=""></path><path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" fill=""></path><path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z" fill=""></path><path d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z" fill=""></path></svg></div>
                </div>
                <div className="grid grid-cols-12 mb-8 items-center">
                    <div className="col-span-3 flex items-center gap-x-2 text-[#64748b] font-medium"><img src="/assets/img/user4.webp" width={44} height={44} alt="country1" /><span className='max-[1200px]:hidden'>Cheyenne Levin</span> </div>
                    <div className="col-span-3 max-[400px]:col-span-4 relative">ebrown@aol.com</div>
                    <div className="col-span-3 max-md:hidden">25 Dec 2024 - 28 Dec 2024</div>
                    <div className="max-[1200px]:hidden col-span-1">
                        3 Days</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-5 max-md:flex justify-center text-[#49BD88] text-sm  "><p className='bg-[#ECFAF5] p-2 py-1 rounded-md w-max'>Active</p></div>
                    <div className="col-span-1  ml-4 max-[400px]:hidden"><svg className="hover:fill-red-500 duration-300 cursor-pointer fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" fill=""></path><path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" fill=""></path><path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z" fill=""></path><path d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z" fill=""></path></svg></div>
                </div>
                <div className="grid grid-cols-12 mb-8 items-center">
                    <div className="col-span-3 flex items-center gap-x-2 text-[#64748b] font-medium"><img src="/assets/img/user5.webp" width={44} height={44} alt="country1" /><span className='max-[1200px]:hidden'>James Aminoff</span> </div>
                    <div className="col-span-3 max-[400px]:col-span-4 relative">slee@aol.com</div>
                    <div className="col-span-3 max-md:hidden">25 Dec 2024 - 28 Dec 2024</div>
                    <div className="max-[1200px]:hidden col-span-1">
                        3 Days</div>
                    <div className="col-span-1 max-[1200px]:col-span-2 max-md:col-span-5 max-md:flex justify-center text-[#FB545E] text-sm  "><p className='bg-[#FFF2F2] p-2 py-1 rounded-md w-max'>Lost Lead</p></div>
                    <div className="col-span-1 ml-4 max-[400px]:hidden"><svg className="hover:fill-red-500 duration-300 cursor-pointer fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" fill=""></path><path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" fill=""></path><path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5469L12.7187 15.5719C12.6843 15.9844 12.9937 16.3625 13.4405 16.3969C13.4749 16.3969 13.4749 16.3969 13.5093 16.3969C13.9218 16.3969 14.2655 16.0875 14.2655 15.675L14.4718 12.65C14.4718 12.2031 14.1624 11.8594 13.7499 11.825Z" fill=""></path><path d="M8.21558 11.825C7.80308 11.8594 7.45933 12.2375 7.49371 12.65L7.73433 15.675C7.76871 16.0875 8.11246 16.3969 8.49058 16.3969C8.52496 16.3969 8.52496 16.3969 8.55933 16.3969C8.97183 16.3625 9.31558 15.9844 9.28121 15.5719L9.04058 12.5469C9.04058 12.1 8.66246 11.7906 8.21558 11.825Z" fill=""></path></svg></div>
                </div>

            </div>
        </div>
    )
}

export default page