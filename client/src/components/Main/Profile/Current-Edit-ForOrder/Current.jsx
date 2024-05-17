import { useEffect } from "react";
import useAppContext from "../../../../context/useAppContext";
import PropTypes from "prop-types";
import axios from "axios";

const Current = ({ onEditClick }) => {
  const { userData, setUserData, loading, setLoading } = useAppContext();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming you have the user's ID stored somewhere
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User ID not found.");
        }

        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error
      }
    };

    fetchUserData();
  }, [setLoading, setUserData]);

  return (
    <section className="current-profile">
      <h1 className="title">Here&apos;s your profile!</h1>

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="user-details">
          <div className="profile-field-container">
            <div className="contact-pair-container">
              <h4 className="profile-field-title">First Name:</h4>
              <h4 className="profile-field-value">{userData.firstName}</h4>
            </div>

            <div className="contact-pair-container">
              <h4 className="profile-field-title">Last Name:</h4>
              <h4 className="profile-field-value">{userData.lastName}</h4>
            </div>
          </div>

          <div className="profile-field-container">
            <div className="contact-pair-container">
              <h4 className="profile-field-title">Address 1:</h4>
              <h4 className="profile-field-value"> {userData.address1}</h4>
            </div>

            <div className="contact-pair-container">
              <h4 className="profile-field-title">Address 2:</h4>
              <h4 className="profile-field-value">{userData.address2}</h4>
            </div>
          </div>

          <div className="profile-field-container">
            <div className="contact-pair-container">
              <h4 className="profile-field-title">City:</h4>
              <h4 className="profile-field-value">{userData.city}</h4>
            </div>

            <div className="contact-pair-container">
              <h4 className="profile-field-title">State:</h4>
              <h4 className="profile-field-value">{userData.state}</h4>
            </div>

            <div className="contact-pair-container">
              <h4 className="profile-field-title">Zip:</h4>
              <h4 className="profile-field-value">{userData.zip}</h4>
            </div>
          </div>

          <button className="profile-edit-button" onClick={onEditClick}>
            Edit
          </button>
        </div>
      )}
    </section>
  );
};

Current.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

export default Current;
