import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [logins, setLogins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost/bibilo_crud/test3/fetchLogins.php")
      .then(response => {
        const data = response.data;
        setLogins(data);  // Assuming `data` is an array of objects with `email` and `password`
        setLoading(false);  // Stop loading after data is fetched
      })
      .catch(err => {
        setError("An error occurred while fetching the data.");
        setLoading(false);  // Stop loading if there's an error
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Logins</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {logins.map((el, index) => (
              <tr key={index}>
                <td>{el.email}</td>
                <td>{el.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
