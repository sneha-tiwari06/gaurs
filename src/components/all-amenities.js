import React from 'react';
import $ from 'jquery';
import Gallery from './gallery';
import Amenities from './amenities';
import Goldcoast from './goldcoast';

function AllAmenities() {
  React.useEffect(() => {
    "use strict";
    $(".partnersBtn").click(function() {
        $(".partnersBtn.active").removeClass('active');
        $(this).addClass('active');
        $('.partners-container').hide();
        $("#partners-" + $(this).data('target')).stop().fadeIn('slow');
    });
  }, []);

  return (
    <div className='w-100 padding all-amenties'>
      <div className='container'>
      <div className="viewmore d-flex">
        <button className="button stroke partnersBtn active" data-target="gallery">Gallery</button>
        <button className="button stroke partnersBtn" data-target="amenities">Amenities</button>
        <button className="button stroke partnersBtn" data-target="goldcoast">Gold Coast</button>
      </div>

      <div id="partners-gallery" className="partners-container show">
        <Gallery />
      </div>
      
      <div id="partners-amenities" className="partners-container" style={{ display: 'none' }}>
        <Amenities />
      </div>

      <div id="partners-goldcoast" className="partners-container" style={{ display: 'none' }}>
        <Goldcoast />
      </div>
      </div>
    </div>
  );
}

export default AllAmenities;
