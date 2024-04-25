import React, {useState, useEffect, useRef} from "react";
export default function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);
    
    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now(); - elapsedTime;
        // console.log(startTimeRef.current);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hh = Math.floor(elapsedTime / (1000 * 60 * 60));
        let mm = Math.floor(elapsedTime / (1000 * 60) % 60);
        let ss = Math.floor(elapsedTime / (1000) % 60);
        let ms = Math.floor((elapsedTime % 1000) / 10);
        
        hh = String(hh).padStart(2, "0");
        mm = String(mm).padStart(2, "0");
        ss = String(ss).padStart(2, "0");
        ms = String(ms).padStart(2, "0");
        
        // return `00:00:00`;
        return `${hh}:${mm}:${ss}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-btn">Start</button>
                <button onClick={stop} className="stop-btn">Stop</button>
                <button onClick={reset} className="reset-btn">Reset</button>
            </div>
        </div>
    )
}