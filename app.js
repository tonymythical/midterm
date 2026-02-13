import express from "express";

const app = express();

const PORT = 3001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const values = [];

app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get('/thank-you', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.get('/admin', (req, res) => {
    res.send(values);
});

app.post('/submit-order', (req, res) => {
    const value = {
        destination: req.body.destination,
        travelers: req.body.travelers,
        departureDate: req.body.departureDate
    };
    values.push(value);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
