import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  Link,

} from "@remix-run/react";
import Header from "~/components/header";
import stylesMain from '~/styles/index.css'
import stylesNormalice from '~/styles/normaliceCSS.css'
import Footer from "~/components/footer";
import { useEffect, useState } from "react";

export const meta = () => ({
  charset: "utf-8",
  title: "Drinks web - Remix/Graphql",
  viewport: "width=device-width,initial-scale=1",
});



export const links = () => ([
  {
    rel:'stylesheet',
    href: stylesNormalice
  },
  {
    rel: "preconnect", href:"https://fonts.googleapis.com"
  },
  {
    rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin: 'true'
  },
  {
    rel:"stylesheet",
    href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
  },
  {
    rel: 'stylesheet',
    href: stylesMain
  },
])


export default function App() {
  const cartLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null

  const [cart, setCart] = useState(cartLs)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  
  const addToCart = (bottle) => {
    if (cart.some(bottleState => bottleState.id === bottle.id)) {
      //change quantity
      const cartUpdated = cart.map( obj => {
        if(obj.id === bottle.id) {
          obj.quantity = bottle.quantity
        }
        return obj
      })
      setCart(cartUpdated)
    } else {
      //new register
      setCart([...cart, bottle])
    }
  }
  const updateQuantity = (bottle) => {
    const cartUpdated = cart.map((x) => {
      if (x.id === bottle.id) {
        x.quantity = bottle.quantity
      }
      return x
    })
    setCart(cartUpdated)
  }
  const deleteItem = (id) => {
    const cartUpdated = cart.filter( bottle => bottle.id !== id)
    setCart(cartUpdated)
  }
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
        <Outlet 
        context={{
          addToCart,
          cart,
          updateQuantity,
          deleteItem
        }}
        />
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
// error managment
export function CatchBoundary() {
  const error = useCatch()
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
        <p className="error"> {error.status} {error.statusText} </p>
        <Link className="error-link" to='/'> Tal vez quieras volver al inicio </Link>
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary({error}) {
  return ( 
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header/>
        <p className="error"> {error.status} {error.statusText} </p>
        <Link className="error-link" to='/'> Tal vez quieras volver al inicio </Link>
        <Footer/>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}