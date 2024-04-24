import { useEffect, useState } from "react"

function MyComp4() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        // document.title = `My Counter Program.`;
    }, [count, color]);
    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c ==="green"? "red": "green");
    }
    


    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        
        window.addEventListener("resize", hanleResize);

        return () => {
            window.removeEventListener("resize", hanleResize);
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);
    function hanleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div style={{color: color}}>
            Count: {count} <br />
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>

            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>
        </div>
    )

}
export default MyComp4