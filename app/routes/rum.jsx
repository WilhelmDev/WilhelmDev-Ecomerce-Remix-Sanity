import { useLoaderData } from "@remix-run/react"
import DrinksRumComponent from "~/components/drinksRumComponent"
import { getRum } from "../../client"
import stylesRum from '~/styles/rumStyles.css'



export function meta() {
    return (
        {
            title: 'Drinks - Rum Colection'
        }
    )
}

export function links() {
    return [
        {
            rel:'stylesheet',
            href:stylesRum
        }
    ]
}


export async function loader(){
    const drinksRun = await getRum()
    return drinksRun
}

const Rum = () => {
    const drinksRum = useLoaderData()
    return (
        <main className="contenedor">
            <h2 className="heading"> Coleccion </h2>

            { drinksRum.length && (
                <div className="rum-grid">
                    {drinksRum.map (rumObj => (
                        <DrinksRumComponent
                        key={rumObj._id}
                        rumObj={rumObj}
                        />
                    ))}
                </div>
            )}

        </main>
    )
}

export default Rum