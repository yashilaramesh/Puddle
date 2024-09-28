const express = require('express');
const connectDB = require('./db');
const Report = require('./models/Report');
const cors = require('cors');
const moment = require('moment-timezone')

const app = express();

// Middleware
app.use(cors());  // need or else it'll randomly reject requests
app.use(express.json());  // parse json

connectDB(); // connect to mongodb

// post route
app.post('/api/reports', async (req, res) => {
  try {
    const timezone = 'America/New_York';
    const localTimeStamp = moment().tz(timezone).toDate();
    
    const reportData = {
      ...req.body,
      timestamp: localTimeStamp
    };

    const newReport = new Report(reportData);  // make new report
    const savedReport = await newReport.save();  // save report
    res.json(savedReport);  // return saved report
  } catch (err) {
    console.error(err.message); // log error to console
    res.status(500).send('Server error'); // 500 error = smth wrong
  }
});


// get route
app.get('/api/reports', async (req, res) => {
  try {
    const timezone = 'America/New_York';
    const reports = await Report.find();  // get all reports from db

    // Convert each report's timestamp to the desired timezone
    const convertedReports = reports.map(report => ({
      ...report.toObject(),
      timestamp: moment(report.timestamp).tz(timezone).format()
    }));

    res.json(convertedReports); // send the reports with the converted timestamp
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// admin put route
app.put('/admin/reports/:id', async (req, res) => { // it is /admin. be aware. i spent 30 min debugging just to realize i put the wrong url.
    try {
      const { status } = req.body;  // get new status
  
      const report = await Report.findById(req.params.id); // get report
  
      if (!report) {
        return res.status(404).json({ msg: 'Report not found' });
      }
  
      report.status = status; // update status
  
      if (status === 'Resolved') { // if resolved, delete report
        await Report.findByIdAndDelete(req.params.id);
        return res.json({ msg: 'Report resolved' });
      }
  
      // save status (not resolved)
      const updatedReport = await report.save();
      res.json(updatedReport);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

// start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
