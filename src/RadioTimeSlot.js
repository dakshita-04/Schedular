import React from 'react';
import RadioGroup from 'devextreme-react/radio-group';
import { priorities, priorityEntities, tasks } from './timeData';
import image from "./QIT Logo.png";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./ImageMain";
import { Link } from "react-router-dom";
// import Button from "devextreme-react/button";
import Button from '@mui/material/Button';
import "./timeslot.css";
import { useNavigate } from 'react-router-dom';


class RadioTimeSlot extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {
      colorPriority: priorities[2],
      selectionPriority: priorityEntities[0].id,
    };

    this.changeColorPriority = this.changeColorPriority.bind(this);
    this.changeSelectionPriority = this.changeSelectionPriority.bind(this);
  }
 
  render() {
    // const navigate = useNavigate();
    return (
        <div>
      <Card>
        <div className="Container">
          <div className="row">
            <div className="col-md-5">
              
                <FaArrowLeft
                  style={{
                    fontSize: "25px",
                    color: "#337AB7",
                    marginLeft: "30px",
                    marginBottom: "-30px",
                  }}
                //   onClick={() => navigate(-1)}
                />
              
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
              <div className="form">
              <div className="dx-fieldset">
                <div className="dx-field">
                  <div className="dx-field-label"></div>
                  <div className="dx-field-value">
                    <RadioGroup items={priorities} defaultValue={priorities[0]} />
                  </div>
                </div>
               
                
              </div>
              
            </div>
              <br/>
              <Link to="./phoneAuthentication" style={{textDecoration:"none"}}>
              <Button variant="contained" style={{marginTop:"30px",width:"200px",height:"40px",backgroundColor:"#337AB7",fontSize:"15px"}}
              
              >Submit</Button>
              
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
   
    );
  }

  changeColorPriority(e) {
    this.setState({
      colorPriority: e.value,
    });
  }

  changeSelectionPriority(e) {
    this.setState({
      selectionPriority: e.value,
    });
  }
}

function renderCustomItem(data) {
  return <div>{data}</div>;
}

export default RadioTimeSlot;
