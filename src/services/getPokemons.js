import { api } from './api'

export async function getPokemon(params) {
    if (params === undefined) {
        const response = await api.get(``)
        console.log(response.data)
        return response.data.results
    }
}
