// https://appdividend.com/2018/08/22/express-post-request-example-tutorial/#Express_Post_Request_Example_Tutorial
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apartments = [
    {
        id:"1",
        title: "Fantastic apartment middle of Barcelona",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "paral.lel 21",
        city: "Barcelona",
        country: "Spain",
        price: "1000",
        size: "100",
        url: "https://q-cf.bstatic.com/images/hotel/max1024x768/103/103540397.jpg",
        available: true,
    },
    {
        id:"2",
        title: "Fantastic apartment middle of Tokyo",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "shibuya 3",
        city: "Tokyo",
        country: "Japan",
        price: "3000",
        size: "70",
        url: "https://cf.ltkcdn.net/interiordesign/images/std/206259-668x450-Japanese-style-Interior.jpg",
        available: false,
    },
    {
        id:"3",
        title: "Amazing penthouse in Sydney",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "sydney 3",
        city: "Sydney",
        country: "Australia",
        price: "6000",
        size: "150",
        url: "https://blog.hotelscombined.com/wp-content/uploads/2017/10/Serviced-Apartments-Sydney.jpg",
        available: true,
    },
    {
        id:"4",
        title: "Old style apartment in Salamanca",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "calle de Salamanca, 3",
        city: "Madrid",
        country: "Spain",
        price: "1000",
        size: "80",
        url: "https://dwseyrrb5jkfs.cloudfront.net/unsafe/1024x683/s3-eu-west-1.amazonaws.com/sawdays-production-assets/wp-content/uploads/2019/06/04112838/b6_w_livingrm_2.jpg",
        available: true,
    },
    {
        id:"5",
        title: "Luxury Villa in Buenos Aires",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "calle de buenos aires, 7",
        city: "Buenos Aires",
        country: "Argentina",
        price: "600",
        size: "100",
        url: "http://www.luxuryba.com/fotos/C_0112.jpg",
        available: true,
    },
    {
        id:"6",
        title: "Lovely downtown apartment",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        address: "calle de buenos aires, 7",
        city: "Cairo",
        country: "Egypt",
        price: "600",
        size: "90",
        url: "https://media-cdn.tripadvisor.com/media/vr-splice-j/06/74/6e/f3.jpg",
        available: true,
    }
];

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get all apartments 
app.get('/api/apartments', (req, res) => {
    res.status(200).json(apartments);
});

// Get a specific apartment
app.get('/api/apartments/:id', (req, res) => {
    
  let apartment = apartments.find(apartment => apartment.id === req.params.id);

  if (apartment)
    res.status(200).json(apartment);
  else
    res.status(400).json({msg: `Apartment not found with id ${req.params.id}`});
});

// Update the state of the apartment available based on the id
app.put('/api/apartments/:id', (req, res) => {

    let apartmentsToUpdate = apartments.find(apartment => apartment.id === req.params.id);
    
    if(!apartmentsToUpdate) {
        res.status(404).json({msg:`Unexistent apartment with id ${req.params.id}`});
    }
    
    apartmentsToUpdate.available = !apartmentsToUpdate.available
    res.status(200).send(apartmentsToUpdate)
});

// Create a new apartment 
app.post('/api/apartments', (req, res) => {
   if(apartments.find(apartment => apartment.id === req.body.id)) {
       res.status(400).send({msg: `Apartment with id ${req.body.id} already exists`});
       return;
   }
   const newApartment = {
       id: req.body.id,
       title: req.body.title,
       description: req.body.description,
       address: req.body.address,
    //    city: req.body.city,
    //    country: req.body.country,
    //    price: req.body.price,
    //    size: req.body.size,
    //    url: req.body.url,
    //    available: req.body.available
   }
   apartments.push(newApartment);

   res.status(201).send(newApartment);
})

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));