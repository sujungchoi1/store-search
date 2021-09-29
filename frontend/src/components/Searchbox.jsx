import React, { useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import axios from 'axios';
import StoreList from './StoreList';
import '../App.css';

const Searchbox = (props) => {

    const [store, setStore] = useState([]);
    const [search, setSearch] = useState('');

    const getStores = (search) => {
        axios.post("http://localhost/backend/stores/", { searchStr: search })
            .then(response => {
                setStore(response.data.stores);
                console.log(response.data.stores);
            })
            .catch(err => console.log("Error: ", err))
    }
    const handleChange = (e) => {
        const searchStr = e.target.value;
        
        if (searchStr === "") setStore([])
        else getStores(searchStr);
    }

    return (
        <div className="box-wrapper">
            <div className="search-box">
                <div className="searchbox-label">
                    <h1>Search Store</h1> <Icon name="search" size="big" color="green" />
                </div>
                <Input
                    className="input-box"
                    name='name'
                    type='text'
                    placeholder='Enter a store name ex) buffalo'
                    onChange={handleChange}
                />
            </div>

            <StoreList store={store} />

        </div>

    )
}

export default Searchbox