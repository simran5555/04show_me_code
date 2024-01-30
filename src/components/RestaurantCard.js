import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    return (
        <div className="res-card" style={{
            backgroundColor: '#f0f0f0',
        }}>
            {console.log(CDN_URL + cloudinaryImageId)}
            <img src={CDN_URL + cloudinaryImageId} style={{width:'190px'}} alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;