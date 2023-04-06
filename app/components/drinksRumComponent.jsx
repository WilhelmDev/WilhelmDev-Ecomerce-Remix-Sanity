import {Link} from '@remix-run/react'

const DrinksRumComponent = ({rumObj}) => {
    const {drink_image_cloud, name, presentation, price, url_product} = rumObj
    return (
        <div className="drink-rum">
            <img src={drink_image_cloud.url} alt={`drink ${name}`}/>
            <div className="contenido">
                <h3> {name} </h3>
                <p className="presentation">{presentation} Lt</p>
                <p className="price">{price}$</p>

                <Link className='link-rum' to={`/drink/${url_product.current}`}>Ver detalles</Link>
            </div>

        </div>

    )
}

export default DrinksRumComponent