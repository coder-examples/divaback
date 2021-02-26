const express = require('express');
const cors = require('cors');
const bp = require('body-parser');

const app = express();

app.use(cors());
app.use(bp.json());

let reviews = [];

class Review {
    constructor({ name, rating, message, phone, email }) {
        this.name = name;
        this.rating = rating;
        this.message = message;
        this.phone = phone;
        this.email = email;
    }
}

app.get('/', (req, res) => {
    res.json(reviews);
})

app.post('/addReview', (req, res) => {
    reviews.push(new Review(req.body));
    console.log(req.body)
    res.send(req.body)
})

app.get('/bvefrv2reh9fg5bfvv8ry9n5bybvrvfnhy4btvvfhhygbt6gvdc2r', (req, res) => {
    reviews = [];
    console.log('All reviews were deleted')
    res.send('Deleted')
})

app.listen(process.env.PORT || 8080 )
