import { useLoaderData } from "@remix-run/react";
import { getRum } from "../../client";
import DrinksRumComponent from '~/components/drinksRumComponent'
import stylesRum from '~/styles/rumStyles.css'

export async function loader() {
  const drinks = await getRum()
  return drinks
}

export function links() {
  return [
      {
          rel:'stylesheet',
          href:stylesRum
      }
  ]
}

export default function Index() {
  const dataBottles = useLoaderData()
  return (
    <>
      <main className="contenedor">
      <h2 className="heading"> Coleccion </h2>
        { dataBottles.length && (
            <div className="rum-grid">
                {dataBottles.map (rumObj => (
                    <DrinksRumComponent
                    key={rumObj._id}
                    rumObj={rumObj}
                    />
                ))}
            </div>
        )}
      </main>
    </>
  );
}
