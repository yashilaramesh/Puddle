// Fetch and display all reports in the admin dashboard
async function fetchReports() {
    try {
      const response = await fetch('http://localhost:8081/api/reports');  // Fetch reports from backend
      if (!response.ok) {
        throw new Error('Failed to fetch reports');
      }
  
      const reports = await response.json();
      displayReports(reports);  // Function to dynamically display reports in HTML
  
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }
  
  // Display reports in the admin dashboard
  function displayReports(reports) {
    const reportsContainer = document.getElementById('reportsContainer');
    reportsContainer.innerHTML = '';  // Clear the container first
  
    if (reports.length === 0) {
      reportsContainer.innerHTML = '<p>No reports available.</p>';
      return;
    }
  
    // Create an HTML block for each report
    reports.forEach(report => {
      const reportDiv = document.createElement('div');
      reportDiv.classList.add('report-item');
      reportDiv.innerHTML = `
        <h3>Issue Type: ${report.issueType}</h3>
        <p><strong>Location:</strong> ${report.location}</p>
        <p><strong>Description:</strong> ${report.description}</p>
        <p><strong>Status:</strong> ${report.status}</p>
        ${report.picture ? `<img src="${report.picture}" alt="Report image" style="max-width: 200px;">` : ''}
        <label for="status-${report._id}">Update Status:</label>
        <select id="status-${report._id}">
          <option value="Submitted" ${report.status === 'Submitted' ? 'selected' : ''}>Submitted</option>
          <option value="In progress" ${report.status === 'In progress' ? 'selected' : ''}>In progress</option>
          <option value="Resolved" ${report.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
        </select>
        <button class="update-btn" data-id="${report._id}">Update Status</button>
        <hr>
      `;
  
      reportsContainer.appendChild(reportDiv);
    });
  
    // Add event listeners for the update buttons
    const updateButtons = document.querySelectorAll('.update-btn');
    updateButtons.forEach(button => {
      button.addEventListener('click', function () {
        const reportId = this.getAttribute('data-id');
        updateReportStatus(reportId);
      });
    });
  }
  
  // Update the status of a report
  async function updateReportStatus(reportId) {
    console.log(`Update status clicked for report: ${reportId}`);  // Debugging line
  
    const selectedStatus = document.getElementById(`status-${reportId}`).value;
    console.log(`Selected status for report ${reportId}: ${selectedStatus}`);  // Debugging line
  
    try {
      const response = await fetch(`http://localhost:8081/admin/reports/${reportId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: selectedStatus })  // Send new status as JSON
      });
  
      console.log('PUT request sent to:', `http://localhost:8081/admin/reports/${reportId}`);  // Debugging line
  
      if (!response.ok) {
        throw new Error('Failed to update report');
      }
  
      const data = await response.json();
      console.log('Report updated:', data);
  
      // Optionally, re-fetch and refresh the list of reports
      await fetchReports();
  
      alert('Report status updated successfully!');
    } catch (error) {
      console.error('Error updating report:', error);
      alert('Failed to update report status.');
    }
  }
  
  // Call the fetchReports function when the page loads
  window.onload = fetchReports;
  