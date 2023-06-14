import Image from "next/image"
import image from '../public/images/smart-home.png'
import Status from '../components/Status';
import executeQuery from '../lib/db'

export default async function Home() {
  const readData = await executeQuery({
    query: 'SELECT * from data',
    values:[]
  })

  return (
    <div className='h-full pt-24 px-10 pb-10 text-white'>

      <Status active={readData[0].led} />
      <div className='flex flex-col gap-[7.5rem]'>
        <div className='flex items-center'>
          <div className='md:ml-20 ml-10 mt-10 md:text-[3.5rem] text-[3rem] max-w-[50%] uppercase font-bold italic'>
            Realtime data, anytime, anywhere
          </div>
          <div className='mx-auto w-[40%] h-full hidden md:block'>
            <div className="w-[25vw] h-[45vh] relative">
              <Image
                src={'https://cdn-icons-png.flaticon.com/512/3444/3444029.png'}
                alt='Image'
                fill
                priority
                className="mt-10"
              />  
            </div>    
          </div>
        </div>
        <div className='flex flex-col md:px-20 px-10 gap-3'>
          <div className="flex gap-2 px-2 py-2 border border-[#ffffff62] w-fit bg-black bg-opacity-10">
            <div>
              Temperature:
            </div>
            <div>
              {readData[0].temperature}°C
            </div>
          </div>
          <div className="flex gap-2 px-2 py-2 border border-[#ffffff62] w-fit bg-black bg-opacity-10">
            <div>
              Humdity:
            </div>
            <div>
              {readData[0].humidity}%
            </div>
          </div>
          <div className="flex gap-2 px-2 py-2 border border-[#ffffff62] w-fit bg-black bg-opacity-10">
            <div>
              Sound:
            </div>
            <div>
              {readData[0].sound === 1 ? 'Detected' : 'Not present'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
