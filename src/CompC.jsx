import CompD from "./CompD"
export default function CompC(props) {
    return (
        <div className="box">
            <h1 className="comp_c">Component C</h1>
            <CompD user={props.user}></CompD>
        </div>
    )
}
