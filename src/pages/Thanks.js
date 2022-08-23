import React, { useEffect, useState } from 'react';
import Seo from '@components/seo/seo';

import Layout from '@components/layout/layout';
import Container from '@components/ui/container';
import PageHeroSection from '@components/ui/page-hero-section';

import { BsFillPrinterFill } from 'react-icons/bs';

import DownloadApps from '@components/common/download-apps';

function Thanks() {
  let noData = '';

  useEffect(() => {
    localStorage.removeItem('borobazar-cart');
    console.log('Removesd: ', localStorage.getItem('borobazar-cart'));
    localStorage.removeItem('borobazar-cart');
  }, []);
  return (
    <>
      <Seo
        title="FAQ"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="faq"
      />

      {/* <PageHeroSection
        heroTitle="Congratulation, You Have successfully done your payment"
        className="faq-banner-area"
      /> */}
      {/* <Container>
        <div className="flex flex-col max-w-2xl py-12 mx-auto 2xl:max-w-4xl md:py-20">
        <div>Thanks</div>
        </div>
      </Container> */}
      {/* <DownloadApps /> */}
      <ThanksConponent />
    </>
  );
}

export default Thanks;

Thanks.Layout = Layout;

function ThanksConponent() {
  const [email, setEmail] = useState('nahid.muradabir@gmail.com');
  const [OrderNumber, setOrderNumber] = useState('sdfa56s4dfgas1gv6asdfgsda');
  return (
    <>
      <div className="thank_container container">
        <div className="row">
          <div className="col-6">
            <div className="header d-flex justify-content-between w-100">
              <h1>Thank you for your Order </h1>
              <BsFillPrinterFill className="icon_print" />
            </div>
            <div className="details w-100">
              <p>Confirmation Email: {email} </p>
              <p>Order Number: {OrderNumber}</p>
              <button>Go to Your Dashboard</button>
            </div>

            <div className="shipping_information">
              <h1>Shipping Information</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                perferendis, dolorum fugit error tempore veritatis voluptates
                doloribus sapiente incidunt! Quibusdam?
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 pt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
        </p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
        </p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          perferendis, dolorum fugit error tempore veritatis voluptates
          doloribus sapiente incidunt! Quibusdam? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum perferendis, dolorum fugit error
          tempore veritatis voluptates doloribus sapiente incidunt! Quibusdam?
        </p>
      </div>

      <DownloadApps />
    </>
  );
}
