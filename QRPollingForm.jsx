import React from 'react'
import PollingForm from './PollingForm';
import myImage from './QR CODE.png'; 
const QRPollingForm = () => {
  return (
    // <Router>
    <div>
          <img src={myImage} alt="Description of the image" style={{ height: '200px' }} />
        </div>
         /* <li>
              <Link to="/PollingForm">Polling Form</Link>
            </li>
            </div>
            <Routes>
            <Route path="/PollingForm" element={<PollingForm />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
      </Router> */
  )
}

export default QRPollingForm