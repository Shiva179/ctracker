import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

export default function App () {
    const [ data, setData ] = useState({});
    const [ country, setCountry ] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetchData();
            setData(response);
        }

        fetchAPI();        
    },[]);

    const handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        setCountry(country);
        setData(fetchedData)
        
    }

    return (
        <div className={styles.container}>
            <img className={styles.image} src='https://i.ibb.co/7QpKsCX/image.png' alt='COVID-19'></img>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange} />
            <Chart data={data} country={country} />
        </div>
    )
}