
import axios from 'axios';
import { useEffect, useState } from 'react';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recruter, setRecruiter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecruiterProfile = (token) => {
      axios.get("https://rsapp.unbolt.co/recruiters_profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (res.status === 401) {
            setIsAuthenticated(false);
          } else {
            setRecruiter(res.data);
            setIsAuthenticated(true);

          }
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled:", error.message);
          } else if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Server responded with an error:", error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error setting up the request:", error.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
  
    const storedToken = localStorage.getItem("token");
  
    if (storedToken) {
      const stringWithoutQuotes = storedToken.replace(/"/g, "");
      fetchRecruiterProfile(stringWithoutQuotes);
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);
  
  
  return { isAuthenticated, recruter, isLoading };
}

export default useAuth;
