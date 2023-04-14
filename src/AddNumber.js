/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";

// theme css file

import {
  addDays,
  endOfDay,
  startOfDay,
  startOfMonth,
  endOfMonth,
  addMonths,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays,
} from 'date-fns';


function AddNumbers() {
  const [days, setDays] = useState(0);
  const [end, endRef] = useState();
  const [fv, setFv] = useState(100000);
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [lump, setLump] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [onoffswitch, setonoffswitch] = useState(false);
  const [visibility, setvisibility] = useState("hidden");
  const [topping, setTopping] = useState("Daily")
  const [datepick, setdatepick] = useState("inline");
  const [monthpick, setmonthpick] = useState("none")
  const [fvs, setFvs] = useState();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  const onOptionChange = e => {
    setTopping(e.target.value)
    if (topping === "Monthly") {
      setdatepick("inline");
      setmonthpick("none")
    } else {
      setdatepick("none");
      setmonthpick("inline")
    }
  }
  const datarenge = "";
  const handleFVChange = (event) => {
    setFv(event.target.value);
    // setFvs(fv);
    // var pattern = /(-?\d+)(\d{3})/;
    // while (pattern.test(fvs))
    //   fvs = fvs.replace(pattern, "$1,$2");
    // setFv = fvs;
    // setFv(fvs);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const handleLumpChange = (event) => {
    setLump(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setTopping(event.target.value)
    if (topping === "Monthly") {
      setdatepick("inline");
      setmonthpick("none")
    } else {
      setdatepick("none");
      setmonthpick("inline")
    }
  };

  const handleCalculation = (event) => {
    event.preventDefault();
    var sum = 0;
    if (selectedOption === "Monthly") {
      var pcnt = rate / 1200;
      var power = Math.pow(1 + pcnt, time);
      var lumpamt = lump * power;
      var amount1 = power - 1;
      var amount2 = (1 + pcnt) / pcnt;
      var amount3 = (fv - lumpamt) / (amount1 * amount2);
      var amount = (Math.ceil(amount3 / 100) * 100).toLocaleString();
      sum = amount;
    } else if (selectedOption === "Daily") {
      var pcntd = rate / 100;
      var powerd = Math.pow(1 + pcntd, time / 365);
      var amount1d = fv / powerd;
      var amountd = (Math.ceil(amount1d / 100) * 100).toLocaleString();
      sum = amountd;
    }

    setResult(sum);
  };
  const switchToggle = () => {
    setonoffswitch(!onoffswitch);
    if (onoffswitch === false) {
      setvisibility("visible");
    } else {
      setvisibility("hidden");
    }
    console.log(visibility);
    console.log(onoffswitch);
    // console.log("helofuv");
  };
  function claculateDate() {
    console.log(start);
    console.log(end);
  }
  function calculateDays() {
    var d1 = document.getElementById("d1").value;
    var d2 = document.getElementById("d2").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    document.getElementById("output").innerHTML = days;
  }
  useEffect(() => {
    return () => {
      setvisibility("visible");
      setonoffswitch(false);
      setFv(100000);
      setTime(0);
      console.log(value);
      setdatepick("none");
      setmonthpick("inline");
      // setdatepick('none');
      // setmonthpick("inline")
      setDays(0);
    };
  }, []);

  return (
    <div className="background">

      <form onSubmit={handleCalculation}>
        <label>
          fv:
          <input type="number" value={fv} onChange={handleFVChange} />
        </label>
        <label>
          rate:
          <input type="number" value={rate} onChange={handleRateChange} />
        </label>
        <label>
          time:
          <input type="number" value={time} onChange={handleTimeChange} />
        </label>
        <label>
          lump:
          <input type="number" value={lump} onChange={handleLumpChange} />
        </label>
        <label>
          <input
            type="radio"
            value="Daily"
            checked={selectedOption === "Daily"}
            onChange={handleOptionChange}
          />
          Daily
        </label>
        <label>
          <input
            type="radio"
            value="Monthly"
            checked={selectedOption === "Monthly"}
            onChange={handleOptionChange}
          />
          Monthly
        </label>
        <button type="submit">Add</button>
        {result && <p>Result: {result}</p>}
      </form>

      <div className="container text-center">
        <div className="row" id="toptitle">
          <div className="col">
            <h4>
              <span>BOC</span> Flex Smart Investment Account
            </h4>
          </div>
        </div>
        <h5>What is your Goal? </h5>
        <div className="row mainMid">
          <div className="row" id="myDIV">
            <div className="col cent">
              <button className="btn active">
                <img src={one} alt="" className="imageIcon" />
              </button>
              <p>Celebration</p>
            </div>
            <div className="col cent">
              <button className="btn">
                <img src={two} alt="" className="imageIcon" />
              </button>
              <p>Vacation</p>
            </div>
            <div className="col cent">
              <button className="btn">
                <img src={three} alt="" className="imageIcon" />
              </button>
              <p>Vehicle</p>
            </div>
            <div className="col cent">
              <button className="btn ">
                <img src={four} alt="" className="imageIcon" />
              </button>
              <p>Educational</p>
            </div>
            <div className="col cent">
              <button className="btn ">
                <img src={five} alt="" className="imageIcon" />
              </button>
              <p>Gadget</p>
            </div>
            <div className="col cent">
              <button className="btn ">
                <img src={six} alt="" className="imageIcon" />
              </button>
              <p>Kids</p>
            </div>
            <div className="col cent">
              <button className="btn">
                <img src={seven} alt="" className="imageIcon" />
              </button>
              <p>Others</p>
            </div>
          </div>
          <h5>How much do you Need? Rs</h5>

          <div className="row">
            {/* <label for="customRange2" class="form-label">Example range</label> */}
            {/* <p>Range Value: {fv}</p>
            <input type="range" className="form-range" min={100000} max={10000000} value={fv} id="customRange2" defaultValue={0} onChange={handleFVChange} /> */}
            <input
              type="range"
              list="values"
              min={100000}
              max={10000000}
              value={fv}
              id="customRange2"
              defaultValue={0}
              onChange={handleFVChange}
              step={100000}
            />

            <datalist id="values">
              <option value="0" label="100k"></option>
              <option value="10" label="10000k"></option>
              <option value="20" label="20000k"></option>
              <option value="30" label="30000k"></option>
              <option value="40" label="40000k"></option>
              <option value="50" label="50000k"></option>
              <option value="60" label="60000k"></option>
              <option value="70" label="70000k"></option>
              <option value="80" label="80000k"></option>
              <option value="90" label="90000k"></option>
              <option value="100" label="100000k"></option>
            </datalist>
            <p id="valueDisplay">
              <input
                type="text"
                name=""
                id=""
                value={fv}
                onChange={handleFVChange}
                className="inputfeild_range datepickerinput"
              />
            </p>
          </div>
          <h5>When do you need to reach your Goal?</h5>
          <div className="row">
            <div className="col" id="middleRow1">
              {/* <label for="birthdaytime">Birthday (date and time):</label>
              <input type="datetime-local" id="birthdaytime" name="birthdaytime"> */}
              <label htmlFor="regular" className="form-check-label">
                {/* <input
                  type="radio"
                  name="topping"
                  value="Days"
                  id="days"
                  checked={topping === "Days"}
                  onChange={onOptionChange}
                /> */}
                <input
                  type="radio"
                  value="Daily"
                  name="topping"
                  checked={topping === "Daily"}
                  onChange={handleOptionChange}
                />
                In Days</label>
            </div>
            <div className="col" id="middleRow2">
              <label htmlFor="month" className="form-check-label">
                {/* <input
                  type="radio"
                  name="topping"
                  value="Month"
                  id="month"
                  checked={topping === "Month"}
                  onChange={onOptionChange}

                /> */}
                <input
                  type="radio"
                  value="Monthly"
                  name="topping"
                  checked={topping === "Monthly"}
                  onChange={handleOptionChange}
                />
                In Month</label>
            </div>
          </div>

          <div className="" id="row"
            style={{
              display: datepick
            }}>


            <div className="col" id="dateRange">
              <input type="date" id="d1" className="datepickerinput" />
              <input type="date" id="d2" className="datepickerinput" />
              <button onClick={calculateDays} className="datepickerinput">Number of Days</button>
            </div>
            <div className="col" id="dateRanges">


              <p className="days"><sapn id="output"></sapn> Days</p>
            </div>

          </div>


          <div className="row" style={{
            display: monthpick
          }}>
            {/* <label for="customRange3" class="form-label">Example range</label> */}
            {/* <p>Time Value: {time}</p> */}
            {/*<input type="range" className="form-range" min={0} max={60} step={1} value={time} onChange={handleTimeChange} />*/}
            {/* <input type="range" className="form-range" min={0} max={60} step={1} value={time} onChange={handleTimeChange} defaultValue={60} /> */}
            <input
              type="range"
              list="values"
              min={0}
              max={60}
              step={3}
              value={time}
              onChange={handleTimeChange}
              defaultValue={60}

            />

            <datalist id="values">
              <option value="0" label="0"></option>
              <option value="10" label="6"></option>
              <option value="20" label="12"></option>
              <option value="30" label="18"></option>
              <option value="40" label="24"></option>
              <option value="50" label="30"></option>
              <option value="60" label="36"></option>
              <option value="70" label="42"></option>
              <option value="80" label="48"></option>
              <option value="90" label="54"></option>
              <option value="100" label="60"></option>
            </datalist>
            <p id="valueDisplay">
              <input type="text" name="" id="" value={time} className="inputfeild_range datepickerinput" />
            </p>
            <h5>What interest type do you prefer to apply?</h5>
            <div className="row">
              <div className="col" id="middleRow1">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    value={rate}
                    id="flexRadioDefaults1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefaults1"
                  >
                    Fixed Interest Rate
                  </label>
                </div>
              </div>

              <div className="col" id="middleRow2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefaults"
                    id="flexRadioDefaults2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefaults2"
                  >
                    Floating Interest Rate
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col" id="rowview">
                <span>
                  <b>Lumpsum Deposit?</b>
                </span>
                <label className="switch">
                  <input
                    className="switch-input"
                    type="checkbox"
                    onClick={switchToggle}
                  />
                  <span className="switch-label" data-on="On" data-off="Off" />
                  <span className="switch-handle" />
                </label>
              </div>
              <div
                className="col"
                id="rowview"
                style={{ visibility: visibility }}
              >
                <sapn htmlFor="fname">
                  <b>Lumpsum Amount (Rs.)</b>
                </sapn>
                <input type="text" id="fname" name="fname" />
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col"><label htmlFor=""> Rate : </label>
              <input
                type="number"
                min={0}
                max={100}
                className="datepickerinput"
              /></div>


          </div>
        </div>

        <div className="row" id="flexendcol">
          <h6>
            <sup>*</sup>Condition Apply
          </h6>
        </div>
        <div className="row">
          <div className="col" id="lastbutton1">
            <h6>Save Monthly</h6>
            <h5>{result}</h5>
          </div>

          <div className="col" id="lastbutton3">
            <a href>
              <h5>Apply Now</h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNumbers;
