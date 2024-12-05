import React from 'react'

const HeaderTop = () => {
  return (
    <>
    <div className='flex justify-center bg-black text-white h-[48px]'>
        <div className='mr-40 p-2'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='underline ml-1'>ShopNow</span></p>
        </div>
        <div className="p-2 flex items-center">
  English
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-2 transition-transform duration-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 9l6 6 6-6"
    />
  </svg>
</div>
    </div>


  <div className='px-20 mt-8'>
    {/* logo  */}
    <div>
        <p className='font-bold text-2xl'>Exclusive</p>
    </div>
    <div>
      <ul className='flex justify-center gap-3'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Signup</li>
      </ul>
    </div>
  {/* <div>search and logoes</div> */}
</div>
    </>
  )
}

export default HeaderTop