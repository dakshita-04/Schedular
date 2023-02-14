import React from "react";
import BootstrapCard from "./Image"
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSlot from "./TimeSlot";
import PhoneOtpMain from "./PhoneOtpMain";


export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<BootstrapCard />} />
    <Route path="/scheduleTime" element={<TimeSlot/>}/>
    <Route path="/scheduleTime/enterDetails" element={<Form />} />
    <Route path="/scheduleTime/enterDetails/phoneAuthentication" element={<PhoneOtpMain/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}
