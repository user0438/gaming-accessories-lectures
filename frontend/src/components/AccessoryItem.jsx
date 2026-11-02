function AccessoryItem({ accessory }) {
    const imageUrl = 'http://localhost:3000/' + accessory.image;

    return (
        <li className='accessory-item'>
            <article>
                <img src={imageUrl} alt={accessory.name} />
                <h3>{accessory.name}</h3>
                <p className='acccessory-item-description'>{accessory.description}</p>
                <p className='accessory-item-price'>{accessory.price}</p>
            </article>
        </li>
    );
}
 
export default AccessoryItem;