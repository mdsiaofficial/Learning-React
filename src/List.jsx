
import propTypes from "prop-types"
function List(props) {
    
    // const foods =  ["Ruti", "Biriyani", "Polao", "Khichuri", "Vat"];
    // const foods = [ {id:1, cal: 65, foodname: "Ruti",},
    //                 {id:2, cal: 165, foodname: "Biriyani"},
    //                 {id:3, cal: 465, foodname: "Polao"},
    //                 {id:4, cal: 645, foodname: "Khichuri"},
    //                 {id:5, cal: 865, foodname: "Vat"},];

    // foods.sort((a, b) => a.foodname.localeCompare(b.foodname)) // alphabetical sort
    // foods.sort((a, b) => a.cal - b.cal); // numeric

    // const lowCalFood = foods.filter(fd => fd.cal < 200);
    // const highCalFood = foods.filter(fd => fd.cal > 200);


    // const list_items = foods.map(fd => <li>{fd}</li>);

    // const list_items = foods.map(fd =>
    //     <li key={foods.id}>{
    //         fd.foodname}: &nbsp; <b>{fd.cal}</b>
    //     </li>
    // );
    
    const category = props.category;
    const item_list = props.items;

    // const list_items = foods.map(fd =>
    //     <li key={foods.id}>{
    //         fd.foodname}: &nbsp; <b>{fd.cal}</b>
    //     </li>
    // );

    const list_items = item_list.map(it =>
        <li key={it.id}>{
            it.foodname}: &nbsp; <b>{it.cal}</b>
        </li>
    );

    
    // return (foods);
    // return (
    //     <ol>{list_items}</ol>
    // )

    return (
        <div>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{list_items}</ol>
        </div>
    )
}


List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        cal: propTypes.number,
        foodname: propTypes.string
    })),
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List