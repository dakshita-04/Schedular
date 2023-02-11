import React from "react";
import BootstrapCard from "./Image"
import Form from "./Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSlot from "./TimeSlot";
import PhoneOtp from "./PhoneOtp";
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from "./PhoneAuth";


export default function App() {
  // const [user] = useAuthState(auth);
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<BootstrapCard />} />
    <Route path="/scheduleTime" element={<TimeSlot/>}/>
    <Route path="/scheduleTime/enterDetails" element={<Form />} />
    <Route path="/scheduleTime/enterDetails/phoneAuthentication" element={<PhoneOtp/>}/>
  
    </Routes>
  </BrowserRouter>
    </div>
  );
}
