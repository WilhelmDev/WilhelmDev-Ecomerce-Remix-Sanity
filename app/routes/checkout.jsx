import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
import stylesCarrito from '~/styles/checkout.css'

export function links() {
    return [
        {
            rel:'stylesheet',
            href:stylesCarrito
        }
    ]
}
export function meta() {
    return (
        {
            title: 'Drinks Web - Carrito'
        }
    )
}

export default function Checkout() {
    const [total, setTotal] = useState(0)
    const { cart, updateQuantity, deleteItem } = useOutletContext()

    useEffect(() => {
        const calcTotal = cart.reduce((acc, el) => acc + (el.quantity * el.price), 0 )
        setTotal(calcTotal)
    }, [cart])
    
    
    

    return (
        <ClientOnly fallback={'cargando...'}>
            {()=> (
                <main className="contenedor">
                <h1 className="heading"> Carrito de compras</h1>

                <div className="contenido">
                    <div className="cart">
                        <h2>Articulos</h2>
                            {cart?.length === 0 ? 'Carrito Vacio' : (
                                cart?.map( product => (
                                    <div key={product.id} className='product'>
                                        <div>
                                            <img src={product.image} alt={`img ${product.name}`} />
                                        </div>
                                        <div>
                                            <p className='name'>{product.name}</p>
                                            <p>Cantidad</p>
                                            <select className='select' name="selectQuantity" id="selectQuantity" 
                                            value={product.quantity}
                                            onChange={(e) => updateQuantity({
                                                quantity: Number(e.target.value),
                                                id: product.id
                                            }) }
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                            </select>
                                            <p className="price">{product.price} $</p>
                                            <p className="subtotal">Subtotal: <span>{product.quantity * product.price}</span> $</p>
                                        </div>
                                        <button className='btn_delete' type='button'
                                        onClick={() => deleteItem(product.id)} >
                                            X
                                        </button>
                                    </div>
                                ))
                            )}


                    </div>

                    <aside className="resumen">
                        <h3>Resumen del Pedido</h3>
                        <p>Total a pagar {total} $</p>
                    </aside>
                </div>

                
                </main>
            )}
            
        </ClientOnly>
    )
}
