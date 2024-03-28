import React, { useState, useRef, useEffect } from "react";
import "./Contact.css"; // Import your CSS file for styling
import img from "../assets/img/9.jpg";
import Footer from "./Footer";
import img1 from "../assets/img/pen.png";
const Contact = () => {
  const initialFormData = {
    clientName: "",
    phoneNumber: "",
    photographerName: "",
    photographerPhoneNo: "",
    selectDate: "",
    cityName: "",
    selectedOption: "",
    advanceAmount: "",
    pendingAmount: "",
    cashcollectedby: "",
    paymentMode: "",
    paidamount: "",
    knowaboutlocation: "",
    agreeTerms: "",
    visitorsCount: "",
    carCount: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    clientName: "",
    phoneNumber: "",
    photographerName: "",
    photographerPhoneNo: "",
    selectDate: "",
    cityName: "",
    selectedOption: "",
    advanceAmount: "",
    pendingAmount: "",
    cashcollectedby: "",
    paymentMode: "",
    paidamount: "",
    knowaboutlocation: "",
    agreeTerms: "",
    visitorsCount: "",
    carCount: "",
  });

  const [responseData, setResponseData] = useState(null); // Initialize responseData state
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === "clientName" && /\d/.test(value)) {
      setErrors({
        ...errors,
        clientName: "Client Name should not contain numbers.",
      });
    } else {
      setErrors({ ...errors, clientName: "" });
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, phoneNumber: "" });
      setFormData({ ...formData, phoneNumber: value });
    } else {
      setErrors({
        ...errors,
        phoneNumber:
          "Phone number should only contain digits and be up to 10 characters.",
      });
    }
  };

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === "photographerName" && /\d/.test(value)) {
      setErrors({
        ...errors,
        photographerName: "Photographer Name should not contain numbers.",
      });
    } else {
      setErrors({ ...errors, photographerName: "" });
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNumberChange2 = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, photographerPhoneNo: "" });
      setFormData({ ...formData, photographerPhoneNo: value });
    } else {
      setErrors({
        ...errors,
        photographerPhoneNo:
          "Phone number should only contain digits and be up to 10 characters.",
      });
    }
  };

  const handleDateChange = (e) => {
    const selectDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectDate >= currentDate) {
      setFormData({ ...formData, selectDate: e.target.value });
      setErrors({ ...errors, selectDate: "" }); // Clear any previous errors
    } else {
      setErrors({
        ...errors,
        selectDate: "Please select a date from today or Onwards.",
      });
    }
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    console.log("Selected value:", value);

    if (value !== "") {
      setErrors({ ...errors, knowaboutlocation: "" });
      setFormData({ ...formData, knowaboutlocation: value });
    } else {
      setErrors({
        ...errors,
        knowaboutlocation: "Please select ",
      });
    }
  };

  const handleCityChange = (e) => {
    const { name, value } = e.target;

    // Validate that the clientName does not contain numbers
    if (name === "cityName" && /\d/.test(value)) {
      setErrors({
        ...errors,
        cityName: "City Name should not contain numbers.",
      });
    } else {
      setErrors({ ...errors, cityName: "" });
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlepackage = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, selectedOption: "Please select a package." });
    } else {
      setFormData({ ...formData, selectedOption: value });
    }
  };

  const handleAdvanceAmount = (e) => {
    const value = e.target.value;
    const selectedPackagePrice = {
      option1: 2500,
      option2: 2500,
      option3: 4000,
      // Add more options as needed
    };

    if (formData.selectedOption === "") {
      setErrors({ packageError: "Please select a package first." });
    } else if (value === "") {
      // If the advance amount is cleared, reset the pending amount
      setFormData({ ...formData, advanceAmount: "", pendingAmount: "" });
    } else if (/^\d*$/.test(value) && value.length <= 10) {
      const packagePrice = selectedPackagePrice[formData.selectedOption];
      if (parseInt(value) > packagePrice) {
        setErrors({
          advanceError:
            " Advance amount cannot be greater than the package price.",
        });
        // Optionally, you can clear the field or handle it differently here
      } else {
        const pending = packagePrice - value;
        setFormData({
          ...formData,
          advanceAmount: value,
          pendingAmount: pending >= 0 ? pending : 0,
        });
        setErrors({});
      }
    } else {
      setErrors({
        characterError:
          "Character not allowed. Advance Amount should have to pay 50% of package.",
      });
    }
  };

  const handlePendingAmount = (e) => {
    const value = e.target.value;

    if (formData.selectedOption === "") {
      setErrors({ packageError: "Please select a package first." });
      // Optionally, you can clear the field or handle it differently here
    } else if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, pendingAmount: value });
      setErrors({});
    } else {
      setErrors({ characterError: "Character not allowed." });
    }
  };

  const handleNumber = (e) => {
    const value = e.target.value;
    console.log("Input value:", value);

    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, paidamount: "" });
      setFormData({ ...formData, paidamount: value });
    } else {
      setErrors({
        ...errors,
        paidamount: "Amount Paid should not negative & not contain Character.",
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    console.log("Checkbox checked:", checked);

    setErrors({ ...errors, agreeTerms: "" });
    setFormData({ ...formData, agreeTerms: checked });
  };

  const handleNumberChange3 = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, visitorsCount: "" });
      setFormData({ ...formData, visitorsCount: value });
    } else {
      setErrors({
        ...errors,
        visitorsCount: "Visitors Count should not contain Character.",
      });
    }
  };

  const handleNumberChange4 = (e) => {
    const value = e.target.value;
    console.log("Input value:", value);

    if (/^\d*$/.test(value) && value.length <= 10) {
      setErrors({ ...errors, carCount: "" });
      setFormData({ ...formData, carCount: value });
    } else {
      setErrors({
        ...errors,
        carCount: "Car Count should not contain Character.",
      });
    }
  };

  const [errors1, setErrors1] = useState({});
  const [showCashCollectedByField, setShowCashCollectedByField] = useState(false);

  const handlePaymentModeChange = (e) => {
    const { value } = e.target;
    if (value === 'cash') {
      setFormData({ ...formData, paymentMode: value, cashcollectedby: '' });
      setShowCashCollectedByField(true);
    } else {
      setFormData({ ...formData, paymentMode: value });
      setShowCashCollectedByField(false);
    }
  };

  const handleDropdownChange12 = (e) => {
    const value = e.target.value;
    console.log("Selected value:", value);

    if (value !== "") {
      setErrors1({ ...errors1, cashcollectedby: "" });
      setFormData({ ...formData, cashcollectedby: value });
    } else {
      setErrors1({
        ...errors1,
        cashcollectedby: "Please select",
      });
    }
  };







  
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureData, setSignatureData] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    const handleTouchStart = (event) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      ctx.beginPath();
      ctx.moveTo(offsetX, offsetY);
    };

    const handleTouchMove = (event) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const touch = event.touches[0];
      const offsetX = touch.clientX - rect.left;
      const offsetY = touch.clientY - rect.top;
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
    };

    const handleTouchEnd = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDrawing]);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureData("");
  };

  const saveSignature = () => {
    const canvas = canvasRef.current;
    setSignatureData(canvas.toDataURL()); // Convert canvas to data URL
  };
 

  /*const [searchedbookingId, setSearchedbookingId] = useState('');
  const [searchedClient, setSearchedClient] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/clients/byUniqueId/${searchedbookingId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSearchedClient(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
*/

