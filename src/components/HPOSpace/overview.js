import React, { useState, useEffect } from 'react';
import './page.css';

import { Image } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import PageRoot from './pageRoot';
import SideMenu from './sideMenu';
import Profile from './profile';
import image from './hpoOverview.png';
import User from './user';
const HPOOverview = () => {
  return (
    <>
      <div className="header">
        <div className="rootbox">
          <PageRoot className="pageroot"></PageRoot>
        </div>
        <div className="profile">
          <Profile></Profile>
        </div>
      </div>
      <div className="body">
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="overviewContents">
          {/* <div className="user">
            <User></User>
          </div>
          <div className="hpoConfig">hpo config</div> */}
          <Image src={image} width="1557px" height="" />
        </div>
      </div>
    </>
  );
};

export default HPOOverview;
