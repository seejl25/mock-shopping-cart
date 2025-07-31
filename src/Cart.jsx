

const Card = ({ data, handleClick }) => {

    return (
        <div className="card">
            <img src={data.image} />
            <h3>{data.title}</h3>
            <p>Price: ${data.price}</p>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default Card