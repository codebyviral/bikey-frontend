import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  MobileVerificationPage,
  OtpVerificationPage,
  DocumentUploadPage,
} from "./Pages/PageIndex";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<MobileVerificationPage />} />
        <Route path="/bikey" element={<HomePage />} />
        <Route path="/otp-verify" element={<OtpVerificationPage />} />
        <Route path="/upload-document" element={<DocumentUploadPage />} />
      </Routes>
    </>
  );
}

export default App;
