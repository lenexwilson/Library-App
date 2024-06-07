import React, { useState } from 'react'
import Navbar from './Navbar'

const OverAll = () => {
    const [data, changeData] = useState([
        { "Title": "World", "Author": "Manu", "Publisher": "kk", "Price": 1234 },
        { "Title": "World", "Author": "Sanu", "Publisher": "uu", "Price": 3456 },
        { "Title": "World", "Author": "Tanu", "Publisher": "hh", "Price": 1234 },
        { "Title": "World", "Author": "Hanu", "Publisher": "gg", "Price": 1234 }
    ])
    return (
        <div>
            <Navbar />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(
                            (value, index) => {
                                return <tr>
                                    <th scope="row">{value.Title}</th>
                                    <td>{value.Author}</td>
                                    <td>{value.Publisher}</td>
                                    <td>{value.Price}</td>
                                </tr>
                            }
                        )
                    }


                </tbody>
            </table>
        </div>
    )
}

export default OverAll