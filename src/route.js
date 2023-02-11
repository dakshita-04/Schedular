import React from "react";
import { Route, Switch } from "react-router-dom";
import BootstrapCard from "./Image"
import Form from "./Form";
import TimeSlot from "./TimeSlot";
import PhoneOtp from "./PhoneOtp";

const routes = [
    {
      path: "/",
      component: BootstrapCard
    },
    {
      path: "/enterDetails",
      component: Form
    },
    {
      path: "/scheduleTime",
      component: TimeSlot
    },
    {
        path: "/phoneAuthentication",
        component: PhoneOtp
      }
  ];


  export default routes;