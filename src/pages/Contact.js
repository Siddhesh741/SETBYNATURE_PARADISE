import React, { useState } from "react";
import "./Contact.css"; // Import your CSS file for styling
import img from "../assets/img/9.jpg"
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
    visitorsCount: "",
    carCount: "",
  });

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
      option1: 4000,
      option2: 2500,
      option3: 2500,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form submitted!");
  };

  const handleCancel = () => {
    setFormData(initialFormData);
    console.log("Form canceled!");
  };

  return (
    <div className="contact-container">
      <div className="form-container">
        <h2 className="form-title">
          {" "}
          <strong>Book your photoshoot slot now</strong>{" "}
        </h2>
        <div className="form-group mb-4">
          <label htmlFor="clientName">
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
            style={{ height: "30px" }}
          />
          {errors.clientName && (
            <span className="text-red-500">{errors.clientName}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="phoneNumber">
            Phone Number
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
            style={{ height: "30px" }}
          />
          {errors.phoneNumber && (
            <span className="text-red-500">{errors.phoneNumber}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="photographerName">
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
            style={{ height: "30px" }}
          />
          {errors.photographerName && (
            <span className="text-red-500">{errors.photographerName}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="photographerPhoneNo">
            Photographer Phone Number
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
            style={{ height: "30px" }}
          />
          {errors.photographerPhoneNo && (
            <span className="text-red-500">{errors.photographerPhoneNo}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="datePicker">
            Select Date
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
            style={{ height: "30px" }}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="cityName">City Name</label>
          <input
            type="text"
            name="cityName"
            id="cityName"
            placeholder="Enter city name"
            value={formData.cityName}
            onChange={handleCityChange}
            style={{ height: "30px" }}
          />
          {errors.cityName && (
            <span className="text-red-500">{errors.cityName}</span>
          )}
        </div>
        <div className="form-group mb-4">
          <label htmlFor="selectOption">
            Package{" "}
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
            style={{ height: "30px", width: "100%" }} // Set initial width to 100%
          >
            <option value="">Select a Package</option>
            <option value="option1">Full Package - 4000 </option>
            <option value="option2">Sunset Package - 2500</option>
            <option value="option3">Night Package - 2500</option>
          </select>
          {/* Add more options as needed */}
          {errors.package && (
            <span className="text-red-500">{errors.selectOption}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="advanceAmount">
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
            style={{ height: "30px" }}
          />
          {errors.advanceAmount && (
            <span className="text-red-500">{errors.advanceAmount}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="pendingAmount">
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
            style={{ height: "30px" }}
            readOnly
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="visitorsCount">Number of Visitors</label>
          <input
            type="text"
            name="visitorsCount"
            id="visitorsCount"
            placeholder="Enter Visitors Count"
            value={formData.visitorsCount}
            onChange={handleNumberChange3}
            style={{ height: "30px" }}
          />
          {errors.visitorsCount && (
            <span className="text-red-500">{errors.visitorsCount}</span>
          )}
        </div>

        <div className="form-group mb-4">
          <label htmlFor="carCount">Car Count</label>
          <input
            type="text"
            name="carCount"
            id="carCount"
            placeholder="Enter Car Count"
            value={formData.carCount}
            onChange={handleNumberChange4}
            style={{ height: "30px" }}
          />
          {errors.carCount && (
            <span className="text-red-500">{errors.carCount}</span>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
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
            Cancel
          </button>
        </div>
      </div>

      <div className="image-container">
      
        <img className=" rounded-lg " src={img} alt="" /><br></br>
        <p className="text-container">We'd love to hear from you! Whether you have questions, feedback, or
              need assistance with your shoot, please don't hesitate to
              reach out. Our team is here to assist you every step of the way.
              Simply fill out the form below and we'll be in touch shortly.</p>
      </div>
    </div>
  );
};

export default Contact;
