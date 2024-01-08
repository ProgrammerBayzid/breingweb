import  { createContext, useContext, useState } from "react";

const ProfileDataContext = createContext();


export const useProfileData = () => {
  return useContext(ProfileDataContext);
};


export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    companyname: "",
    designation: "",
  });

  const updateProfileData = (newData) => {
    setProfileData({ ...profileData, ...newData });
  };

  return (
    <ProfileDataContext.Provider value={{ profileData, updateProfileData  }}>
      {children}
    </ProfileDataContext.Provider>
  );
};





















