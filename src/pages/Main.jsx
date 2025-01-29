import { Link } from 'react-router-dom';
import ImgState from '../Assets/state.png';
import ImgComponent from '../Assets/component.png';
import ImgFlower from '../Assets/floer-6.jpg';
import ImgFlowers from '../Assets/flower-2.jpg';
import ImgBoom from '../Assets/flower-5.jpg';




export default function Main() {


  return (
    <>
       <div className="mt-36 mb-40 sm:text-center sm:justify-center   sm:w-[100%]">
          <a href='/ingredient' className='ml-[70%] mb-2 text-amber-800 font-semibold'>Add Ingredient</a>
            <h2 className="flex items-center justify-center top-48 absolute mt-24 ml-72 sm:mb-3 sm:grid sm:grid-cols-2 text-slate-400 text-2xl font-bold">Launch Sites quickly with uptone for webflow</h2>
          <div className='sm:grid sm:mt-8 sm:flex-col'>
            <div className='flex items-center justify-between bg-slate-700 p-8  ml-10 rounded-md '>
              
              <div className='block mb-8 mt-[19%] ml-8 sm:w-[50%] md:w-[40%] lg:w-[50%]'>
                  <p className="text-center border sm:w-[100%] sm:mb-8 ml-40 sm:px-8 sm:text-xl sm:font-bold md:w-[100%] md:px-12 justify-center p-4 text-slate-300 font-semibold px-6 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis repellat cum qui cumque delectus cupiditate corrupti minima sit, distinctio nesciunt deserunt illum neque perspiciatis fugiat consectetur?
                  </p>

                  <div className="flex items-center justify-center mt-4 px-2 ml-32">
                    <a href="/blog" className='flex-nowrap border py-2 w-28 ml-40 p-2 text-fuchsia-300 font-semibold hover:bg-fuchsia-200 transition duration-150 ease-in-out'>View Work</a>
                  </div>
              </div>

                <div className='sm:w-[100%] mt-6 sm:ml-[23%] md:ml-[23%] md:w-[100%] lg:w-[1000%] '>
                  <img src={ImgState} alt='Pics' className='rounded-md w-full -ml-16'/>
                </div>
              
            </div>
          </div>

          <div className='mt-8 mb-2 md:-w-[76%] sm:min-w-24'>
              <h2 className='flex items-center justify-center text-fuchsia-950 font-bold font-serif'>Our Services</h2>
              <Link to='/reducer-page'>Reducer</Link>
              <main className='mt-8 bg-slate-800 rounded-md p-8 flex m-4 gap-8 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-3'>

                  <div className='border rounded-md'>
                    <img src={ImgComponent} alt='Pics' className='flex sm:ml-[45%] md:ml-[33%] width-[15%] h-20  items-center justify-center ml-28 mt-1 lg:mt-4 lg:mb-4 mb-4 md:mt-4 md:mb-4'/>
                    <h3 className='flex items-center justify-center mt-2 mb-4 text-amber-500 font-bold font-serif text-xl'>Multiple Component</h3>
                    <p className='flex items-center text-slate-50 font-semibold justify-center m-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis repellat cum qui cumque delectus cupiditate corrupti minima sit, distinctio?
                    </p>
                  </div>

                  <div className='border rounded-md'>
                    <img src={ImgFlower} alt='Pics' className='flex sm:ml-[45%] md:ml-[38%] width-[15%] h-20  items-center justify-center ml-32 mt-2 mb-4 lg:mt-4 lg:mb-4 md:mt-4 md:mb-4'/>
                    <h3 className='flex items-center justify-center mt-2 mb-4 text-amber-500 font-bold font-serif text-xl'>Easy To Style</h3>
                    <p className='flex p-2 items-center text-slate-50 font-semibold justify-center m-4'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis repellat cum qui cumque delectus cupiditate corrupti minima sit, distinctio?
                    </p>
                  </div>

                  <div className='border rounded-md'>
                    <img src={ImgFlowers} alt='Pics' className='flex sm:ml-[45%] md:ml-[37%] width-[15%] h-20  items-center justify-center ml-32 mt-2 mb-4 lg:mt-4 lg:mb-4 md:mt-4 md:mb-4'/>
                    <h3 className='flex items-center justify-center mt-2 mb-4 text-amber-500 font-bold font-serif text-xl'>Diverse Layout</h3>
                    <p className='flex p-2 items-center text-slate-50 font-semibold justify-center m-4 sm:ml-2 md:ml-8'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis repellat cum qui cumque delectus cupiditate corrupti minima sit, distinctio?
                    </p>
                  </div>
              </main>
          </div>

          <section className='bg-slate-700 p-20 block items-center justify-center'>
           <div className='grid items-center justify-center'>
              <h2 className='text-4xl font-bold text-amber-200 grid text-center justify-center'>Build an Attractive Landing Page Fast.</h2>
              <p className='flex gap-8 text-center justify-center text-xl px-16  text-white mt-8 mb-4 max-h-40 ml-10 sm:ml-16 md:ml-1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis repellat cum qui cumque ...?
              </p>
           </div>

           <article>
              <h2 className='text-4xl font-semibold text-amber-500 mt-4 mb-8 m-14 sm:text-lg md:text-2xl sm:ml-1 md:ml-4'>Multiple Components</h2>
              
              <div className='grid grid-cols-2 item-center justify-center p-10'>

                  <div className='ml-[10%]'>
                    <p className='border p-4 text-xl text-white font-semibold w-[70%] ml-[50%] sm:ml-1 md:ml-6'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, maiores laboriosam sint, reiciendis?
                    </p>
                  </div> 

                  <div className='mr-20 ml-32'>
                    <img src={ImgBoom} alt='Logo' className='mb-6 ml-[0%] mr-16 w-[60%] sm:w-[100vh] sm:grid sm:flex-col md:w-[100%]'/>

                    <p className='flex ml-52 md:ml-2 text-amber-200'>
                      Perfect works.
                    </p>
                  </div>
                </div>
           </article>      
         </section>
      </div>
    </>
  )
}
