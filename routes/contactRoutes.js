const express = require('express');
const router = express.Router();
const { getSingleContact, 
    CreateContact,
    deleteContact,
    getAllContacts,
    UpdateContact } = require('../controllers/contactController');

// Define a route for handling GET requests to get all contacts
router.get('/',getAllContacts );

// Define a route for handling POST requests to create a new contact
router.post('/',CreateContact );

// Define a route for handling GET requests to get a single contact by ID
router.get('/:id', getSingleContact);

// Define a route for handling PUT requests to update a contact by ID
router.put('/:id', UpdateContact);

// Define a route for handling DELETE requests to delete a contact by ID
router.delete('/:id',deleteContact );

module.exports = router;
