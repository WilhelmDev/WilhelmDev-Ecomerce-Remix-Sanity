import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import {getDrink} from '~/models/bottles.server.js'
import stylesBottle from '~/styles/rumStyles.css'


export function links() {
  return [
      {
          rel:'stylesheet',
          href:stylesBottle
      }
  ]
}
export function meta({data}) {
  if(!data) {
    return{
      title:'Drinks Web - Bebida no encontrada',
      description:'Web drinks'
    }
  }
  return (
    {
        title: `Drinks Web - ${data[0].name}`
    }
)
}

export async function loader({params}) {
  const {drinkUrl} = params
  const drink = await getDrink(drinkUrl)
  if (drink.length === 0) {
    throw new Response('',{
      status: 404,
      statusText:'Bebida no encontrada'
    })
  }

  return drink
}

function DrinkUrl() {
  const {addToCart} = useOutletContext()
  const [quantity, setQuantity] = useState(0)
  const drink = useLoaderData()
  const {name, presentation, price, drink_type, drink_image_cloud, alcoholic_grade} = drink[0]
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (quantity < 1) {
      alert('Debe seleccionar una cantidad')
      return
    }

    const selectedBottle = {
      id: drink[0]._id,
      image: drink_image_cloud.url,
      name,
      price,
      quantity
    }

    addToCart(selectedBottle)
  }

  
  return (
    <main className="contenedor drink-rum">
      <img src={drink_image_cloud.url} alt={`${name}`} className="image" />
      <div className="contenido">
        <h3>{name}</h3>
        <p className="presentation">{presentation} Lt</p>
        <p className="price">{price} $</p>

        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor="quantity">Cantidad</label>

          <select name="quantity" id="quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          <input type="submit" value="Agregar Al Carrito" />
        </form>

      </div>
    </main>
  )
}

export default DrinkUrl