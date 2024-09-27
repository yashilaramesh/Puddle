// form.js
import { submitReport } from './api.js';

document.querySelector('#reportForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const description = document.querySelector('#description').value;
    const location = document.querySelector('#location').value;
    const media = document.querySelector('#media').files[0];

    const formData = new FormData();
    formData.append('description', description);
    formData.append('location', location);
    formData.append('media', media);

    await submitReport(formData);

    alert('Report submitted successfully!');
});
