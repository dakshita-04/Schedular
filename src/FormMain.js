import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import {
  Form,
  SimpleItem,
  Label,
  GroupItem,
  ColCountByScreen,
  Item,
  EmptyItem,
} from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import notify from "devextreme/ui/notify";
import "devextreme-react/text-area";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import TextArea from "devextreme-react/text-area";
import Validator, {
  RequiredRule,
  NumericRule,
  EmailRule,
  StringLengthRule,
  PatternRule,
  RangeRule,
} from "devextreme-react/validator";
import { Popup } from "devextreme-react/popup";
import ValidationGroup from "devextreme-react/validation-group";
import { Link } from "react-router-dom";
import validator from 'validator'


const FormMain = () => {
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [addGuestEmail, setAddGuestEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enterOtp, setEnterOtp] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const namePattern = /^[^0-9]+$/;
  const phonePattern = /^[02-9]\d{9}$/;
  const phoneRules = {
    X: /[02-9]/,
  };
  // For Email Validation
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }
  
  const scheduleEvent = async (e) => {
    // e.preventDefault();
    if (
      fullName === "" ||
      email === "" ||
      phone === "" ||
      companyName === "" ||
      subject === ""
    ) {
      notify(
        {
          message: "Please fill all the fields",
          width: 300,
          // shading: true,
          // position: "center",
        },
        "error",
        500
      );
    } else {
      notify(
        {
          message:
            "Thanks for Scheduling a Meeting with us. You will receive a mail Shortly.",
          width: 600,
          shading: true,
          position: "center",
        },
        "success",
        1400
      );
      // refreshPage();
    }
  };

  function refreshPage() {
    setTimeout(window.location.reload(true), 1500);
  }
  return (
    <React.Fragment>
      <div
        style={{
          marginRight: "25px",
          marginLeft: "25px",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            marginBottom: "5px",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginTop: "25px",
              marginBottom: "22px",
            }}
          >
            Enter your Details
          </h3>
        </div>
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <ValidationGroup>
            <Form
              colCount={2}
              labelMode="floating"
              labelLocation="left"
              // onContentReady={validateForm}
              //label="Select the"
            >
              <GroupItem>
                <TextBox
                  label="Full Name"
                  labelMode="floating"
                  defaultValue={fullName}
                  onValueChanged={(e) => {
                    setFullName(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  <Validator>
                    <RequiredRule message="Name is required" />
                    <PatternRule
                      message="Do not use digits in the Name"
                      pattern={namePattern}
                    />
                    <StringLengthRule
                      message="Name must have at least 2 symbols"
                      min={2}
                    />
                  </Validator>
                </TextBox>
                <br />
                <TextBox
                  label="Email Address"
                  labelMode="floating"
                  defaultValue={email}
                  id="userEmail"
                  onChange={(e) => validateEmail(e)}
                  onValueChanged={(e) => {
                    setEmail(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                {emailError}
                  <Validator>
                    <RequiredRule message="Email is required" />
                    <EmailRule message="Email is invalid" />
                  </Validator>
                </TextBox>
              </GroupItem>
              <GroupItem>
                <TextBox
                  label="Company Name"
                  labelMode="floating"
                  defaultValue={companyName}
                  onValueChanged={(e) => {
                    setCompanyName(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  <Validator>
                    <RequiredRule message="Name is required" />
                    <PatternRule
                      message="Do not use digits in the Name"
                      pattern={namePattern}
                    />
                    <StringLengthRule
                      message="Name must have at least 2 symbols"
                      min={2}
                    />
                  </Validator>
                </TextBox>
                <br />
                <TextBox
                  label="Company URL"
                  labelMode="floating"
                  maskInvalidMessage="The url must have a correct format"
                  validationMessagePosition="left"
                  maskRules={phoneRules}
                  defaultValue={phone}
                  onValueChanged={(e) => {
                    setPhone(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  <Validator>
                    <PatternRule
                      message="The phone must have a correct USA phone format"
                      pattern={phonePattern}
                    />
                  </Validator>
                </TextBox>
                <br />
              </GroupItem>

              <GroupItem colSpan={2}>
                <TextArea
                  label="Subject"
                  labelMode="floating"
                  defaultValue={subject}
                  onValueChanged={(e) => {
                    setSubject(e.value);
                    console.log(e.value);
                  }}
                  height={90}
                >
                  <Validator>
                    <RequiredRule message="Subject is required" />
                    <StringLengthRule
                      message="Name must have at least 4 symbols"
                      min={4}
                    />
                  </Validator>
                </TextArea>
              </GroupItem>
            </Form>
          </ValidationGroup>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
        <Link to="./phoneAuthentication" style={{textDecoration:"none"}}> 
        <Button
        width={160}
        height={40}
        text="Schedule Event"
        type="default"
        stylingMode="contained"
        onClick={scheduleEvent}
      ></Button></Link>
         
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormMain;
