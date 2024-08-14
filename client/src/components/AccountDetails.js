import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { BrowserView, MobileView, isChrome, isEdge, isFirefox, isIE, isOpera, isSafari, osName } from 'react-device-detect';

const AccountDetails = () => {
  const { id } = useContext(UserContext);
  const { name, user, userDetails } = id;

  // Check if user is logged in
  if (!userDetails) {
    return (
      <div className="Error">
        <h1>You are not authorised to view this page</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Generate a random student ID with the format "S year random(0-9999)", this random changes based on the session
  const generateStudentID = () => {
    const seed = parseInt(currentDate.getTime().toString().slice(-6), 10);
    const random = Math.floor(Math.random() * 10000);
    return `S${currentYear}${random}`;
  };

  // Generate a random educator ID with the format "E year random(0-9999)"
  const generateEducatorID = () => {
    const seed = parseInt(currentDate.getTime().toString().slice(-6), 10);
    const random = Math.floor(Math.random() * 10000);
    return `E${currentYear}${random}`;
  };

  // Determine the appropriate ID based on the user type
  const userID = user === "student" ? generateStudentID() : user === "educator" ? generateEducatorID() : "ID not defined";

  const currentDateInDublinTimezone = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Dublin",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="container">
      <strong>Account Details</strong>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{userDetails.name}</td>
          </tr>
          <tr>
            <td><strong>Role:</strong></td>
            <td>{user === "student" ? "Student" : user === "educator" ? "Educator" : "Role not defined"}</td>
          </tr>
          {(user === "student" || user === "educator") && (
            <tr>
              <td><strong>{user === "student" ? "Student ID" : "Educator ID"}:</strong></td>
              <td>{userID}</td>
            </tr>
          )}
          <tr>
            <td><strong>Date and Time:</strong></td>
            <td>{currentDateInDublinTimezone}</td>
          </tr>
          <tr>
            <td><strong>Browser Info:</strong></td>
            <td>
              <BrowserView>
                {isChrome ? "Chrome" : isEdge ? "Edge" : isFirefox ? "Firefox" : isIE ? "Internet Explorer" : isOpera ? "Opera" : isSafari ? "Safari" : "Unknown browser"}
              </BrowserView>
              <MobileView>
                Mobile browser info
              </MobileView>
            </td>
          </tr>
          <tr>
            <td><strong>Operating System:</strong></td>
            <td>{osName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountDetails;
