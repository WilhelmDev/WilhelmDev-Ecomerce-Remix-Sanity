import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export default client = createClient({
    projectId: process.env.CLIENT_ID,
    dataset: 'production',
    useCdn: false,
    token: process.env.CLIENT_TOKEN,
    apiVersion: '2023-03-30'
})

export async function getRum() {
    const drinksRum = await client.fetch('*[_type == "drinks" && defined(drink_type == rum)]')
    return drinksRum
}


const builder = imageUrlBuilder(client)

export function urlFor(source) {
    return builder.image(source)
}
