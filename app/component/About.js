"use client"
function About() {
  return (
    <div id='about' className='mt-20 px-10 py-10 rounded-lg max-w-screen-xl hover:scale-110  mx-auto  flex flex-row max-md:flex-col justify-center items-center'>
      {/* <div className='w-1/4 max-md:w-full flex flex-row items-center justify-center space-x-4'  >
       <img src={asset alt="image2" className='w-100 h-100 max-md:w-fit h-fit rounded-lg' />
    </div> */}
      <div className='w-3/4 px-6  max-md:w-full  text-white '>
        <h1  className='font-bold text-3xl max-md:mt-6  '  >About Us</h1>
        <p className='pt-4 font-normal tracking-wide'>Our School Management Platform is designed to simplify the way schools are added, managed, and displayed online. With a clean and user-friendly interface,
             the system allows administrators to easily register schools by providing essential details such as name, address, city, state, contact information, images, and email ID.</p>
        <p className='pt-2 font-normal  tracking-wide'>The Add School feature enables institutions to quickly submit their details, while the All Schools section makes it easy for users to explore and discover registered schools in different locations. 
            The integrated Contact option ensures smooth communication between schools and interested users.</p>
        <p  className='pt-2 font-normal  tracking-wide'>
            Built with Next.js, React, Tailwind CSS, and MySQL, the platform is optimized for performance, responsiveness, and scalability. 
            Whether it’s for managing school listings, showcasing institutions, or streamlining communication, our project offers a secure and modern solution tailored for educational needs.
        </p>
      </div>
    </div>
    
  )
}

export default About
