import { useState } from "react";

function MyComp3() {
    const [car, setCar] = useState({
        year: 2024,
        brand: "Ford",
        model: "Mustang",
    });

    const [foods, setFoods] = useState(["Kunafa", "Pudding"]);

    function handleYearChange(e) {
        setCar( c => ({ ...c, year: e.target.value }));
    }
    function handleBrandChange(e) {
        setCar(c => ({ ...c, brand: e.target.value }))
    }
    function handleModelChange(e) {
        setCar( c => ({ ...c, model: e.target.value }));
    }

    function handleAddFood() {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = "";
        
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }



    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carBrand, setCarBrand] = useState("Brand");
    const [carModel, setCarModel] = useState("Model");

    function handleAddCar() {
        const newCar = {
            year: carYear,
            brand: carBrand,
            model: carModel,
        };
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarBrand("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        setCars(c => c.filter((e, i) => i !== index));
    }
    function handleYear(e) {
        setCarYear(e.target.value);
    }
    function handleModel(e) {
        setCarModel(e.target.value);        
    }
    function handleBrand(e) {
        setCarBrand(e.target.value);
    }
    
    return (
        <div>
            <p>My favorite car is: {car.year} {car.brand} {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.brand} onChange={handleBrandChange}/>
            <input type="text" value={car.model} onChange={handleModelChange} />
            
            <br />
            <br />
            <h2>List of Foods</h2>
            <ul className="food-list">
                {
                    foods.map((f, i) =>
                        <li key={i} onClick={()=>handleRemoveFood(i)}>
                            {f}
                        </li>)
                }
            </ul>

            <input type="text" id="food-input" placeholder="Enter Food Name" />
            <button onClick={handleAddFood}>Add Food</button>
            
            <br /><br /><br />

            <h2>List of Car objects: </h2>
            <ul>
                {
                    cars.map((c, i) =>
                    <li key={i} onClick={()=>handleRemoveCar(i)}>
                        {c.year} {c.brand} {c.model}
                    </li>)
                }
            </ul>
            <input type="number" value={carYear} onChange={handleYear} /><br />
            <input type="text" value={carBrand} onChange={handleBrand} /><br />
            <input type="text" value={carModel} onChange={handleModel} /><br />
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    )
}

export default MyComp3