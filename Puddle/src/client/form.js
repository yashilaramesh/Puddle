import { submitReport } from './api.js';

document.querySelector('#reportForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const description = document.getElementById('description').value;
  const location = document.getElementById('location').value;
  const reportType = document.querySelector('input[name="reportType"]:checked').value;
  const mediaFile = document.getElementById('media').files[0];

  // Convert the media file to a Base64 string
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Convert media file to Base64 so it can send it across to index.js
  let mediaBase64 = '';
  if (mediaFile) {
    mediaBase64 = await convertToBase64(mediaFile);
  }

  const report = {
    location,
    issueType: reportType,
    description,
    picture: mediaBase64  
  };

  try {
    const response = await fetch('http://localhost:8081/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(report)  // Send the report as JSON
    });

    if (!response.ok) {
      throw new Error('Failed to submit report');
    }

    const data = await response.json();
    console.log('Report submitted successfully:', data);

    alert('Report submitted successfully!');

    // Reset the form after submission
    document.getElementById('reportForm').reset();

  } catch (error) {
    console.error('Error submitting report:', error);
    alert('Failed to submit report. Please try again.');
  }
});
