import PlaceItem from "../PlaceItem/PlaceItem";


const Placement = ({placementData})=>{

    console.log(placementData);
    return(
        <div>
                <h1>Place items</h1>
            {
                placementData.map( singleCart => <PlaceItem
                
                key={singleCart.id}
                singleCart = {singleCart}
                
                > </PlaceItem> )
            }
        </div>
    )
}
export default Placement