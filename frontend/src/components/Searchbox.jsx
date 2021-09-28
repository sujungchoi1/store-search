import React, { useEffect, useState } from 'react';
// import { FormControl, Button, Input } from '@mui/material';
import {Form, Button, Input} from 'semantic-ui-react';
import axios from 'axios';

const Searchbox = (props) => {

    const [store, setStore] = useState([]);
    const [search, setSearch] = useState('');

    // const getStores = () => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
    //         .then(response => {
    //             setStore(response.data.results);
    //             console.log(response);
    //         });
    // };

       // to fetch from backend
    const getStores = (search) => {
        axios.post(`http://localhost/backend/stores/`, search)  // POST http://localhost:5004/backend/stores/ net::ERR_CONNECTION_REFUSED
            .then(response => {
                // setStore(response.data.data);
                setStore(response.data);
                console.log(response);
            }) 
            .catch(err=>console.log("Error: ", err))           
    }
    // const getStores = () => {
    //     axios.get(`http://localhost:5004/backend/stores/`)
    //         .then(response => {
    //             // setStore(response.data.data);
    //             setStore(response.data.stores);
    //             console.log(response);
    //         }) 
    //         .catch(err=>console.log("Error: ", err))           
    // }

    const handleChange = (e) => {
        console.log(search)
        setSearch(e.target.value)
        getStores();
    }

    const fileteredStores= store.filter(
        s => s.name.toLowerCase().includes(search.toLowerCase()) 
            // || s.tags.toLowerCase().includes(search.toLowerCase())              
        );

    return (
        <div className="wrapper">
                {/* <SearchBox /> */}
                <h2>Search Store</h2>
                    <Input
                        name='name'
                        value={search}
                        onChange={handleChange}
                    />
                    {/* <Button onClick={searchStores} className="ui red basic button">SEARCH</Button> */}

                    {/* list gets hidden by the search history */}
                    <div style={{ "backgroundColor": "beige", "width": "300px", "height": "250px" }}></div>

                <ul>
                    {fileteredStores.map((value, index) => {
                        return (              
                            <li key={index} >{value.name}</li>
                        )
                    })}
                </ul>


       </div>

    )
}

export default Searchbox;