'use client'

import { useRouter } from 'next/navigation.js';
import onSubmit from '../actions/led.js'
import { AiOutlineCheckCircle, AiOutlineExclamationCircle } from 'react-icons/ai'

interface StatusProps {
    active: Number;
}

const Status: React.FC<StatusProps> = ({ active }) => {
    const router = useRouter();

    return (
        <form className={`absolute bottom-0 right-0 p-20`} action={() => {onSubmit(active); router.refresh()}}>
            <button type="submit">
                <div className={`px-3 py-2 ${active ? 'bg-green-800 border-green-600' : 'bg-red-800 border-red-600'} 
                bg-opacity-60 cursor-pointer border rounded-xl flex items-center gap-2`}>
                    <div>LED:</div>
                    {active ? <span>Active</span> : <span>Inactive</span>}
                    {active ? <AiOutlineCheckCircle /> : <AiOutlineExclamationCircle />}
                </div>
            </button>
        </form>
     );
}

export default Status;