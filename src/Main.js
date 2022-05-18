import React from 'react';
import TilePicture from './images/Ellipse 11.png'
import { Send2, NotificationCircle, FormatSquare, Location, ArrowRight } from 'iconsax-react';
import listing7 from './images/listing-7.jpg'
import listing1 from './images/listing-1.png'
import listing8 from './images/listing-8.png'
import listing2 from './images/listing-2.png'
import listing3 from './images/listing-3.png'
import listing4 from './images/listing-4.png'
import listing5 from './images/listing-5.png'
import listing6 from './images/listing-6.png'
import './styles.css';

const Tile = (prop) => {
  return (
    <div className='tile'>
      <div className='tile-body'>
        <img src={prop.image} alt='' />
        <div className='tile-text'>
          <h2>{prop.price}</h2>
          <h3>{prop.title}</h3>
          <div className='tile-icons'>
            <p className='tile-location'><span><Location size="16" color="#212529"/></span> {prop.location}</p>
            <p className='tile-measurement'><span><FormatSquare size="16" color="#212529"/></span> {prop.measurement}</p>
          </div>
        </div>
      </div>
      <div className='tile-footer'>
        <div className='tile-footer-details'>
          <img src={TilePicture} alt='' />
          <span>{prop.company}</span> 
        </div>
        <div className='tile-footer-icons'>
          <Send2 size="16" color="#212529"/>
          <NotificationCircle size="16" color="#212529"/>
        </div>
      </div>
    </div>
  )
}

const Main = () => {
  const TopListings = [
    {
      image: listing7,
      price: '$3,000,000',
      title: '4 Bedroom Duplex',
      location: 'Maitama, Abuja',
      measurement: '2,400 Square Feets',
      company: 'ABC & Co. Properties Limited',
    },
    {
      image: listing8,
      price: '$490,000',
      title: '2 Bedrooms Bungalow With Garden',
      location: 'Ikeja, Lagos',
      measurement: '1,900 Square Feets',
      company: 'Fly Properties Limited'
    },
    {
      image: listing1,
      price: '$6,006,000',
      title: '5 Bedrooms Duplex with Swimming Pool...',
      location: 'Banana Island, Ikoyi, Lagos',
      measurement: '9,100 Square Feets',
      company: 'GreyBean Properties',
    }
  ]

  const NewListings = [
    {
      image: listing2,
      price: '$1,500,000',
      title: '4 Bedroom Terrace House For Sale',
      location: 'Wuse, Abuja',
      measurement: '3,305 Square Feets',
      company: 'Pro-Estate Realtor',

    },
    {
      image: listing3,
      price: '$620,000',
      title: 'Plots Of Land With Farm Produces For Sa...',
      location: 'Owerri, Imo',
      measurement: '2,000 Square Feets',
      company: 'Johnson Properties Limited',
    },
    {
      image: listing4,
      price: '$1,750,000',
      title: '5 Bedroom Semi Detached Duplex With...',
      location: 'Lekki, Lagos',
      measurement: '3,280 Square Feets',
      company: ' Best Properties & Co',
    },
    {
      image: listing5,
      price: '$2,200,000',
      title: 'Dry Land With Block Of Offices For Sale',
      location: 'Kano, Kano',
      measurement: '5,000 Square Feets',
      company: 'Ultimate Properties Limited',
    },
    {
      image: listing7,
      price: '$3,000,000',
      title: '4 Bedroom Duplex',
      location: 'Maitama, Abuja',
      measurement: '2,400 Square Feets',
      company: 'ABC & Co. Properties Limited',
    },
    {
      image: listing6,
      price: '$700,000',
      title: '4 Bedroom Semi Detached House',
      location: 'Port Harcourt, Rivers',
      measurement: '1,800 Square Feets',
      company: 'RealLand Properties',
    }         
  ]

  return (
    <div>
      <main className='main'>
        <section className='main-top-listing container section'>
          <div className='main-top-listing-title'>
            <h1>Top Listing</h1>
            <p>View All 116 Top Listings <span><ArrowRight size="16" color="#AE46FF"/></span></p>
          </div>
          <div className='main-top-listing-tile'>
            {
              TopListings.map((listing)=>(
                <Tile
                  image = {listing.image}
                  price = {listing.price}
                  title = {listing.title}
                  location = {listing.location}
                  measurement = {listing.measurement}
                  company = {listing.company}
                />
              ))
            }
          </div>
        </section>
        <section className='main-top-listing container section'>
          <div className='main-top-listing-title'>
            <h1>New Listing</h1>
            <p>View All 200 New Listings <span><ArrowRight size="16" color="#AE46FF"/></span></p>
          </div>
          <div className='main-top-listing-tile'>
            {
              NewListings.map((listing)=>(
                <Tile
                  image = {listing.image}
                  price = {listing.price}
                  title = {listing.title}
                  location = {listing.location}
                  measurement = {listing.measurement}
                  company = {listing.company}
                />
              ))
            }
          </div>
        </section>
        <section className='main-button'>
        <button className='btn main-btn'>Show More Property Listings <ArrowRight size="16" color="#FFF"/></button>
        </section>
      </main>
    </div>
  )
}

export default Main