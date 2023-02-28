const BASE_URL = '' //A mettre dans les variables d'env
const API_GET_CLIENT = BASE_URL + '/client'

export const getClients = async () => {
    const call = await fetch(API_GET_CLIENT)
    const clients = await call.json()

    return clients
}