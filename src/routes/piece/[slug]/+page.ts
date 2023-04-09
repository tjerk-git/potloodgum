export const load = async ({ fetch, params }) => {

    const response = await fetch(`/api/${params.slug}`)
    const json = await response.json()

    return {
        json
    }
}