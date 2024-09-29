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
    `;

    reportsContainer.appendChild(reportDiv);
  });

}

window.onload = fetchReports;