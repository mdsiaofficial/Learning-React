import { useEffect, useState } from "react"

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
        
    }, []);

    function pz(n) {
        return (n < 10 ? "0" : "") + n;
    }
    
    function formatTime() {
        let hh = time.getHours();
        let mm = time.getMinutes();
        let ss = time.getSeconds();
        let ampm = hh >= 12 ? "PM" : "AM";

        hh = hh % 12 || 12;

        return `${pz(hh)} : ${pz(mm)} : ${pz(ss)} ${ampm}`;
    }

    return (
        <div className="clock-container">
            <h1>My DigitalClock </h1>
            <div className="clock">
                {/* <span>00:00:00</span> */}
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}
export default DigitalClock