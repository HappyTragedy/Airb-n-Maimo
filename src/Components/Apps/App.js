import React, { useState, useEffect } from "react";
import axios from 'axios';
import Moment from 'moment';
import 'bulma/css/bulma.min.css';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Filter from '../Filter/Filter';
import Main from '../Main/Main';

const App = () => {

  const [hotels, setHotels] = useState([]);
  const [hotelsFiltered, setHotelsFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date()
  const todayFormated = Moment(today).format("YYYY-MM-DD");
  const nextMonthFormated = Moment(today).add(1, "month").format("YYYY-MM-DD");

  const [filters, setFilters] = useState(
    {
      dateFrom: todayFormated,
      dateTo: nextMonthFormated,
      country: 'select',
      rooms: 'select',
      price: 'select'
    }
  )

  useEffect(() => {
    
    const getHotels = async () =>{

    try {
      setIsLoading(true)
      const hotelsFromApi = await axios.get(
        `https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica`
      );
      setHotels(hotelsFromApi.data);
      setHotelsFiltered(hotelsFromApi.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error del catch', error);
    }
    
    }

    getHotels()
  }, [])

  const handleFilter = ({dateFrom, dateTo, country, rooms, price}) => {
    return hotels.filter(hotel => 
      Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom && 
      Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo &&
      hotel.country === (country !== 'select' ? country : hotel.country) &&
      parseInt(hotel.price) === (price !== 'select' ? parseInt(price) : parseInt(hotel.price)) &&
      (parseInt(hotel.rooms) >= (rooms !== 'select' ? (rooms == 10 ? 0 : (rooms == 20 ? 10 : 20)) : parseInt(hotel.rooms)) &&
      parseInt(hotel.rooms) <= (rooms == 10 ? 10 : (rooms == 20 ? 20 : parseInt(hotel.rooms))))
      );
  };

  const onFilterChange = (payload) => {
    console.log("payload", payload);
    //Aplicar un filter para filtrar los hotels TODO
    const hotelsFilt = handleFilter(payload)

    setFilters((prevState) => ({
      ...prevState,
      ...payload,
    }));

    setHotelsFiltered(hotelsFilt)
  };

  return (
    <>
      <NavBar />
      <Filter filters={filters} onFilterChange={onFilterChange}/>
      <Main isLoading={isLoading} hotels={hotelsFiltered}/>
    </>
  );
}

export default App;
