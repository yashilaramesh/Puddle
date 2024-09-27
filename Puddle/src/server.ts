// // src/server.ts
// import express from 'express';
// import { json } from 'body-parser';
// import { createConnection } from 'typeorm';
// import { reportSchema } from './models/Report';
// import multer from 'multer';

// const app = express();
// app.use(json());

// // Set up file storage for media uploads
// const upload = multer({ dest: 'uploads/' });

// // Endpoint to submit a drainage report
// app.post('/api/reports', upload.single('media'), async (req, res) => {
//     const { description, location } = req.body;
//     const media = req.file.path;

//     const report = report.create({
//         description,
//         location,
//         media,
//         status: 'Pending'
//     });
    
//     await report.save();
    
//     res.status(201).json(report);
// });

// // Connect to the database and start the server
// createConnection().then(() => {
//     app.listen(3000, () => {
//         console.log('Server is running on port 3000');
//     });
// });
