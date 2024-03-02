import Image from 'next/image'
import { Hanken_Grotesk } from 'next/font/google'

export default function Home() {
  return (
    <main className="flex  flex-row flex-wrap items-center justify-evenly   p-24 bg-gradient-to-b from-white to-[#ebf1ff] ">
        <div className='max-w-[850px] grid grid-cols-1 rounded-full md:grid-cols-2 bg-white justify-center'>
        <div className="relative pb-8 flex place-items-end rounded-b-[40px] md:rounded-[40px] grid justify-items-center bg-gradient-to-b to-[#2e2be9] from-[#7857ff] ">
          <p className='text-3xl text-[#c8c7ff] text-700 mt-10 font-bold'>Your Result</p> <br /> 
          <span className='rounded-full mb-10 bg-gradient-to-b from-[#4e21ca] to-[# ] px-20 py-8 justify-items-center'>
          <h1 className='text-[100px] font-extrabold text-center '>76</h1> 
          <p className='text-xl mt-[-15px] text-center font-bold text-[#7857ff]'>of 100</p> <br />
          </span>
          <h2 className='text-4xl mb-5 font-bold'>Great</h2> 
          <p className='text-xl mx-10 max-w-[60%] text-center text-[#c8c7ff ]'>You scored higher than 65% of the people who have taken these tests.</p>
          <br />
        </div>

        <div className="grid text-center align-stretch bg-white rounded-r-[40px] shadow-2xl  ">

            <h2 className={`mb-3 mt-10 text-3xl text-left pl-12 font-semibold text-black `}>
              Summary{' '}
            </h2>

          
          <div
            className="group mx-9 my-1 mt-2  rounded-lg flex flex-row border border-transparent align-middle justify-stretch px-2 py-1 transition-colors border-transparent bg-[#ff5757] bg-opacity-10"
          >
            <span className={`basis-[12%] text-left self-center`}>
            <Image 
              className="right  stroke-[#1125d4]"
              src="/icon-reaction.svg"
              alt="Reaction Icon"
              width={30}
              height={14  }
              priority
            />
            </span>
            <h2 className={`basis-[58%] pl-1 text-2xl font-semibold text-[#ff5757] text-left self-center `}>
              Reaction{' '}
            </h2>
            
            <span className={`basis-[30%] text-sm text-center  self-center   col-span-1`}>
              <span className={`text-[#303b5a] text-right text-xl font-bold`}>
                80 &nbsp; 
              </span>          
              <span className={`opacity-50 col-span-2 text-[#303b5a] text-opacity-50 text-right text-xl font-bold`}>
                  / 100
              </span>
            </span>
          </div>        
          <div
            className="group rounded-lg flex flex-row  mx-9 my-1 border border-transparent align-middle justify-stretch px-2 py-1 transition-colors border-transparent bg-[#ffb01f] bg-opacity-10"
          >
            <span className={`basis-[12%] text-left self-center `}>
            <Image 
              className="relative stroke-[#1125d4]"
              src="/icon-memory.svg"
              alt="Memory Icon"
              width={30}
              height={14  }
              priority
            />
            </span>

            <h2 className={`basis-[58%] pl-1 text-2xl font-semibold text-[#ffb01f] text-left self-center`}>
              Memory{' '}
            </h2>
            <span className={`basis-[30%] text-sm text-center  self-center col-span-1`}>
            <span className={`text-[#303b5a] text-right text-xl font-bold`}>
              92 &nbsp; 
            </span>          
            <span className={`opacity-50 col-span-2 text-[#303b5a] text-opacity-50 text-right text-xl font-bold`}>
                / 100
            </span>
            </span>
          </div>        <div
            className="group rounded-lg  mx-9 my-1 flex flex-row  border border-transparent align-middle justify-stretch px-2 py-1 transition-colors border-transparent bg-[#00bd91] bg-opacity-10"
          >
            <span className={`basis-[12%] text-left self-center `}>
            <Image 
              className="relative stroke-[#1125d4]"
              src="/icon-verbal.svg"
              alt="Verbal Icon"
              width={30}
              height={14  }
              priority
            />
            </span>
            <h2 className={`basis-[58%] pl-1 text-2xl font-semibold text-[#00bd91] text-left self-center`}> 
              Verbal{' '}
            </h2>
            <span className={`basis-[30%] text-sm text-center  self-center col-span-1`}>
            <span className={`text-[#303b5a] text-right text-xl font-bold`}>
              61 &nbsp; 
            </span>          
            <span className={`opacity-50 col-span-2 text-[#303b5a] text-opacity-50 text-right text-xl font-bold`}>
                / 100
            </span>
            </span>
          </div>
          <div
            className="group rounded-lg  mx-9 my-1 flex flex-row border border-transparent align-middle justify-stretch px-2 py-1 transition-colors border-transparent bg-[#1125d4] bg-opacity-10"
            >
            <span className={`basis-[12%] text-left self-center `}>
            <Image 
              className="relative stroke-[#1125d4]"
              src="/icon-visual.svg"
              alt="Visual Icon"
              width={30}
              height={14  }
              priority
            />
            </span>

            <h2 className={`basis-[58%] pl-1 text-2xl font-semibold text-[#1125d4] text-left self-center`}>
              Visual{' '}
            </h2>
            <span className={`basis-[30%] text-sm text-center  self-center col-span-1`}>
            <span className={`text-[#303b5a] text-right text-xl font-bold`}>
              72 &nbsp; 
            </span>          
            <span className={`opacity-50 col-span-2 text-[#303b5a] text-opacity-50 text-right text-xl font-bold`}>
                / 100
            </span>
            </span>
          </div>
          <div
            className="group rounded-full border border-transparent m-6 px-4 py-4 text-center self-center  align-middle bg-[#303b5a] hover:bg-gradient-to-b to-[#2e2be9] from-[#7857ff]"
          >
            <button type="button" className={`text-2xl font-bold `}>
              Continue  
            </button>
          </div>
        </div>
      </div>  
    </main>
  )
}
