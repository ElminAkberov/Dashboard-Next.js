"use client"
import React from 'react'
import Stocks1 from "../(stocks)/Stocks1"
import Link from 'next/link'
const page = () => {
    return (
        <div>
            <div className="bg-white p-5 mb-10">
                <div className="flex justify-between bg-white ">
                    <h3 className='text-2xl font-medium'>Total Investment</h3>
                    <select className='bg-transparent border p-1'>
                        <option value="">Last 7 days</option>
                        <option value="">Last 15 days</option>
                    </select>
                </div>
                <div className="flex items-center gap-x-3 mt-5 ">
                    <div><p class="mb-1.5 text-sm font-medium text-[#64748b]">Invested Value</p><div class="flex items-center gap-2.5"><p class="font-medium text-black">$1,279.95</p><p class="flex items-center gap-1 font-medium text-[#10b981]">1,22%<svg class="fill-current" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z" fill=""></path></svg></p></div></div>
                    <div><p class="mb-1.5 text-sm font-medium text-[#64748b]">Total Returns</p><div class="flex items-center gap-2.5"><p class="font-medium text-black">$22,543.87</p><p class="flex items-center gap-1 font-medium text-[#10b981]">10.14%<svg class="fill-current" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z" fill=""></path></svg></p></div></div>
                </div>
                <Stocks1 />
            </div>
            <div className="bg-white ">
                <div className="py-[20px] px-[24px] text-[26px] font-medium">
                    External Links
                    <p className="text-[#64748b] text-sm font-medium">Most used resources</p>
                </div>
                <div className="px-3 pb-5">
                    <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
                        <div className="flex gap-x-3 items-center">
                            <img src="/assets/img/brand7.svg" alt="brand12324" />
                            <div className='font-medium'>
                                Apple Inc
                                <p className='text-xs text-[#64748b]'>16 Shares</p>
                            </div>
                        </div>
                        <div className="">
                            $410.5
                            <p class="flex items-center text-[#10b981] justify-end gap-1 text-xs font-medium text-meta-3">0.95%<svg class="fill-current" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z" fill=""></path></svg></p>
                        </div>
                    </Link>
                    <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
                        <div className="flex gap-x-3 items-center">
                            <img src="/assets/img/brand8.svg" alt="brand12324" />
                            <div className='font-medium'>
                                Google
                                <p className='text-xs text-[#64748b]'>100 Shares</p>
                            </div>
                        </div>
                        <div className="">
                            $410.5
                            <p class="flex items-center text-[#10b981] justify-end gap-1 text-xs font-medium text-meta-3">0.95%<svg class="fill-current" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z" fill=""></path></svg></p>
                        </div>
                    </Link>
                    <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
                        <div className="flex gap-x-3 items-center">
                            <img src="/assets/img/brand9.svg" alt="brand12324" />
                            <div className='font-medium'>
                                Tesla
                                <p className='text-xs text-[#64748b]'>20 Shares</p>
                            </div>
                        </div>
                        <div className="">
                            $410.5
                            <p class="flex items-center text-[#10b981] justify-end gap-1 text-xs font-medium text-meta-3">0.95%<svg class="fill-current" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z" fill=""></path></svg></p>
                        </div>
                    </Link>
                    <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
                        <div className="flex gap-x-3 items-center">
                            <img src="/assets/img/brand10.svg" alt="brand12324" />
                            <div className='font-medium'>
                                Twitter X
                                <p className='text-xs text-[#64748b]'>87 Shares</p>
                            </div>
                        </div>
                        <div className="">
                            $410.5
                            <p class="flex items-center justify-end gap-1 text-xs font-medium text-red-600">-0.95%<svg class="fill-current" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.48804 6.099L0.484999 0.0989983L8.49108 0.098999L4.48804 6.099Z" fill=""></path></svg></p>
                        </div>
                    </Link>
                    <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
                        <div className="flex gap-x-3 items-center">
                            <img src="/assets/img/brand11.svg" alt="brand12324" />
                            <div className='font-medium'>
                                Microsoft
                                <p className='text-xs text-[#64748b]'>37  Shares</p>
                            </div>
                        </div>
                        <div className="">
                            $410.5
                            <p class="flex items-center text-[#10b981] justify-end gap-1 text-xs font-medium text-meta-3">0.95%<svg class="fill-current" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.48804 0.0989982L8.49108 6.099L0.484996 6.099L4.48804 0.0989982Z" fill=""></path></svg></p>
                        </div>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default page