function Food (props) {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
        <div className="card">
            <div className="card-header text-center font-weight-bold">
                <span>{props.food.name}</span>
            </div>
            <div className="card-body p-0">
                <img 
                    src={props.food.image} 
                    alt={props.food.name} 
                    class="w-100"
                    style={{ width: 100}}
                />
            </div>
        </div>
        </div>
    );
}
export default Food;