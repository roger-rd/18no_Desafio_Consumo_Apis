import { useEffect, useState } from "react";



const MiApi = ({}) => {
    const [drinks , setDrinks] = useState([]);
    const [search , setSearch] = useState('');



    const getData = async () =>{
    const res = await  fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const data = await res.json();

    setDrinks(data.drinks);
    
    };

    useEffect(()=>{
    getData();
    },[]);


    return (

<div className=" my-3">
        <nav className="navbar bg-warning-subtle ">
            <div className="container-fluid">
                <a className="navbar-brand text-success fs-4">Cocteles</a>
                <form className="d-flex" >
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value.trim())}
                        value={search}
                    />
                </form>
            </div>
        </nav>


    <h3 className="card-title text-center mt-5 text-success bg-warning-subtle">Lista de Cocteles</h3>
        <div className="container col-10">
            <div className="row">
                {
                drinks.filter((item) => item.strDrink.toLowerCase().includes(search.toLowerCase()))
                .map((item) => {
                    return <div key={item.idDrink} className="card-group col-sm-6 col-md-6 col-lg-4 mt-3">
                        <div className="card m-1">
                                <div className="card-body bg-warning-subtle">
                                    <ul>
                                        <h2 className="titleCoctel"> Coctel: {item.strDrink}</h2>
                                        <p className="intruction card-text fs-5"> <b>Instruction:</b> {item.strInstructions}</p>
                                        <img className="rounded-5 mt-3 card-img-top img-fluid" src={item.strDrinkThumb} />
                                    </ul>
                                </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
</div>
    );
}

export default MiApi;
