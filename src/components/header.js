import React, { useState, useEffect } from 'react';
import $ from 'jquery';

function Header() {
  const [form, setForm] = useState({
    form_name: '',
    form_email: '',
    form_phone: '',
    form_message: '',
  });
  const [isTextVisible, setTextVisible] = useState(false);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
      $(this).toggleClass('open');
    });

    $('#nav-icon3').click(function () {
      $('.side-navigation').toggleClass('open');
      setFormVisible(true);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { form_name, form_email, form_phone, form_message } = form;

    if (form_name === '') {
      $('#spanid').text('Enter Your Name').css({ color: 'red' });
      $('#form_name').focus();
      return false;
    }
    if (form_email === '') {
      $('#spanid').text('Enter Your Email').css('color', 'red');
      $('#form_email').focus();
      return false;
    }
    if (!IsEmail(form_email)) {
      $('#spanid').text('Enter Your Correct Email').css({ color: 'red' });
      $('#form_email').focus();
      return false;
    }
    if (form_phone === '') {
      $('#spanid').text('Enter Your Mobile No.').css('color', 'red');
      $('#form_phone').focus();
      return false;
    }
    if (!IsPhone(form_phone)) {
      $('#spanid').text('Enter Your Correct Mobile No.').css('color', 'red');
      $('#form_phone').focus();
      return false;
    }
    if (form_message === '') {
      $('#spanid').text('Enter Your Requirements').css('color', 'red');
      $('#form_message').focus();
      return false;
    }

    $('#spanid').html('');
    $('#spanidbut').html('Processing...');

    $.ajax({
      url: 'ajaxcont.asp',
      type: 'POST',
      data: {
        form_name,
        form_email,
        form_phone,
        form_message,
      },
      cache: false,
      success: function (dataReceived) {
        setForm({
          form_name: '',
          form_email: '',
          form_phone: '',
          form_message: '',
        });
        setTimeout(function () {
          // navigate('/thankyou');
        }, 2000);
      },
      error: function () {
        $('#spanidbut').html('Error');
      },
    });
  };

  const IsEmail = (email) => {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  };

  const IsPhone = (phone) => {
    var regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const toggleNavbar = () => {
    setNavbarVisible(!isNavbarVisible);
  };
  const closeNavbar = () => {
    setNavbarVisible(false);
  };
  return (
    <div className='w-100 main'>
      <div className='header'>
        

        <div className='navbar'>
          <div className='navbar-overlay'></div>
          <div className='container '>
            <div className='nav-left'>
              <ul className={`list-inline d-none d-sm-flex`}>
                <li className='list-inline-item'>Home</li>
                <li className='list-inline-item'>Overview</li>
                <li className='list-inline-item'>Amenities</li>
                <li className='list-inline-item'>Specification</li>
              </ul>
            </div>
            <div className='logo'>
              <img src='https://ecis.in/gaurs-landing-page/assets/The-Island-Logo.png' alt='Logo' />
            </div>
            
            <div className='nav-right d-none d-sm-flex'>
              <ul className='list-inline'>
                <li className='list-inline-item'>Location</li>
                <li className='list-inline-item'>Construction Updates</li>
                <li className='list-inline-item'>Brochure</li>
                <li className='list-inline-item'>Contact Us</li>
              </ul>
            </div>
            <div className='menuBtn d-flex d-sm-none' onClick={toggleNavbar}>
              <div>
                <span id="menuLine1"></span>
                <span id="menuLine2"></span>
                <span id="menuLine3"></span>
              </div>
            </div>
          </div>
        </div>
            <div className='form-enquiry'>
          <div className={`sidebar-contact ${isFormVisible ? 'active' : ''}`}>
            <div className='sidebar toggle' onClick={() => setFormVisible(!isFormVisible)}>
              <i className='fa fa-envelope-o' aria-hidden='true'></i> Send Enquiry
            </div>
            {isFormVisible && (
              <div className='scroll'>
                <h3>SEND ENQUIRY</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='form_name'
                    id='form_name'
                    placeholder='Name'
                    value={form.form_name}
                    onChange={handleChange}
                  />
                  <input
                    type='email'
                    name='form_email'
                    id='form_email'
                    placeholder='Email'
                    value={form.form_email}
                    onChange={handleChange}
                  />
                  <input
                    type='tel'
                    name='form_phone'
                    id='form_phone'
                    placeholder='Phone Number'
                    value={form.form_phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name='form_message'
                    id='form_message'
                    placeholder='Message'
                    value={form.form_message}
                    onChange={handleChange}
                  ></textarea>
                  <span id='spanid'></span>
                  <span id='spanidbut' style={{ color: 'red' }}>
                    <input type='submit' value='SEND' />
                  </span>
                </form>
              </div>
            )}
          </div>
        </div>
       
      </div>
      <div className='banner'>
          <video src='https://ecis.in/gaurs-landing-page/assets/banner-vdo2.mp4' autoPlay loop muted playsInline />
          <div className='text-area text-center'>
          <h1>
            Welcome to <br />
            <span className="sub-head-text">
              {isTextVisible && (
                <>
                  {Array.from('The Gaurs Island').map((char, index) => (
                    <span key={index} style={{ opacity: 0, animation: `fadeIn 1s ${index * 0.1}s forwards` }}>
                      {char}
                    </span>
                  ))}
                </>
              )}
            </span>
          </h1>
        </div>
        </div>
    </div>
  );
}

export default Header;
