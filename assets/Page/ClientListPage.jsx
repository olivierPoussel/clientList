import React, { useEffect, useState } from 'react'
import { getClients } from '../Api/ClientApi'
import ClientList from '../Components/Client/ClientList'
import Footer from '../Components/Common/Footer'
import Header from '../Components/Common/Header'

export default function ClientListPage() {
    const [listClient, setlistClient] = useState([])

    useEffect(() => {
        callApi()
    }, [])

    const callApi = async () => {
        const clients = await getClients()
        setlistClient(clients)
    }
    return (
        <>
            <Header />
            <ClientList listClient={listClient} />
            <Footer />
        </>
    )
}
