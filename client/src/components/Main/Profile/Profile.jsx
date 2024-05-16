// import axios from "axios";
// import { Link } from "react-router-dom";
import useAppContext from "../../../context/useAppContext";
import Current from "./Current-Edit/Current";
import Edit from "./Current-Edit/Edit";

import "./profile.css";

const Profile = () => {
  const { editingProfile, setEditingProfile } = useAppContext();

  const handleEditClick = () => {
    setEditingProfile(true);
  };

  return (
    <section className="profile">
      <div className="profile-container">
        {editingProfile ? <Edit /> : <Current onEditClick={handleEditClick} />}
      </div>
    </section>
  );
};

export default Profile;
