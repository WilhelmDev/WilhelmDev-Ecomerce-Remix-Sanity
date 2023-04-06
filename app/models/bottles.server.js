export async function getDrink(url) {
    const drinkData = await client.fetch(`*[_type == "drinks" && url_product.current == '${url}']`)
    return drinkData
}