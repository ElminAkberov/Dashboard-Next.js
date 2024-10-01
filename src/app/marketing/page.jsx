"use client"
import React from 'react'
import Marketing1 from "../(marketing)/Marketing1"
import Marketing2 from "../(marketing)/Marketing2"
import Link from 'next/link'

const page = () => {
  return (
    <>
      <h3 className='font-medium text-2xl'>Highlights</h3>
      <p className='text-[#64748b] mb-5'>Latest social statistics</p>
      <div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 2xl:gap-7.5">
          <div class="rounded-sm border border-stroke bg-white p-4 shadow-default md:p-6 xl:p-7.5"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.8752 24.65H31.5564V9.19062C31.5564 7.96875 30.5471 6.90625 29.2721 6.90625H26.4033C25.1814 6.90625 24.1189 7.91562 24.1189 9.19062V24.65H20.7189V12.1656C20.7189 10.9437 19.7096 9.88125 18.4346 9.88125H15.5658C14.3439 9.88125 13.2814 10.8906 13.2814 12.1656V24.65H9.82832V15.6187C9.82832 14.3969 8.81895 13.3344 7.54395 13.3344H4.6752C3.45332 13.3344 2.39082 14.3437 2.39082 15.6187V24.65H2.1252C1.4877 24.65 0.90332 25.1813 0.90332 25.8719C0.90332 26.5625 1.43457 27.0938 2.1252 27.0938H31.8752C32.5127 27.0938 33.0971 26.5625 33.0971 25.8719C33.0971 25.1813 32.5127 24.65 31.8752 24.65ZM4.83457 24.65V15.7781H7.4377V24.65H4.83457ZM15.6721 24.65V12.325H18.2752V24.65H15.6721ZM26.5627 24.65V9.35H29.1658V24.65H26.5627V24.65Z" fill="#3C50E0"></path></svg><h4 class="mb-2 mt-5 text-[#63748b] font-medium">Avg. Client Rating</h4><h3 class="mb-2 text-[24px] font-bold text-black ">7.8/10</h3><p class="flex items-center gap-1 text-sm font-medium"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z" fill="#10B981"></path></svg><span class="text-[#10B981]">+2.5%</span><span>than last Week</span></p>
          </div>

          <div class="rounded-sm border border-stroke bg-white p-4 shadow-default  md:p-6 xl:p-7.5"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1027 15.5125C14.3965 15.5125 17.1059 12.9093 17.1059 9.6687C17.1059 6.42808 14.3965 3.82495 11.1027 3.82495C7.80898 3.82495 5.09961 6.42808 5.09961 9.6687C5.09961 12.9093 7.80898 15.5125 11.1027 15.5125ZM11.1027 6.2687C13.0684 6.2687 14.7152 7.80933 14.7152 9.72183C14.7152 11.6343 13.1215 13.175 11.1027 13.175C9.08398 13.175 7.49023 11.6343 7.49023 9.72183C7.49023 7.80933 9.13711 6.2687 11.1027 6.2687Z" fill="#10B981"></path><path d="M24.4373 18.0625C27.3061 18.0625 29.5904 15.8313 29.5904 13.0156C29.5904 10.2 27.2529 7.96875 24.4373 7.96875C21.6217 7.96875 19.2842 10.2 19.2842 13.0156C19.2842 15.8313 21.6217 18.0625 24.4373 18.0625ZM24.4373 10.4125C25.9779 10.4125 27.1998 11.5813 27.1998 13.0688C27.1998 14.5563 25.9779 15.725 24.4373 15.725C22.8967 15.725 21.6748 14.5563 21.6748 13.0688C21.6748 11.5813 22.8967 10.4125 24.4373 10.4125Z" fill="#10B981"></path><path d="M24.7029 18.5937H24.2248C22.6311 18.5937 21.0904 19.0718 19.7623 19.8687C18.3279 17.9562 16.0436 16.6812 13.4936 16.6812H8.76543C4.40918 16.7343 0.956055 20.1874 0.956055 24.4905V28.3155C0.956055 29.3249 1.75293 30.1218 2.7623 30.1218H31.2904C32.2998 30.1218 33.1498 29.2718 33.1498 28.2624V26.9874C33.0967 22.3655 29.3248 18.5937 24.7029 18.5937ZM3.34668 27.7312V24.4905C3.34668 21.5155 5.79043 19.0718 8.76543 19.0718H13.4936C16.4686 19.0718 18.9123 21.5155 18.9123 24.4905V27.7312H3.34668V27.7312ZM30.7061 27.7312H21.2498V24.4905C21.2498 23.6405 21.0904 22.7905 20.8248 21.9937C21.7811 21.303 22.9498 20.9843 24.1717 20.9843H24.6498C27.9436 20.9843 30.6529 23.6937 30.6529 26.9874V27.7312H30.7061Z" fill="#10B981"></path></svg><h4 class="mb-2 mt-5 text-[#63748b] font-medium">Instagram Followers</h4><h3 class="mb-2 text-[24px] font-bold text-black ">7.8/10</h3><p class="flex items-center gap-1 text-sm font-medium"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0157 4.74683C12.7532 4.74683 12.5344 4.96558 12.5344 5.22808V7.6562L9.4063 5.57808C8.94693 5.27183 8.37818 5.27183 7.9188 5.57808L5.0313 7.50308C4.92193 7.59058 4.7688 7.59058 4.63755 7.50308L1.24693 5.24995C1.02818 5.09683 0.721929 5.16245 0.568804 5.3812C0.415679 5.59995 0.481304 5.9062 0.700054 6.05933L4.09068 8.31245C4.55005 8.6187 5.1188 8.6187 5.57818 8.31245L8.46568 6.38745C8.57505 6.29995 8.72818 6.29995 8.85943 6.38745L11.6594 8.2687H9.49381C9.23131 8.2687 9.01255 8.48745 9.01255 8.74995C9.01255 9.01245 9.23131 9.2312 9.49381 9.2312H13.0157C13.2782 9.2312 13.4969 9.01245 13.4969 8.74995V5.22808C13.5188 4.96558 13.2782 4.74683 13.0157 4.74683Z" fill="#FB5454"></path></svg><span class="text-[#FB5454]">-1.5%</span><span>than last Week</span></p></div>
          <div class="rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-7.5"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.925 11.9C21.7813 11.9 18.7532 10.0938 18.7532 7.65002C18.7532 5.20627 21.7813 3.40002 25.925 3.40002C30.0688 3.40002 33.0969 5.20627 33.0969 7.65002C33.0969 10.0938 30.0688 11.9 25.925 11.9ZM25.925 5.79065C22.95 5.79065 21.1438 6.90627 21.1438 7.65002C21.1438 8.39377 22.95 9.5094 25.925 9.5094C28.9 9.5094 30.7063 8.39377 30.7063 7.65002C30.7063 6.90627 28.8469 5.79065 25.925 5.79065Z" fill="#F0950C"></path><path d="M25.9251 16.575C22.5782 16.575 19.922 15.4062 19.072 13.6C18.8063 13.0156 19.072 12.2719 19.6563 12.0062C20.2407 11.7406 20.9845 12.0062 21.2501 12.5906C21.622 13.3875 23.3751 14.1844 25.9782 14.1844C27.2001 14.1844 28.3157 13.9719 29.2188 13.6531C30.0157 13.3344 30.547 12.9094 30.7063 12.5375C30.9188 11.9 31.6095 11.5812 32.247 11.8469C32.8845 12.0594 33.2032 12.75 32.9376 13.3875C32.5657 14.45 31.5563 15.3531 30.0688 15.9375C28.847 16.3625 27.4126 16.575 25.9251 16.575Z" fill="#F0950C"></path><path d="M25.9251 21.25C22.5782 21.25 19.922 20.0813 19.072 18.275C18.8063 17.6907 19.072 16.9469 19.6563 16.6813C20.2407 16.4157 20.9845 16.6813 21.2501 17.2657C21.622 18.0625 23.3751 18.8594 25.9782 18.8594C27.2001 18.8594 28.3157 18.6469 29.2188 18.3282C30.0157 18.0094 30.547 17.5844 30.7063 17.2125C30.9188 16.575 31.6095 16.2563 32.247 16.5219C32.8845 16.7344 33.2032 17.425 32.9376 18.0625C32.5657 19.125 31.5563 20.0282 30.0688 20.6125C28.847 21.0375 27.4126 21.25 25.9251 21.25Z" fill="#F0950C"></path><path d="M25.9251 25.925C22.5782 25.925 19.922 24.7562 19.072 22.95C18.8063 22.3656 19.072 21.6218 19.6563 21.3562C20.2407 21.0906 20.9845 21.3562 21.2501 21.9406C21.622 22.7375 23.3751 23.5343 25.9782 23.5343C27.2001 23.5343 28.3157 23.3218 29.2188 23.0031C30.0157 22.6843 30.547 22.2593 30.7063 21.8875C30.9188 21.25 31.6095 20.9312 32.247 21.1968C32.8845 21.4093 33.2032 22.1 32.9376 22.7375C32.5657 23.8 31.5563 24.7031 30.0688 25.2875C28.847 25.7125 27.4126 25.925 25.9251 25.925Z" fill="#F0950C"></path><path d="M25.9251 30.6C22.5782 30.6 19.922 29.4313 19.072 27.625C18.8063 27.0406 19.072 26.2969 19.6563 26.0313C20.2407 25.7656 20.9845 26.0313 21.2501 26.6156C21.622 27.4125 23.3751 28.2094 25.9782 28.2094C27.2001 28.2094 28.3157 27.9969 29.2188 27.6781C30.0157 27.3594 30.547 26.9344 30.7063 26.5625C30.9188 25.925 31.6095 25.6063 32.247 25.8719C32.8845 26.0844 33.2032 26.775 32.9376 27.4125C32.5657 28.475 31.5563 29.3781 30.0688 29.9625C28.847 30.3875 27.4126 30.6 25.9251 30.6Z" fill="#F0950C"></path><path d="M8.07495 21.25C3.9312 21.25 0.903076 19.4437 0.903076 17C0.903076 14.5031 3.9312 12.75 8.07495 12.75C12.2187 12.75 15.2468 14.5563 15.2468 17C15.2468 19.4969 12.2187 21.25 8.07495 21.25ZM8.07495 15.1406C5.09995 15.1406 3.2937 16.2563 3.2937 17C3.2937 17.7437 5.09995 18.8594 8.07495 18.8594C11.05 18.8594 12.8562 17.7437 12.8562 17C12.8562 16.2563 11.05 15.1406 8.07495 15.1406Z" fill="#F0950C"></path><path d="M8.07498 25.925C4.72811 25.925 2.07186 24.7562 1.22186 22.95C0.956234 22.3656 1.22186 21.6218 1.80623 21.3562C2.39061 21.0906 3.13436 21.3562 3.39998 21.9406C3.77186 22.7375 5.52498 23.5343 8.12811 23.5343C9.34999 23.5343 10.4656 23.3218 11.3687 23.0031C12.1656 22.6843 12.6969 22.2593 12.8562 21.8875C13.0687 21.25 13.7594 20.9312 14.3969 21.1968C15.0344 21.4093 15.3531 22.1 15.0875 22.7375C14.7156 23.8 13.7062 24.7031 12.2187 25.2875C11.05 25.7125 9.61561 25.925 8.07498 25.925Z" fill="#F0950C"></path><path d="M8.07498 30.6C4.78123 30.6 2.07186 29.4313 1.22186 27.625C0.956234 27.0406 1.22186 26.2969 1.80623 26.0313C2.39061 25.7656 3.13436 26.0313 3.39998 26.6156C3.77186 27.4125 5.52498 28.2094 8.12811 28.2094C9.34999 28.2094 10.4656 27.9969 11.3687 27.6781C12.1656 27.3594 12.6969 26.9344 12.8562 26.5625C13.0687 25.925 13.7594 25.6063 14.3969 25.8719C15.0344 26.0844 15.3531 26.775 15.0875 27.4125C14.7156 28.475 13.7062 29.3781 12.2187 29.9625C11.05 30.3875 9.56249 30.6 8.07498 30.6Z" fill="#F0950C"></path></svg><h4 class="mb-2 mt-5 text-[#63748b] font-medium">Avg. Client Rating</h4><h3 class="mb-2 text-[24px] font-bold text-black ">$5.03</h3><p class="flex items-center gap-1 text-sm font-medium"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0155 4.74683H9.49366C9.23116 4.74683 9.01241 4.96558 9.01241 5.22808C9.01241 5.49058 9.23116 5.70933 9.49366 5.70933H11.6593L8.85928 7.59058C8.74991 7.67808 8.59678 7.67808 8.46553 7.59058L5.57803 5.68745C5.11866 5.3812 4.54991 5.3812 4.09053 5.68745L0.721783 7.94058C0.503033 8.0937 0.437408 8.39995 0.590533 8.6187C0.678033 8.74995 0.831157 8.83745 1.00616 8.83745C1.09366 8.83745 1.20303 8.81558 1.26866 8.74995L4.65928 6.49683C4.76866 6.40933 4.92178 6.40933 5.05303 6.49683L7.94053 8.42183C8.39991 8.72808 8.96866 8.72808 9.42803 8.42183L12.5124 6.3437V8.77183C12.5124 9.03433 12.7312 9.25308 12.9937 9.25308C13.2562 9.25308 13.4749 9.03433 13.4749 8.77183V5.22808C13.5187 4.96558 13.278 4.74683 13.0155 4.74683Z" fill="#10B981"></path></svg><span class="text-[#10B981]">+2.6%</span><span>than last Week</span></p></div>
        </div>
      </div>
      <div className="flex max-lg:flex-col mt-10 gap-x-7">
        <div className="w-[55%] max-[1400px]:w-full mb-10 bg-white">
          <h4 className="font-medium p-[20px] text-[20px]">Top Channels</h4>
          <div className="grid grid-cols-4 max-md:grid-cols-3 bg-[#F7F9FC] text-[#64748b] font-medium mx-5">
            <h3 className="p-5">SOURCE</h3>
            <h3 className="p-5 flex justify-center">VISITORS</h3>
            <h3 className="p-5 flex justify-center">REVENUES</h3>
            <h3 className="p-5 flex justify-center max-md:hidden">CONVERSION</h3>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-4 max-md:grid-cols-3 items-center mb-3 pb-5 border-b ">
              <div className="flex items-center gap-x-3">
                <img className='w-[36px] h-[36px]' src="/assets/img/brand1.svg" alt="brand123" />
                <p>Google</p>
              </div>
              <h3 className="flex justify-center">3.5K</h3>
              <h3 className="text-[#10b981] flex justify-center">$5678</h3>
              <h3 className="flex justify-center text-[#259AE6] max-md:hidden">4.8%</h3>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-3 items-center mb-3 pb-5 border-b">
              <div className="flex items-center gap-x-3">
                <img className='w-[36px] h-[36px]' src="/assets/img/brand2.svg" alt="brand123" />
                <p>Twitter</p>
              </div>
              <h3 className="flex justify-center">3.5K</h3>
              <h3 className="text-[#10b981] flex justify-center">$5678</h3>
              <h3 className=" text-[#259AE6] flex justify-center max-md:hidden">4.8%</h3>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-3 items-center mb-3 pb-5 border-b">
              <div className="flex items-center gap-x-3">
                <img className='w-[36px] h-[36px]' src="/assets/img/brand3.svg" alt="brand123" />
                <p>Github</p>
              </div>
              <h3 className="flex justify-center">3.5K</h3>
              <h3 className="text-[#10b981] flex justify-center">$5678</h3>
              <h3 className=" text-[#259AE6] flex justify-center max-md:hidden">4.8%</h3>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-3 items-center mb-3 pb-5 border-b">
              <div className="flex items-center gap-x-3">
                <img className='w-[36px] h-[36px]' src="/assets/img/brand4.svg" alt="brand123" />
                <p>Vimeo</p>
              </div>
              <h3 className="flex justify-center">3.5K</h3>
              <h3 className="text-[#10b981] flex justify-center">$5678</h3>
              <h3 className=" text-[#259AE6] flex justify-center max-md:hidden">4.8%</h3>
            </div>
            <div className="grid grid-cols-4 max-md:grid-cols-3 items-center ">
              <div className="flex items-center gap-x-3">
                <img className='w-[36px] h-[36px]' src="/assets/img/brand5.svg" alt="brand123" />
                <p>Facebook</p>
              </div>
              <h3 className="flex justify-center">3.5K</h3>
              <h3 className="text-[#10b981] flex justify-center">$5678</h3>
              <h3 className=" text-[#259AE6] flex justify-center max-md:hidden">4.8%</h3>
            </div>

          </div>
        </div>
        <div className="w-[45%] max-[1400px]:w-full mb-10">
          <Marketing1 />
        </div>
      </div>
      <div className="flex max-lg:flex-col mt-10 gap-x-7 ">
        <div className="bg-white w-[40%] max-[1400px]:w-full mb-10">
          <div className="py-[20px] px-[24px] text-[26px] font-medium">
            External Links
            <p className="text-[#64748b] text-sm font-medium">Most used resources</p>
          </div>
          <div className="px-3 pb-5">
            <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
              <div className="flex gap-x-3 items-center">
                <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 2.86363V20.8636C15 22.8793 16.3892 24 17.8636 24C19.2273 24 20.7273 23.0454 20.7273 20.8636V2.99999C20.7273 1.15483 19.3636 0 17.8636 0C16.3636 0 15 1.27415 15 2.86363Z" fill="#F8AB00"></path><path d="M7.5 12V20.8636C7.5 22.8792 8.8892 24 10.3636 24C11.7273 24 13.2273 23.0454 13.2273 20.8636V12.1363C13.2273 10.2912 11.8636 9.13635 10.3636 9.13635C8.86364 9.13635 7.5 10.4105 7.5 12Z" fill="#E37300"></path><path d="M5.72727 21.1363C5.72727 22.7173 4.4446 24 2.86364 24C1.28267 24 0 22.7173 0 21.1363C0 19.5554 1.28267 18.2727 2.86364 18.2727C4.4446 18.2727 5.72727 19.5554 5.72727 21.1363Z" fill="#E37300"></path></svg>
                <h4>Google Analytics</h4>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#64748b" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_552_42876)"><path d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z" fill=""></path></g><defs><clipPath id="clip0_552_42876"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
            </Link>
            <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
              <div className="flex gap-x-3 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_552_42904)"><path d="M12 0.375C5.55 0.375 0.375 5.55 0.375 12C0.375 18.45 5.55 23.625 12 23.625C18.45 23.625 23.625 18.45 23.625 12C23.625 5.55 18.45 0.375 12 0.375ZM15.075 7.4625C14.6625 7.4625 14.325 7.4625 13.9125 7.4625C13.3875 7.4625 13.05 7.725 13.05 8.2125C13.0125 8.625 13.05 9.075 13.05 9.4125C13.05 9.5625 13.0875 9.5625 13.2 9.5625C13.7625 9.5625 14.3625 9.5625 14.925 9.5625C15.075 9.5625 15.15 9.6 15.15 9.7875C15.1125 10.4625 15 11.175 15 11.85C15 12 14.9625 12 14.775 12C14.2875 12 13.875 12 13.3875 12C13.0875 12 13.125 11.9625 13.125 12.2625C13.125 14.4375 13.125 16.5 13.125 18.675C13.125 18.9 13.0875 18.9375 12.8625 18.9375C12.075 18.9375 11.2875 18.9375 10.5 18.9375C10.275 18.9375 10.2375 18.9 10.2375 18.675C10.2375 17.55 10.2375 16.5 10.2375 15.45C10.2375 14.4 10.2375 13.275 10.2375 12.1875C10.2375 12.0375 10.2 11.925 10.0125 11.9625C9.7125 11.9625 9.3375 11.9625 9 11.9625C8.775 12.075 8.775 12 8.775 11.85C8.775 11.175 8.775 10.5375 8.775 9.7875C8.775 9.6375 8.8125 9.6375 8.925 9.6375C9.3 9.6375 9.6 9.6375 9.975 9.6375C10.2 9.6375 10.2375 9.6 10.2375 9.375C10.2375 8.85 10.2375 8.3625 10.2375 7.8C10.2375 7.1625 10.3875 6.6 10.7625 6.075C11.25 5.4375 11.925 5.1375 12.675 5.0625C13.4625 5.025 14.25 5.0625 15.0375 5.025C15.15 5.025 15.1875 5.0625 15.1875 5.175C15.1875 5.85 15.1875 6.5625 15.1875 7.2375C15.225 7.3875 15.1875 7.4625 15.075 7.4625Z" fill="#4285F4"></path></g><defs><clipPath id="clip0_552_42904"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                <h4>Facebook Ads</h4>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#64748b" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_552_42876)"><path d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z" fill=""></path></g><defs><clipPath id="clip0_552_42876"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
            </Link>
            <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
              <div className="flex gap-x-3 items-center">
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.55217C0 0.694956 0.695478 0 1.55374 0H18.8723C19.7301 0 20.4261 0.697565 20.4261 1.55217V16.4478C20.4261 17.305 19.7306 18 18.8723 18H1.55374C0.696 18 0 17.3024 0 16.4478V1.55217ZM1.4087 2.18296V15.817C1.4087 16.2355 1.76087 16.5913 2.19548 16.5913H18.2306C18.6678 16.5913 19.0174 16.2449 19.0174 15.817V2.18296C19.0174 1.76452 18.6652 1.4087 18.2306 1.4087H2.19548C1.75826 1.4087 1.4087 1.75513 1.4087 2.18296ZM2.11304 9.23113C2.11304 8.8007 2.43652 8.45217 2.84035 8.45217H6.31565C6.71739 8.45217 7.04296 8.79861 7.04296 9.23113V15.887H2.11252V9.23113H2.11304ZM7.74783 6.41687C7.74783 5.98487 8.0713 5.63478 8.47513 5.63478H11.9504C12.3522 5.63478 12.6777 5.98122 12.6777 6.41687V15.887H7.7473V6.41687H7.74783ZM13.3826 3.5953C13.3826 3.16539 13.7061 2.81687 14.1099 2.81687H17.5852C17.987 2.81687 18.3125 3.16644 18.3125 3.5953V15.8864H13.3821V3.5953H13.3826Z" fill="#0080F7"></path></svg>
                <h4>Seranking</h4>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#64748b" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_552_42876)"><path d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z" fill=""></path></g><defs><clipPath id="clip0_552_42876"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
            </Link>
            <Link href={"#"} className="flex justify-between hover:bg-[#F7F9FC] hover:text-[#386cce] items-center gap-x-3  p-[18px]">
              <div className="flex gap-x-3 items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_554_42938)"><path d="M23.5875 7.2C23.55 6 23.325 5.1375 23.0625 4.35C22.8 3.5625 22.3875 2.925 21.75 2.2875C21.1125 1.65 20.475 1.275 19.725 0.975C18.975 0.675 18.15 0.4875 16.875 0.45C15.5625 0.375 15.1875 0.375 12 0.375C8.8125 0.375 8.475 0.375 7.2 0.4125C5.925 0.45 5.1375 0.675 4.35 0.9375C3.5625 1.2 2.925 1.65 2.2875 2.2875C1.65 2.925 1.2375 3.5625 0.975 4.35C0.675 5.1 0.4875 5.925 0.45 7.2C0.4125 8.475 0.375 8.8125 0.375 12C0.375 15.1875 0.375 15.525 0.4125 16.8C0.45 18.075 0.675 18.8625 0.9375 19.65C1.2 20.4375 1.6125 21.075 2.25 21.7125C2.8875 22.35 3.5625 22.7625 4.3125 23.025C5.0625 23.2875 5.8875 23.5125 7.1625 23.55C8.4375 23.625 8.775 23.625 11.9625 23.625C15.15 23.625 15.4875 23.625 16.7625 23.5875C18.0375 23.55 18.825 23.325 19.6125 23.0625C20.4 22.8 21.0375 22.3875 21.675 21.75C22.3125 21.1125 22.725 20.4375 22.9875 19.6875C23.25 18.9375 23.475 18.1125 23.5125 16.8375C23.55 15.6375 23.55 15.2625 23.55 12.075C23.55 8.8875 23.625 8.475 23.5875 7.2ZM21.4875 16.6875C21.45 17.8125 21.225 18.4125 21.075 18.8625C20.85 19.3875 20.5875 19.8 20.175 20.175C19.7625 20.5875 19.3875 20.8125 18.8625 21.075C18.45 21.225 17.85 21.45 16.6875 21.4875C15.4875 21.4875 15.1125 21.4875 12.0375 21.4875C8.9625 21.4875 8.55 21.4875 7.35 21.45C6.225 21.4125 5.625 21.1875 5.175 21.0375C4.65 20.8125 4.2375 20.55 3.8625 20.1375C3.45 19.725 3.225 19.35 2.9625 18.825C2.8125 18.4125 2.5875 17.8125 2.55 16.65C2.55 15.4875 2.55 15.1125 2.55 12C2.55 8.8875 2.55 8.5125 2.5875 7.3125C2.625 6.1875 2.85 5.5875 3 5.1375C3.225 4.6125 3.4875 4.2 3.8625 3.825C4.275 3.4125 4.65 3.1875 5.175 2.9625C5.5875 2.8125 6.1875 2.5875 7.35 2.55C8.55 2.5125 8.925 2.5125 12.0375 2.5125C15.15 2.5125 15.525 2.5125 16.725 2.55C17.85 2.5875 18.45 2.8125 18.9 2.9625C19.425 3.1875 19.8375 3.45 20.2125 3.825C20.625 4.2375 20.85 4.6125 21.1125 5.1375C21.2625 5.55 21.4875 6.15 21.525 7.3125C21.5625 8.5125 21.5625 8.8875 21.5625 12C21.5625 15.1125 21.525 15.4875 21.4875 16.6875Z" fill="url(#paint0_linear_554_42938)"></path><path d="M12.0006 6.03735C8.66309 6.03735 6.03809 8.73735 6.03809 11.9999C6.03809 15.3374 8.73809 17.9624 12.0006 17.9624C15.2631 17.9624 18.0006 15.3374 18.0006 11.9999C18.0006 8.66235 15.3381 6.03735 12.0006 6.03735ZM12.0006 15.8999C9.82559 15.8999 8.10059 14.1374 8.10059 11.9999C8.10059 9.86235 9.86309 8.09985 12.0006 8.09985C14.1756 8.09985 15.9006 9.82485 15.9006 11.9999C15.9006 14.1749 14.1756 15.8999 12.0006 15.8999Z" fill="url(#paint1_linear_554_42938)"></path><path d="M18.2625 7.16257C19.0288 7.16257 19.65 6.54135 19.65 5.77507C19.65 5.00876 19.0288 4.38757 18.2625 4.38757C17.4962 4.38757 16.875 5.00876 16.875 5.77507C16.875 6.54135 17.4962 7.16257 18.2625 7.16257Z" fill="url(#paint2_linear_554_42938)"></path></g><defs><linearGradient id="paint0_linear_554_42938" x1="4" y1="1" x2="20.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#5851DB"></stop><stop offset="0.25" stop-color="#833AB4"></stop><stop offset="0.479167" stop-color="#C13584"></stop><stop offset="0.739583" stop-color="#E1306C"></stop><stop offset="1" stop-color="#FD1D1D"></stop></linearGradient><linearGradient id="paint1_linear_554_42938" x1="7.90537" y1="6.35792" x2="16.358" y2="17.6767" gradientUnits="userSpaceOnUse"><stop stop-color="#5851DB"></stop><stop offset="0.25" stop-color="#833AB4"></stop><stop offset="0.479167" stop-color="#C13584"></stop><stop offset="0.739583" stop-color="#E1306C"></stop><stop offset="1" stop-color="#FD1D1D"></stop></linearGradient><linearGradient id="paint2_linear_554_42938" x1="17.3082" y1="4.46217" x2="19.2769" y2="7.09017" gradientUnits="userSpaceOnUse"><stop stop-color="#5851DB"></stop><stop offset="0.25" stop-color="#833AB4"></stop><stop offset="0.479167" stop-color="#C13584"></stop><stop offset="0.739583" stop-color="#E1306C"></stop><stop offset="1" stop-color="#FD1D1D"></stop></linearGradient><clipPath id="clip0_554_42938"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
                <h4>Instagram Ads</h4>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="#64748b" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_552_42876)"><path d="M14.4339 9.44989C14.4339 9.03453 14.7719 8.69729 15.1883 8.69729C15.6046 8.69729 15.9426 9.03453 15.9426 9.44989V13.7715C15.9426 14.3848 15.692 14.9421 15.2874 15.3457C14.8829 15.7494 14.3243 15.9994 13.7096 15.9994H2.23295C1.61827 15.9994 1.05971 15.7494 0.655139 15.3457C0.250571 14.9421 0 14.3848 0 13.7715V2.23765C0 1.62437 0.250571 1.06708 0.655139 0.663433C1.05971 0.259787 1.61827 0.00978681 2.23295 0.00978681H6.53703C6.95334 0.00978681 7.29135 0.347026 7.29135 0.762391C7.29135 1.17776 6.95334 1.515 6.53703 1.515H2.23295C2.03458 1.515 1.85449 1.59703 1.72268 1.72723C1.59086 1.85875 1.50995 2.03843 1.50995 2.23635V13.7702C1.50995 13.9681 1.59217 14.1478 1.72268 14.2793C1.85449 14.4108 2.03458 14.4916 2.23295 14.4916H13.7109C13.9093 14.4916 14.0894 14.4095 14.2212 14.2793C14.353 14.1491 14.4339 13.9681 14.4339 13.7702V9.44989ZM14.6715 2.27281L7.04861 9.97333C6.75759 10.2689 6.27993 10.2728 5.98369 9.98244C5.68744 9.69208 5.68352 9.21552 5.97455 8.91994L13.3038 1.515H10.2525C9.83622 1.515 9.49821 1.17776 9.49821 0.762391C9.49821 0.347026 9.83622 0.00978681 10.2525 0.00978681H13.7109C14.3791 0.00978681 15.2405 -0.103494 15.7533 0.413433C16.077 0.740256 16.0052 3.34572 15.9635 4.85484C15.953 5.24546 15.9439 5.54364 15.9439 5.75718C15.9439 6.17255 15.6059 6.50979 15.1896 6.50979C14.7732 6.50979 14.4352 6.17255 14.4352 5.75718C14.4352 5.71682 14.4457 5.32489 14.46 4.81447C14.4809 4.02802 14.6075 2.98635 14.6715 2.27281Z" fill=""></path></g><defs><clipPath id="clip0_552_42876"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
            </Link>

          </div>
        </div>
        <div className="w-[60%] max-[1400px]:w-full mb-10 bg-white p-[20px]">
          <h3 className='font-medium text-2xl'>Campaign Visitors</h3>
          <p className='text-3xl font-medium gap-x-3 flex items-center '>$560.93
            <div className="flex text-sm items-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0158 4.74683H9.4939C9.2314 4.74683 9.01265 4.96558 9.01265 5.22808C9.01265 5.49058 9.2314 5.70933 9.4939 5.70933H11.6595L8.85953 7.59058C8.75015 7.67808 8.59703 7.67808 8.46578 7.59058L5.57828 5.68745C5.1189 5.3812 4.55015 5.3812 4.09078 5.68745L0.722027 7.94058C0.503277 8.0937 0.437652 8.39995 0.590777 8.6187C0.678277 8.74995 0.831402 8.83745 1.0064 8.83745C1.0939 8.83745 1.20328 8.81558 1.2689 8.74995L4.65953 6.49683C4.7689 6.40933 4.92203 6.40933 5.05328 6.49683L7.94078 8.42183C8.40015 8.72808 8.9689 8.72808 9.42828 8.42183L12.5127 6.3437V8.77183C12.5127 9.03433 12.7314 9.25308 12.9939 9.25308C13.2564 9.25308 13.4752 9.03433 13.4752 8.77183V5.22808C13.5189 4.96558 13.2783 4.74683 13.0158 4.74683Z" fill="#10B981"></path></svg><span class="text-[#10B981]">+2.5%</span>
            </div>
          </p>
          <p className='text-[#64748b]'>Average cost per interaction</p>
          <Marketing2 />
        </div>
      </div >


    </>
  )
}

export default page