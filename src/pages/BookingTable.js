import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"; // Import edit and delete icons from react-icons
import "./BookingTable.css"; // Import your CSS file for styling
import axios from "axios";
import ConfirmationDialog from "./ConfirmationDialog";

const BookingTable = () => {
  const [clients, setClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 10;
  const [showConfirmation, setShowConfirmation] = useState(false); // State to manage the visibility of the confirmation dialog
  const [selectedClientId, setSelectedClientId] = useState(null); // State to store the id of the client to be deleted
  const [deleteSuccess, setDeleteSuccess] = useState(false); // State to track deletion success
  const [searchDate, setSearchDate] = useState("");
  const [searchPhotographer, setSearchPhotographer] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    const filtered = clients.filter(
      (client) =>
        client.selectDate.includes(searchDate) &&
        client.photographerPhoneNo.toString().includes(searchPhotographer)
    );
    setFilteredClients(filtered);
    if (filtered.length === 0) {
      setError("😔No results found.");
    } else {
      setError("");
    }
  }, [searchDate, searchPhotographer, clients]);

  const fetchClients = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/clients");
      const reversedClients = response.data.reverse();
      setClients(reversedClients);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const handleDelete = async (id) => {
    setSelectedClientId(id); // Set the id of the client to be deleted
    setShowConfirmation(true); // Show the confirmation dialog
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/clients/${selectedClientId}`
      );
      // Filter out the deleted client from the state
      setClients(clients.filter((client) => client.id !== selectedClientId));
      // Show success message
      setDeleteSuccess(true);
      setShowConfirmation(false); // Hide the confirmation dialog after successful deletion
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const cancelDelete = () => {
    setShowConfirmation(false); // Hide the confirmation dialog if cancel button is clicked
  };

  // Logic for pagination
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Calculate total number of pages
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredClients.length / clientsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleDateChange = (event) => {
    setSearchDate(event.target.value);
  };

  const handlePhotographerChange = (event) => {
    setSearchPhotographer(event.target.value);
  };

  return (
    <div className="booking-table-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by date"
          value={searchDate}
          onChange={handleDateChange}
        />
        <input
          type="text"
          placeholder="Search by photographer contact number"
          value={searchPhotographer}
          onChange={handlePhotographerChange}
        />
      </div>
      <div className="booking-table">
        <table>
          <thead>
            <tr>
              <th>Edit</th>
              <th>Delete</th>
              <th>ID</th>
              <th>Photoshoot Date</th>
              <th>Customer Name</th>
              <th>Customer Contact No</th>
              <th>Photographer Name</th>
              <th>Photographer Contact No</th>
              <th>Customer City or village</th>
              <th>How did you know about us?</th>
              <th>photoshoot Package</th>
              <th>Advance Amount</th>
              <th>Pending Amount</th>
              <th>Payment Mode</th>
              <th>Cash Collected by</th>
              <th>Total People Arrived </th>
              <th>Agree terms conditions.</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.map((client) => (
              <tr key={client.id}>
                <td>
                  <button className="edit-button">
                    <AiOutlineEdit /> {/* Edit icon */}
                  </button>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(client.id)}
                  >
                    <AiOutlineDelete /> {/* Delete icon */}
                  </button>
                </td>
                <td>{client.id}</td>
                <td>{client.selectDate}</td>
                <td>{client.clientName}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.photographerName}</td>
                <td>{client.photographerPhoneNo}</td>
                <td>{client.cityName}</td>
                <td>{client.knowaboutlocation}</td>
                <td>{client.selectedOption}</td>
                <td>{client.advanceAmount}</td>
                <td>{client.pendingAmount}</td>
                <td>{client.paymentMode}</td>
                <td>{client.cashcollectedby}</td>
                <td>{client.visitorsCount}</td>
                <td>{client.agreeTerms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.length > 2 && currentPage > 1 && (
          <button key={1} onClick={() => paginate(1)}>
            1
          </button>
        )}
        {currentPage > 3 && <span>...</span>}
        {pageNumbers.map(
          (number) =>
            number >= currentPage - 1 &&
            number <= currentPage + 1 && (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            )
        )}
        {currentPage < pageNumbers.length - 2 && <span>...</span>}
        {pageNumbers.length > 1 && currentPage !== pageNumbers.length && (
          <button
            key={pageNumbers.length}
            onClick={() => paginate(pageNumbers.length)}
          >
            {pageNumbers.length}
          </button>
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastClient >= filteredClients.length}
        >
          Next
        </button>
      </div>

      {/* Success message */}
      {deleteSuccess && (
        <p className="success-message">✅ Client deleted successfully!</p>
      )}
      {/* Confirmation Dialog */}
      {showConfirmation && (
        <ConfirmationDialog
          message="Are you sure you want to delete this client?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
      {/* Error message */}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default BookingTable;
