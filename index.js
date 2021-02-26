const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();

app.use(cors());
app.use(bp.json());

let reviews = [];

app.get('/', (req, res) => {
    res.json(reviews);
})

app.post('/addReview', (req, res) => {
    reviews.push({ name: req.body.name, rating: req.body.rating, email: req.body.email, phone: req.body.phone, message: req.body.message });
    console.log(req.body)
    res.redirect('/');
})

app.get('/bvefrv2reh9fg5bfvv8ry9n5bybvrvfnhy4btvvfhhygbt6gvdc2r', (req, res) => {
    reviews = [];
    console.log('All reviews were deleted')
    res.send('Deleted')
})

app.listen(process.env.PORT||8080)
