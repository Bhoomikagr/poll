// // PollingForm.jsx
// import React, { useState, useEffect } from 'react';
// import './app.css';
// import PollingLoginForm from './PollingLoginForm';

// const PollingForm = () => {
//   const [votes, setVotes] = useState([0, 0, 0, 0]);
//   const [isPollingLoggedIn, setIsPollingLoggedIn] = useState(false);

//   useEffect(() => {
//     const storedVotes = localStorage.getItem('pollVotes');
//     setVotes(storedVotes ? JSON.parse(storedVotes) : [0, 0, 0, 0]);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('pollVotes', JSON.stringify(votes));
//   }, [votes]);

//   const submitVote = (selectedOption) => {
//     if (selectedOption) {
//       // Your voting logic here
//       switch (selectedOption) {
//                 case 'modi':
//                   setVotes((prevVotes) => [prevVotes[0] + 1, ...prevVotes.slice(1)]);
//                   break;
//                 case 'rahulGandhi':
//                   setVotes((prevVotes) => [...prevVotes.slice(0, 1), prevVotes[1] + 1, ...prevVotes.slice(2)]);
//                   break;
//                 case 'anotherRahulGandhi':
//                   setVotes((prevVotes) => [...prevVotes.slice(0, 2), prevVotes[2] + 1, ...prevVotes.slice(3)]);
//                   break;
//                 case 'others':
//                   setVotes((prevVotes) => [...prevVotes.slice(0, 3), prevVotes[3] + 1]);
//                   break;
//                 default:
//                   break;
//               }
//     } else {
//       alert('Please select an option before submitting.');
//     }
//   };

//   if (!isPollingLoggedIn) {
//     return <PollingLoginForm setIsPollingLoggedIn={setIsPollingLoggedIn} />;
//   }

//   return (
//     <div>
//       <form className="polling-form" id="pollForm">
//         <div>
//           <div className="headline">
//             <h3>Who is the next Prime Minister</h3>
//           </div>
          
//             {/* Your radio button options here */}
//             <div className="checkboxcontainer">
//             <div className="checkbox">
//               <label htmlFor="modi">Narendra Modi</label>
//               <input type="radio" name="gender" id="modi" />
//             </div>
//             <div className="checkbox">
//               <label htmlFor="rahulGandhi">Rahul Gandhi</label>
//               <input type="radio" name="gender" id="rahulGandhi" />
//             </div>
//             <div className="checkbox">
//               <label htmlFor="RahulGandhi">Rahul Gandhi A</label>
//               <input type="radio" name="gender" id="RahulGandhi" />
//             </div>
//             <div className="checkbox">
//               <label htmlFor="others">Others</label>
//               <input type="radio" name="gender" id="others" />
//             </div>
//           </div>
//           <div className="btn-div">
//             <button className="polling-btn" onClick={() => submitVote(document.querySelector('input[name="gender"]:checked')?.id)}>
//               Submit Vote
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PollingForm;
// PollingForm.jsx
import React, { useState, useEffect } from 'react';
import './app.css';
import PollingLoginForm from './PollingLoginForm';

const PollingForm = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);
  const [isPollingLoggedIn, setIsPollingLoggedIn] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/pollVotes')
      .then(response => response.json())
      .then(data => setVotes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (isPollingLoggedIn) {
      fetch('http://localhost:5000/api/pollVotes', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ votes }),
      })
        .catch(error => console.error('Error updating data:', error));
    }
  }, [votes, isPollingLoggedIn]);

  const submitVote = (selectedOption) => {
    if (selectedOption) {
      // Your voting logic here
      switch (selectedOption) {
        case 'modi':
          setVotes((prevVotes) => [prevVotes[0] + 1, ...prevVotes.slice(1)]);
          break;
        case 'rahulGandhi':
          setVotes((prevVotes) => [...prevVotes.slice(0, 1), prevVotes[1] + 1, ...prevVotes.slice(2)]);
          break;
        case 'anotherRahulGandhi':
          setVotes((prevVotes) => [...prevVotes.slice(0, 2), prevVotes[2] + 1, ...prevVotes.slice(3)]);
          break;
        case 'others':
          setVotes((prevVotes) => [...prevVotes.slice(0, 3), prevVotes[3] + 1]);
          break;
        default:
          break;
      }
    } else {
      alert('Please select an option before submitting.');
    }
  };

  if (!isPollingLoggedIn) {
    return <PollingLoginForm setIsPollingLoggedIn={setIsPollingLoggedIn} />;
  }

  return (
    <div>
      <form className="polling-form" id="pollForm">
        <div>
          <div className="headline">
            <h3>Who is the next Prime Minister</h3>
          </div>

          {/* Your radio button options here */}
          <div className="checkboxcontainer">
            <div className="checkbox">
              <label htmlFor="modi">Narendra Modi</label>
              <input type="radio" name="gender" id="modi" />
            </div>
            <div className="checkbox">
              <label htmlFor="rahulGandhi">Rahul Gandhi</label>
              <input type="radio" name="gender" id="rahulGandhi" />
            </div>
            <div className="checkbox">
              <label htmlFor="RahulGandhi">Rahul Gandhi A</label>
              <input type="radio" name="gender" id="RahulGandhi" />
            </div>
            <div className="checkbox">
              <label htmlFor="others">Others</label>
              <input type="radio" name="gender" id="others" />
            </div>
          </div>
          <div className="btn-div">
            <button className="polling-btn" onClick={() => submitVote(document.querySelector('input[name="gender"]:checked')?.id)}>
              Submit Vote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PollingForm;
