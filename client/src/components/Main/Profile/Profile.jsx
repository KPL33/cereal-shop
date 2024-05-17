import React, { useEffect } from "react";
import useAppContext from "../../../context/useAppContext";
import Current from "./Current-Edit-ForOrder/Current";
import Edit from "./Current-Edit-ForOrder/Edit";
import "./profile.css";

const Profile = () => {
  const { editingProfile, setEditingProfile } = useAppContext();

  // Function to set editingProfile in local storage
  const setEditingProfileLocalStorage = (value) => {
    localStorage.setItem("editingProfile", JSON.stringify(value));
    setEditingProfile(value);
  };

  // On component mount, check local storage for editingProfile value
  useEffect(() => {
    const storedEditingProfile = localStorage.getItem("editingProfile");
    if (storedEditingProfile) {
      setEditingProfile(JSON.parse(storedEditingProfile));
    }
  }, []);

  const handleEditClick = () => {
    // Set editingProfile to true and store it in local storage
    setEditingProfileLocalStorage(true);
  };

  const handleSaveClick = () => {
    // Set editingProfile to false and store it in local storage
    setEditingProfileLocalStorage(false);
  };

  return (
    <section className="profile">
      <div className="profile-container">
        {editingProfile ? (
          <Edit onSave={handleSaveClick} />
        ) : (
          <Current onEditClick={handleEditClick} />
        )}
      </div>
    </section>
  );
};

export default Profile;
