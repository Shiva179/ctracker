import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export default function App () {
    const [ data, setData ] = useState({});
    const [ country, setCountry ] = useState('India');

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetchData();
            setData(response);
        }

        fetchAPI();        
    },[]);

    return (
        <div className={styles.container}>
            <img className={styles.image} src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID-19'></img>
            <Cards data={data}/>
            <CountryPicker/>
            <Chart data={data} country={country} />
        </div>
    )
}