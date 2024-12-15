import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  MobileVerificationPage,
  OTPAuth,
  DocumentUploadPage,
} from "./Pages/pageIndex.js";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Toaster />
      <Analytics />
      <Routes>
        <Route path="/" element={<MobileVerificationPage />} />
        <Route path="/bikey" element={<HomePage />} />
        <Route path="/otp-verify" element={<OTPAuth />} />
        <Route path="/upload-document" element={<DocumentUploadPage />} />
      </Routes>
    </>
  );
}

export default App;
