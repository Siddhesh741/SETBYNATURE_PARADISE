import React, { useState, useEffect } from "react";
import "./ItemPage.css"; // Import CSS file for component-specific styles

function ItemPage() {
  const [formData, setFormData] = useState({
    itemName: "",
    price: "",
    comment: "",
    transactionId: "", // New field for transaction ID
    paymentMethod: "",
    paidBy: "",
    date: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    // Check if there's any previously submitted data in local storage
    const savedData = localStorage.getItem("submittedData");
    if (savedData) {
      setSubmittedData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "paymentMethod" && value !== "cash") {
      // Reset paidBy if payment method is not cash
      setFormData({ ...formData, [name]: value, paidBy: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = () => {
    const currentDate = new Date();
    const indianDateFormat = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
    const currentTime = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const newData = { 
      ...formData, 
      date: `${indianDateFormat} ${currentTime}`,
    };

    if (editIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editIndex] = newData;
      setSubmittedData(updatedData);
    } else {
      setSubmittedData([newData, ...submittedData]); // Add new data entry at the beginning
    }

    // Save submitted data to local storage
    localStorage.setItem(
      "submittedData",
      JSON.stringify([newData, ...submittedData])
    );

    setFormData({
      itemName: "",
      price: "",
      comment: "", // Reset comment field
      transactionId: "", // Reset transaction ID field
      paymentMethod: "",
      paidBy: "",
      date: "",
    });
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
  };

  const confirmDelete = () => {
    const newData = submittedData.filter((_, i) => i !== deleteIndex);
    setSubmittedData(newData);
    // Update local storage after deletion
    localStorage.setItem("submittedData", JSON.stringify(newData));
    setDeleteIndex(null);
  };

  const handleEdit = (index, rowData) => {
    setEditIndex(index);
    setFormData(rowData);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="input-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
            placeholder="Enter Item Name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Enter Price"
          />
        </div>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
        >
          <option value="">Select Payment Method</option>
          <option value="online">Online</option>
          <option value="cash">Cash</option>
        </select>
        <br />
        {formData.paymentMethod === "online" && (
          <div className="input-group">
            <label htmlFor="transactionId">Transaction ID</label>
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleInputChange}
              placeholder="Enter Transaction ID"
            />
          </div>
        )}
        {formData.paymentMethod === "cash" && (
          <div className="input-group">
            <label htmlFor="paidBy">Paid By</label>
            <select
              id="paidBy"
              name="paidBy"
              value={formData.paidBy}
              onChange={handleInputChange}
            >
              <option value="">Select Name</option>
              <option value="Taranginii">Taranginii</option>
              <option value="Rahul Samgir">Rahul Samgir</option>
            </select>
          </div>
        )}
        <div className="input-group">
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder="Enter Comment"
          />
        </div>
        <br />
        <button className="submit-button" onClick={handleFormSubmit}>
          {editIndex !== null ? "Save" : "Submit"}
        </button>
      </div>

      {deleteIndex !== null && (
       <div style={{ textAlign: 'center' }}>
       <p>
         <strong>Are you sure you want to delete this entry?</strong>
       </p>
       <div style={{ margin: '20px 0' }}>
         <button style={{ marginRight: '10px', fontSize: '16px', padding: '10px 20px' }} onClick={confirmDelete}>OK</button>
         <button style={{ fontSize: '16px', padding: '10px 20px' }} onClick={() => setDeleteIndex(null)}>Cancel</button>
       </div>
     </div>
     
      )}
      <br />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Comment</th>
              <th>Payment Method</th>
              <th>Paid By</th>
              <th>Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.itemName}</td>
                <td>{data.price}</td>
                <td>{data.transactionId}</td>
                <td>{data.comment}</td>
                <td>{data.paymentMethod}</td>
                <td>{data.paymentMethod === "cash" ? data.paidBy : "-"}</td>
                <td>{data.date}</td>
                <td>
                  <button onClick={() => handleEdit(index, data)}>
                    Edit
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemPage;
