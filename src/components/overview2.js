import React, { useEffect } from 'react';
import './overview.css';

function Overview2() {
  

    return (
        <div className='w-100 padding overview2'>
            <div className='container main-content'>
                <div className='image-wrapper'>
                    <div className='left-img-overview'>
                        <img src='../assets/The-Island-Logo.png' alt='overview2' />
                    </div>
                    <div className='right-img-overview'>
                        <img src='../assets/1.png' alt='overview2' />
                    </div>
                </div>
                <div className='overlay-text'>
                    <h1 className='main-heading'>Unveiling A Life Of Living Apart</h1>
                    <p className='animated-text'>The Islands by Gaurs are made to indulge you in grandeur and understated elegance. Every facet of these bespoke residences have been designed with taste, made with nature, made just for you. It is a master piece of planning, execution and refinement, and is the result of almost 3 decades of committing ourselves to delivering excellence.</p>
                    <div className='sub-text'>
                    <p className='animated-text2'>EVERYTHING AT THE ISLANDS SETS THE GOLD STANDARD OF HIGH LIVING THAT TAKES SPECTACULAR NATURAL SETTINGS AND ELEVATES IT WITH LUXURY MADE FOR ONLY THE MOST EXCLUSIVE.</p>
                    <p className='animated-text2'>IT IS NAMED THE ISLANDS BECAUSE THERE IS NOTHING IN THE VICINITY THAT COMPARES TO THE INCREDIBLE, CURATED LIFESTYLE OF THOSE WHO LIVE INSIDE. IT IS AN OPTION AVAILABLE ONLY TO A FEW, AND A LIFE THAT EVEN FEWER WILL BE ABLE TO LIVE. THE ISLANDS, IS WHERE YOU LIVE APART IN EVERY FACET OF LIFE.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview2;
