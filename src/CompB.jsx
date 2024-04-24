import CompC from "./CompC"
export default function CompB(props) {
    return (
        <div className="box">
            <h1 className="comp_b">Component B</h1>
            
            <CompC user={props.user}></CompC>
        </div>
    )
}
