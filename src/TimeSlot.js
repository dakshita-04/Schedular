import React from "react";
import image from "./QIT Logo.png";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./ImageMain";
import { Link } from "react-router-dom";
// import Button from "devextreme-react/button";
import Button from '@mui/material/Button';
import "./timeslot.css";


const TimeSlot = () => {
    // let navigate = useNavigate();
  return (
    <div>
      <Card>
        <div className="Container">
          <div className="row">
            <div className="col-md-5">
              <Link to="/">
                <FaArrowLeft
                  style={{
                    fontSize: "25px",
                    color: "#337AB7",
                    marginLeft: "30px",
                    marginBottom: "-30px",
                  }}
                />
              </Link>
              <img
                src={image}
                alt=""
                style={{
                  width: "200px",
                  marginLeft: "60px",
                  marginTop: "30px",
                }}
              />
              <hr />
              <div style={{ marginLeft: "30px", paddingBottom: "5px" }}>
                <h3 style={{ fontWeight: 700 }}>
                  Discovery Call with Quantum IT
                </h3>

                <div style={{ marginTop: "30px" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#737373",
                    }}
                  >
                    {" "}
                    <FaClock
                      style={{ fontSize: "15px", marginRight: "10px" }}
                    />
                    30 min
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#737373",
                    }}
                  >
                    {" "}
                    <FaVideo
                      style={{ fontSize: "15px", marginRight: "10px" }}
                    />
                    Web conferencing details provided upon confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginTop: "25px",
                  marginBottom: "22px",
                }}
              >
                Select a Time Slot
              </h3>
              <div style={{marginBottom:"50px"}}>
              <button className="button button2" >7:00 pm</button>
              <button className="button button2" >7:00 pm</button>
              <br/>
              <button className="button button2" >7:00 pm</button>
              <button className="button button2" >7:00 pm</button>
              <br/>
              <button className="button button2" >7:00 pm</button>
              <button className="button button2" >7:00 pm</button>
              <br/>
              <button className="button button2" >7:00 pm</button>
              <button className="button button2" >7:00 pm</button>
              <br/>
              <button className="button button2" >7:00 pm</button>
              <button className="button button2" >7:00 pm</button>
              <br/>
              <Link to="./enterDetails/">
              <Button variant="contained" style={{marginTop:"30px",width:"200px",height:"40px",backgroundColor:"#296293",fontSize:"15px"}}
              
              >Submit</Button>
              
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default TimeSlot;