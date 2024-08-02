import { useEffect, useState } from "react";
import axios from "axios";
import useAppContext from "../../../../context/useAppContext";

import "./edit-profile.css";

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Edit = () => {
  const {
    profileData,
    setProfileData,
    error,
    setError,
    fieldErrors,
    setFieldErrors,
    setEditingProfile,
    setAddressTwoEmpty,
  } = useAppContext();

  const [address2Placeholder, setAddress2Placeholder] = useState("(optional)");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found.");
        }

        const response = await axios.get(`${apiUrl}/users/${userId}`);
        setProfileData(response.data);
        setAddressTwoEmpty(!response.data.address2);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error
      }
    };

    fetchUserData();
  }, [setProfileData, setAddressTwoEmpty]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
    setFieldErrors({
      ...fieldErrors,
      [name]: false,
    });
  };

  const handleSubmit = async () => {
    const updatedFields = {};
    Object.keys(profileData).forEach((key) => {
      if (profileData[key] !== "") {
        updatedFields[key] = profileData[key];
      }
    });

    setError("");
    const userId = localStorage.getItem("userId");

    if (!userId) {
      setError("User ID not found.");
      return;
    }

    try {
      await axios.put(`${apiUrl}/users/${userId}`, updatedFields);
      console.log("User information updated");
      // Handle successful update, e.g., show a success message or redirect
    } catch (error) {
      console.error("Error updating user information:", error);
      setError("Failed to update user information.");
    }
  };

  const handleAddress2Focus = () => {
    setAddress2Placeholder("");
  };

  const handleAddress2Blur = () => {
  if (!profileData.address2) {
    setAddress2Placeholder("(optional)");
    setAddressTwoEmpty(true); // Set to true if address2 is empty
  } else {
    setAddress2Placeholder("");
    setAddressTwoEmpty(false); // Set to false if address2 has a value
  }
};


  const handleSaveClick = async () => {
    if (profileData.address2 !== "") {
      setAddressTwoEmpty(false);
    }
    await handleSubmit();
    setEditingProfile(false);
  };


  return (
    <section className="edit-profile">
      <h1 className="title">Update your information below.</h1>

      <form
        id="edit-profile-form"
        className="edit-user-details"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="edit-title-column">
          <label className="edit-field-title">
            First Name:
            {fieldErrors.firstName && (
              <span className="profile-error-message">
                {fieldErrors.firstName}
              </span>
            )}
          </label>
          <label className="edit-field-title">
            Last Name:
            {fieldErrors.lastName && (
              <span className="profile-error-message">
                {fieldErrors.lastName}
              </span>
            )}
          </label>
          <label className="edit-field-title">
            Address 1:
            {fieldErrors.address1 && (
              <span className="profile-error-message">
                {fieldErrors.address1}
              </span>
            )}
          </label>
          <label className="edit-field-title">Address 2:</label>
          <label className="edit-field-title">
            City:
            {fieldErrors.city && (
              <span className="profile-error-message">{fieldErrors.city}</span>
            )}
          </label>
          <label className="edit-field-title state-field-title">
            State:
            {fieldErrors.state && (
              <span className="profile-error-message">{fieldErrors.state}</span>
            )}
          </label>
          <label className="edit-field-title">
            Zip:
            {fieldErrors.zip && (
              <span className="profile-error-message">{fieldErrors.zip}</span>
            )}
          </label>
        </div>
        <div className="edit-value-column">
          <input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            className={
              fieldErrors.firstName ? "profile-error" : "edit-field-value"
            }
          />
          <input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            className={
              fieldErrors.lastName ? "profile-error" : "edit-field-value"
            }
          />
          <input
            type="text"
            name="address1"
            value={profileData.address1}
            onChange={handleChange}
            className={
              fieldErrors.address1 ? "profile-error" : "edit-field-value"
            }
          />
          <input
            className="edit-field-value"
            type="text"
            name="address2"
            value={profileData.address2}
            onChange={handleChange}
            onFocus={handleAddress2Focus}
            onBlur={handleAddress2Blur}
            placeholder={address2Placeholder}
          />
          <input
            type="text"
            name="city"
            value={profileData.city}
            onChange={handleChange}
            className={fieldErrors.city ? "profile-error" : "edit-field-value"}
          />
          <select
            name="state"
            value={profileData.state}
            onChange={handleChange}
            className={fieldErrors.state ? "profile-error" : "state-list"}
          >
            <option value="" disabled>
              Select State
            </option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="zip"
            value={profileData.zip}
            onChange={handleChange}
            className={fieldErrors.zip ? "profile-error" : "edit-field-value"}
          />
        </div>
        {error && <p className="profile-error">{error}</p>}
      </form>

      <section className="edit-buttons">
        <button
          className="cancel-button"
          type="button"
          onClick={() => setEditingProfile(false)}
        >
          Cancel
        </button>
        <button className="save-button" type="button" onClick={handleSaveClick}>
          Save
        </button>
      </section>
    </section>
  );
};

export default Edit;
