import { api } from './api'

export async function getPokemon(params) {
    if (params === undefined) {
        const response = await api.get(``)
        return response.data.results
    }
}
