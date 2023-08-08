import React from 'react';
import '../styles/Style.css'

// const CustomPopup = ({ isVisible, confirmationMessage, onClosePopup }) => {
//     const handleYes = () => {
//         // Your logic for handling 'Yes' action goes here
//       };
//     return (
//     <>
//       {isVisible && (
//         <div className="custom-popup">
//           <div className="popup-content">
//             <h2>Logout Confirmation</h2>
//             <p>{confirmationMessage}</p>
//             <button onClick={onClosePopup}>Cancel</button>
//             <button onClick={handleYes}>Logout</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CustomPopup;

const CustomPopup = ({ isVisible, confirmationMessage, onClosePopup, onConfirmButtonClickActions }) => {
    const handleConfirm = () => {
        console.log("confirm button clicked")
        onConfirmButtonClickActions(); // Call the onConfirmButtonClickActions prop to handle the logout action
      onClosePopup(); // Close the popup after logout
    };
  
    const handleCancel = () => {
      onClosePopup(); // Close the popup when Cancel button is clicked
    };
  
    return (
      <>
        {isVisible && (
          <div className="custom-popup" style={{  padding: '20px' }}>
            <div className="popup-content">
              <h2>Logout Confirmation</h2>
              <p>{confirmationMessage}</p>
              <div className="popup-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleConfirm}>Confirm</button>
            </div>
               </div>
          </div>
        )} 
      </>
    );
  };
  
  export default CustomPopup;
