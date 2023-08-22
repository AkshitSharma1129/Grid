import React, { useState } from "react";
import './Landing.css';
import land from '../../asset/brand/man2.png';
import { Button } from "@mui/material";
import Modal from '../Search/Modal';

const Landing = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return ( 
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3 className="landing__header__discount">UP TO 35% DISCOUNT</h3>
          <h1 className="landing__header__main">Unveiling Your Perfect Look</h1>
          <Button
            variant='outlined'
            sx={[
              { width: '190px', height: '50px', borderRadius: '20px', fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' },
              { '&:hover': { backgroundColor: "black", color: "#FFE26E", borderColor: 'black' } }
            ]}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            GENERATE OUTFIT
          </Button>
        </div>
      </div>
      <div className="landing__image__container">
        <img className="landing__image" src={land} alt=""/>
      </div>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} funcs={props.func} />
      )}
    </div>
  );
};

export default Landing;
