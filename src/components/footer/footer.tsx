"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import './footer.css';
import {State} from "../../store/types";

const Footer: React.FC = () => {
  const language: string = useSelector((state: State) => state.language);

  return (
    <>
      <div className="footer">
        <footer>
          {language === 'en' && <h3>All Rights Reserved &copy; Digifly 2024</h3>}
          {language === 'ar' && <h3>جميع الحقوق محفوظة &copy; ديجي فلاي 2024</h3>}
        </footer>
      </div>
    </>
  );
};

export default Footer;