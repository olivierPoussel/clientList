import React from 'react'

export default function ClientList({ listClient }) {
    return (
        <div className='container d-flex flex-column align align-items-center'>
            <h2 className='mt-3'>Client index</h2>

            <table className="table table-hover mt-5">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listClient.map((client, index) => {
                            return (
                                <tr 
                                    key={client.id}
                                    className={index % 2 ? '' : 'table-primary'}
                                >
                                    <td>{client.id}</td>
                                    <td>{client.firstname}</td>
                                    <td>{client.lastname}</td>
                                    <td>{client.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
