import React, { useState } from "react";
 import './App.css';

function AddNumbers() {
  const [fv, setFv] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [lump, setLump] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleFVChange = (event) => {
    setFv(event.target.value);
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
    } else if(selectedOption === "Daily"){
      var pcntd = rate / 100;
    var powerd = Math.pow(1 + pcntd, time / 365);
    var amount1d = fv / powerd;
    var amountd = (Math.ceil(amount1d / 100) * 100).toLocaleString();
      sum = amountd;
    }

    setResult(sum);
  };

  return (
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


      <div className="container text-center">
        <div className="row" id="toptitle">
          <div className="col">
            <h4><span>BOC</span> Flex Smart Investment Account</h4>
          </div>
        </div>
        <h5>What is your Goal? </h5>
        <div className="row" id="myDIV">
          <div className="col">
            <button className="btn active">
              <img src="./assets/1.png" alt="" className="imageIcon" />
            </button>
            <p>Celebration</p>
          </div>
          <div className="col">
            <button className="btn">
              <img src="./assets/6.png" alt="" className="imageIcon" />
            </button>
            <p>Vacation</p>
          </div>
          <div className="col">
            <button className="btn">
              <img src="./assets/7.png" alt="" className="imageIcon" />
            </button>
            <p>Vehicle</p>
          </div>
          <div className="col">
            <button className="btn ">
              <img src="./assets/2.png" alt="" className="imageIcon" />
            </button>
            <p>Educational</p>
          </div>
          <div className="col">
            <button className="btn ">
              <img src="./assets/3.png" alt="" className="imageIcon" />
            </button>
            <p>Gadget</p>
          </div>
          <div className="col">
            <button className="btn ">
              <img src="./assets/4.png" alt="" className="imageIcon" />
            </button>
            <p>Kids</p>
          </div>
          <div className="col">
            <button className="btn">
              <img src="./assets/5.png" alt="" className="imageIcon" />
            </button>
            <p>Others</p>
          </div>
        </div>
        <h5>How much do you Need?</h5>
        <div className="row">
          {/* <label for="customRange2" class="form-label">Example range</label> */}
          <p>Range Value: {fv}</p>
          <input type="range" className="form-range"  min={100000} max={10000000} value={fv} id="customRange2" defaultValue={0} onChange={handleFVChange} />
        </div>
        <h5>When do you need to reach your Goal?</h5>
        <div className="row">
          <div className="col" id="middleRow1">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault"  checked={selectedOption === "Monthly"}
          onChange={handleOptionChange}id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                In Days
              </label>
            </div>
          </div>
          <div className="col" id="middleRow2">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" checked={selectedOption === "Monthly"}
          onChange={handleOptionChange} id="flexRadioDefault2" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                In Months
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <label for="customRange3" class="form-label">Example range</label> */}
          <p>Time Value: {time}</p>
          {/*<input type="range" className="form-range" min={0} max={60} step={1} value={time} onChange={handleTimeChange} />*/}
          <input type="range" className="form-range" min={0} max={60} step={1} value={time} onChange={handleTimeChange} defaultValue={60} />
        </div>
        <h5>What interest type do you prefer to apply?</h5>
        <div className="row">
          <div className="col" id="middleRow1">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefaults" value={rate} id="flexRadioDefaults1" />
              <label className="form-check-label" htmlFor="flexRadioDefaults1">
                Fixed Interest Rate
              </label>
            </div>
          </div>
          <div className="col" id="middleRow2">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefaults" id="flexRadioDefaults2" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefaults2">
                Floating Interest Rate
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" id="rowview">
            <span><b>Lumpsum Deposit?</b></span>
            <label className="switch">
              <input className="switch-input" type="checkbox" />
              <span className="switch-label" data-on="On" data-off="Off" />
              <span className="switch-handle" />
            </label>
          </div>
          <div className="col" id="rowview">                
            <label htmlFor="fname"><b>Lumpsum Amount (Rs.)</b></label>
            <input type="text" id="fname" name="fname" /><br /><br />             
          </div>
        </div>
        <div className="row" id="flexendcol">
          <h6><sup>*</sup>Condition Apply</h6>
        </div>
        <div className="row">
          <div className="col" id="lastbutton1">
            <h6>Save Monthly</h6>
            <h5>{result}</h5>
            
          </div>
          <div className="col" id="lastbutton2">
            <h6>Save Monthly</h6>
            <h5>Rs 205,000</h5>
          </div>
          <div className="col" id="lastbutton3">
            <a href>
              <h5>Apply Now</h5>
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddNumbers;
