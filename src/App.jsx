<<<<<<< HEAD
import React from 'react';
import { Route, Routes  } from 'react-router-dom';;
import {HomePage , MobileVerificationPage , OtpVerificationPage , DocumentUploadPage} from './Pages/PageIndex';
=======
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MobileVerificationPage from "./Pages/MobileVerificationPage";
import OtpVerificationPage from "./Pages/OTPAuth";
import DocumentUpload from "./Pages/DocumentUpload";
import { Toaster } from "react-hot-toast";
>>>>>>> 0a6f5cb (update code structure, ui, otp toast message)
function App() {
  return (
    <>
      <Toaster />
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<MobileVerificationPage />} />
        <Route path='/Home' element={<HomePage />} />
        <Route path='/otp-verify' element={<OtpVerificationPage />} />
        <Route path='/upload-document' element={<DocumentUploadPage />} />
=======
        <Route path="/" element={<MobileVerificationPage />} />
        <Route path="/bikey" element={<HomePage />} />
        <Route path="/otp-verify" element={<OtpVerificationPage />} />
        <Route path="/upload-document" element={<DocumentUpload />} />
>>>>>>> 0a6f5cb (update code structure, ui, otp toast message)
      </Routes>
    </>
  );
}

export default App;