const handleSubmit = async (e) => {
  e.preventDefault();

  const requiredFields = [
    "clientName",
    "phoneNumber",
    "photographerName",
    "photographerPhoneNo",
    "selectDate",
    "selectedOption",
    "advanceAmount",
    "pendingAmount",
    "visitorsCount",
    "carCount",
  ];

  const missingFields = requiredFields.filter((field) => !formData[field]);

  if (missingFields.length > 0) {
    setErrorMessage("Please fill all data in required fields.");
    return;
  }

  const url = "http://localhost:8080/api/clients/createClient";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to submit data");
    }
    const responseData = await response.json();
    if (responseData && responseData.bookingId) {
      setIsSubmitted(true);
      setFormData(initialFormData);
      setErrorMessage(`✅ Congratulations! Successfully submitted your data. Your Booking ID is SBNP - ${responseData.bookingId}`);
      setTimeout(() => {
        setErrorMessage("");
      }, 10000);
      console.log("Congratulations! Form submitted!");
    } else {
      throw new Error("Booking ID not found in response");
    }
  } catch (error) {
    console.error("Error:", error.message);
    setErrorMessage("Failed to submit data. Please try again.");
  }
};


  

  const handleCancel = () => {
    setFormData(initialFormData);
    setErrors({}); // Clear any error messages
    setErrorMessage(""); // Clear any success or error messages
    console.log("Form canceled!");
  };
  return (
    <div>
      <div className="contact-container">
        <div className="form-container">
          <h2 className="form-title">Book your photoshoot slot now</h2>



    {/* <div>
      <input
        type="text"
        value={searchedbookingId}
        onChange={(e) => setSearchedbookingId(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchedClient && (
        <div>
          <h2>Searched Client Details</h2>
          <p>ID: {searchedClient.id}</p>
          <p>Client Name: {searchedClient.clientName}</p>
          <p>Client Phonenumber: {searchedClient.phoneNumber}</p>
          <p>cityName: {searchedClient.cityName}</p>
          
        </div>
      )}
    </div> */}


          <div className="form-group mb-4">
            <label htmlFor="clientName" className="field-label">
              Customer Name
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              type="text"
              name="clientName"
              id="clientName"
              placeholder="Enter your name"
              value={formData.clientName}
              onChange={handleInputChange}
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.clientName && (
              <span className="text-red-500">{errors.clientName}</span>
            )}
          </div>




          <div className="form-group mb-4">
            <label htmlFor="phoneNumber" className="field-label">
              Customer Contact Number
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleNumberChange}
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="photographerName" className="field-label">
              Photographer Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="photographerName"
              id="photographerName"
              placeholder="Enter photographer name"
              value={formData.photographerName}
              onChange={handleInputChange1}
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.photographerName && (
              <span className="text-red-500">{errors.photographerName}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="photographerPhoneNo" className="field-label">
              Photographer Contact Number
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              type="text"
              name="photographerPhoneNo"
              id="photographerPhoneNo"
              placeholder="Enter Photographer phone number"
              value={formData.photographerPhoneNo}
              onChange={handleNumberChange2}
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.photographerPhoneNo && (
              <span className="text-red-500">{errors.photographerPhoneNo}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="datePicker" className="field-label">
              Photo shoot Date
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              // className="py-1 px-1 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="date"
              id="datePicker"
              name="selectDate"
              onChange={handleDateChange}
              min={new Date().toISOString().split("T")[0]} // Set min attribute to today
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="knowaboutlocation" className="field-label">
              How do you know about "The Natural Paradise Photo shoot" location?
            </label>
            <select
              name="knowaboutlocation"
              id="knowaboutlocation"
              value={formData.knowaboutlocation}
              onChange={handleDropdownChange}
              style={{ height: "30px", width: "calc(100% - 20px)" }}
            >
              <option value="" disabled selected>
                please Select
              </option>
              <option value="Instagram">🔶 Instagram</option>
              <option value="Photographer">🔶 Photographer</option>
              <option value="Whatsapp">🔶 Whatsapp</option>
              <option value="Relatives or friends">
                🔶 Relatives or Friends
              </option>
              <option value="Other">🔶 Other</option>
            </select>
            {errors.knowaboutlocation && (
              <span className="text-red-500">{errors.knowaboutlocation}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="cityName" className="field-label">City Name</label>
            <input
              type="text"
              name="cityName"
              id="cityName"
              placeholder="Enter city name"
              value={formData.cityName}
              onChange={handleCityChange}
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.cityName && (
              <span className="text-red-500">{errors.cityName}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="selectOption" className="field-label">
              Please select photo shoot Package{" "}
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <select
              id="selectOption"
              name="selectOption"
              onChange={handlepackage}
              value={formData.selectOption}
              required
              style={{ height: "35px", width: "100%" }} // Set initial width to 100%
            >
              <option value="" disabled selected>
                Please Select
              </option>
              <option value="option1">Riverside Sets - 2500 RS </option>
              <option value="option2">Night Sets - 2500 RS</option>
              <option value="option3">
                Combo Package(Riverside Sets + Night Sets) - 4000 RS
              </option>
            </select>
            {/* Add more options as needed */}
            {errors.package && (
              <span className="text-red-500">{errors.selectOption}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="advanceAmount" className="field-label">
              Advance Amount
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              type="text"
              name="advanceAmount"
              id="advanceAmount"
              placeholder="Enter advance Amount"
              value={formData.advanceAmount}
              onChange={handleAdvanceAmount}
              required
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.advanceAmount && (
              <span className="text-red-500">{errors.advanceAmount}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="pendingAmount" className="field-label">
              Pending Amount
              <span className="text-red-500" style={{ fontSize: "1.2em" }}>
                *
              </span>
            </label>
            <input
              type="text"
              name="pendingAmount"
              id="pendingAmount"
              placeholder="Enter pending Amount"
              value={formData.pendingAmount}
              onChange={handlePendingAmount}
              style={{ height: "20px", width: "calc(100% - 20px)" }}
              readOnly
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="paidamount" className="field-label">Payment Amount Paid</label>
            <input
              type="text"
              name="paidamount"
              id="paidamount"
              placeholder="Enter Payment Amount "
              value={formData.paidamount}
              onChange={handleNumber}
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.carCount && (
              <span className="text-red-500">{errors.paidamount}</span>
            )}
          </div>

         
          <div className="form-group mb-4">
            <label htmlFor="visitorsCount" className="field-label">Number of Visitors</label>
            <input
              type="text"
              name="visitorsCount"
              id="visitorsCount"
              placeholder="Enter Visitors Count"
              value={formData.visitorsCount}
              onChange={handleNumberChange3}
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.visitorsCount && (
              <span className="text-red-500">{errors.visitorsCount}</span>
            )}
          </div>

          <div className="form-group mb-4">
            <label htmlFor="carCount" className="field-label">Car Count</label>
            <input
              type="text"
              name="carCount"
              id="carCount"
              placeholder="Enter Car Count"
              value={formData.carCount}
              onChange={handleNumberChange4}
              style={{ height: "20px", width: "calc(100% - 20px)" }}
            />
            {errors.carCount && (
              <span className="text-red-500">{errors.carCount}</span>
            )}
          </div>


    <div>
      <div className="form-group mb-4" style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="paymentMode" style={{ marginRight: "15px" }} className="field-label">Payment Mode</label>
        <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          <input
            type="radio"
            id="online"
            name="paymentMode"
            value="online"
            checked={formData.paymentMode === "online"}
            onChange={handlePaymentModeChange}
            style={{ marginRight: "10px", transform: "scale(2)", color: formData.paymentMode === "online" ? "blue" : "initial" }}
          />
          <label htmlFor="online" style={{ marginRight: "35px" }} className="field-label">Online</label>

          <input
            type="radio"
            id="cash"
            name="paymentMode"
            value="cash"
            checked={formData.paymentMode === "cash"}
            onChange={handlePaymentModeChange}
            style={{ marginRight: "10px", transform: "scale(2)", color: formData.paymentMode === "cash" ? "blue" : "initial" }}
          />
          <label htmlFor="cash" style={{ marginRight: "15px" }} className="field-label">Cash</label>
        </div>
      </div>

      {showCashCollectedByField && (
        <div className="form-group mb-4">
          <label htmlFor="cashcollectedby" className="field-label">Cash Collected by</label>
          <select
            name="cashcollectedby"
            id="cashcollectedby"
            value={formData.cashcollectedby}
            onChange={handleDropdownChange12}
            style={{ height: "30px", width: "calc(100% - 20px)" }}
          >
            <option value="" disabled>Please Select</option>
            <option value="Rahul">🔶 Rahul</option>
            <option value="Yashodhan">🔶 Yashodhan</option>
            <option value="Yogesh">🔶 Yogesh</option>
            <option value="Umesh">🔶 Umesh</option>
            <option value="Yogita">🔶 Yogita</option>
            <option value="Ashwini">🔶 Ashwini</option>
          </select>
          {errors.cashcollectedby && (
            <span className="text-red-500">{errors.cashcollectedby}</span>
          )}
        </div>
      )}
    </div>

    <div className="form-group mb-4">
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleCheckboxChange}
                style={{ marginRight: "10px", height: "20px", width: "20px" }}
              />
              <span style={{ fontSize: "16px" }} className="field-label">
                I agree to the terms and conditions
              </span>
            </label>
            {errors.agreeTerms && (
              <span className="text-red-500">{errors.agreeTerms}</span>
            )}
          </div>


    <div className="form-group mb-4">
      <label htmlFor="signature" className="field-label">Signature of Customer</label>
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <canvas ref={canvasRef} width={300} height={150} />
        <div>
          <button onClick={clearSignature}>Clear</button>
          <button onClick={saveSignature}>Save</button>
        </div>
      </div>
      {signatureData && (
        <div>
          <img src={signatureData} alt="Signature" />
        </div>
      )}
    </div>
    

    {errorMessage && (
  <div
    className={`${
      errorMessage.includes("Successfully") ? "success" : "error"
    }-message`}
  >
    {errorMessage}
  </div>
)}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  }}
>
  <button
    type="submit"
    onClick={handleSubmit}
    style={{
      backgroundColor: "blue",
      color: "white",
      borderRadius: "10px",
      padding: "10px 20px",
      border: "none",
    }}
  >
    Submit
  </button>
  <button
    type="button"
    onClick={handleCancel}
    style={{
      backgroundColor: "blue",
      color: "white",
      borderRadius: "10px",
      padding: "10px 20px",
      border: "none",
    }}
  >
    Clear
  </button>
</div>
{isSubmitted  && responseData && (
  <div
    className="success-message"
    style={{
      backgroundColor: "lightgreen",
      color: "black",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      marginTop: "20px",
    }}
  >
    ✅ Successfully submitted your data. Your Booking ID is {responseData.bookingId}
  </div>
          )}
        </div>


        <div className="image-container">
          <img className=" rounded-lg " src={img} alt="" />
          <br></br>
          <p className="text-container">
            We'd love to hear from you💗! Whether you have questions, feedback,
            or need assistance with your shoot, please don't hesitate to reach
            out. Our team is here to assist you every step of the way. Simply
            fill out the form below and we'll be in touch shortly 🤝.
          </p>
        </div>
      </div>
      <br></br>
      <Footer />
    </div>
  );
};

export default Contact;
