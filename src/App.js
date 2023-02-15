import React from "react";
import BootstrapCard from "./Image"
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSlot from "./TimeSlot";
import PhoneOtpMain from "./PhoneOtpMain";
import SignupForm from "./demoEmail";
import VerifyPage from "./demoVerify";


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SignupForm/>}/>
    <Route path="/verify" element={<VerifyPage />}/>
     {/*<Route path="/" element={<BootstrapCard />} />*/}
    <Route path="/scheduleTime" element={<TimeSlot/>}/>
    <Route path="/scheduleTime/phoneAuthentication/" element={<PhoneOtpMain/>}/>
    <Route path="/scheduleTime/phoneAuthentication/enterDetails" element={<Form />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}
