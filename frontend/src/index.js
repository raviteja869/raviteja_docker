import React from 'react';
import ReactDOM from 'react-dom';

// Function to handle button click and make request to backend
async function fetchMessage() {
  try {
      // Assuming your backend is at localhost:5001
      const response = await fetch('http://localhost:7000/api/message');
      const data = await response.json();
      alert(data.message); // Displaying the message in an alert for simplicity
  } catch (error) {
      console.error('Error fetching message:', error);
  }
}

// Main App component with the button
function App() {
  return (
      <div>
          <h1>Welcome to Ravi Teja's Frontend</h1>
          <button onClick={fetchMessage}>Get Message from Backend</button>
      </div>
  );
}

// Rendering the App component to the DOM
ReactDOM.render(<App />, document.getElementById('root'));
