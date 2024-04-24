import CompA from "./CompA"
export default function CompD(props) {
    return (
        <div className="box">
            <h1 className="comp_d" >Component D</h1>
            {/* <CompA></CompA> */}
            <h2>{`bye, ${props.user}`}</h2>
        </div>
    )
}
