import { cardInfo } from "../../types/cardinfo";

const Card = (props: cardInfo) => {
    const { id, ad_type, description, price, title } = props
    return (
        <>
            <div>
                <h1>{title}</h1>
                {/* <img src={image} alt={title} /> */}
                <hr />
                <h3>{ad_type}</h3>
                <h4>{description}</h4>
                <p>price: {price}</p>
            </div>
        </>
    )
}

export default Card