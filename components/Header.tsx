'use client'

import { useRouter } from 'next/navigation';
import {GrRefresh} from 'react-icons/gr'

const Header = () => {
    const router = useRouter();

    return ( 
        <div className="w-full p-4 px-20 flex justify-between items-center text-white bg-transparent bg-opacity-5">
            <div className="text-lg font-semibold">Smart Home</div>
            <div className="flex items-center gap-4 relative">
                <div className='bg-slate-500 bg-opacity-20 hover:bg-opacity-40 p-2 rounded-full cursor-pointer'
                onClick={() => router.refresh()}>
                    <GrRefresh className='invert' size={24} />
                </div>
                <a href="https://github.com/AdrianOles"><div className="px-3 py-2 bg-slate-500 bg-opacity-20 hover:bg-opacity-40 rounded-2xl transition cursor-pointer">Github</div></a>
            </div>
        </div>
     );
}
 
export default Header;