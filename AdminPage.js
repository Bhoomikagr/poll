// AdminPage.jsx
// import React, { useEffect, useState } from 'react';
// import PollResultsChart from './PollResultsChart';
// import './app.css'
// const AdminPage = () => {
//   const [votes, setVotes] = useState([0, 0, 0, 0]);

//   useEffect(() => {
//     const storedVotes = localStorage.getItem('pollVotes');
//     setVotes(storedVotes ? JSON.parse(storedVotes) : [0, 0, 0, 0]);
//   }, []);

//   return (
//     <div>
//       <h2>Poll Results (Admin Page)</h2>
//       {/* Display results using the chart component */}
//       <PollResultsChart votes={votes} />
//       <ul>
//         <li>Narendra Modi: {votes[0]}</li>
//         <li>Rahul Gandhi: {votes[1]}</li>
//         <li>Rahul Gandhi A: {votes[2]}</li>
//         <li>Others: {votes[3]}</li>
//       </ul>
//     </div>
//   );
// };

// export default AdminPage;
// AdminPage.jsx
import React, { useEffect, useState } from 'react';
import PollResultsChart from './PollResultsChart';
import './app.css';
import AdminLogin from './AdminLogin'; // Import the login component

const AdminPage = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedVotes = localStorage.getItem('pollVotes');
    setVotes(storedVotes ? JSON.parse(storedVotes) : [0, 0, 0, 0]);
  }, []);

  // Check if the admin is logged in
  if (!isAdmin) {
    return <AdminLogin setIsAdmin={setIsAdmin} />;
  }

  return (
    <div>
      <h2>Poll Results (Admin Page)</h2>
      {/* Display results using the chart component */}
      <PollResultsChart votes={votes} />
      <ul>
        <li>Narendra Modi: {votes[0]}</li>
        <li>Rahul Gandhi: {votes[1]}</li>
        <li>Rahul Gandhi A: {votes[2]}</li>
        <li>Others: {votes[3]}</li>
      </ul>
    </div>
  );
};

export default AdminPage;
