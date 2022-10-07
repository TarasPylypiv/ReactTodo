import {useState, useEffect} from 'react';

export default function Clock() {
    const [time,  setTime] = useState();
    useEffect(() => {
        setInterval(() => {
            const data = new Date();
            setTime(data.toLocaleTimeString());
        },1000)
    },[]);
    return <div className='clock'>{time}</div>
}
