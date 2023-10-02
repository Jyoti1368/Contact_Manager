const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


const getSingleContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404)
    throw new Error("contact Not found ")
  }
  res.json(contact);
};

const CreateContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  })
  res.json(contact);
});

const UpdateContact = asyncHandler(async (req, res) => {
  const contact = await  Contact.findById(req.params.id)
  if(!contact){
    res.status(404)
    throw new Error("contact not found mu dear")
  }
  
const updatedContact = await Contact.findByIdAndUpdate(
  req.params.id,
  req.body,
  {new: true}
);


  res.json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
const contact = await Contact.findById(req.params.id)
if(!contact)
{
  res.status(404)
  throw new Error ("contact not found");

}

await Contact.deleteMany();

  res.json(contact);
});

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  
  
  res.json(contacts );
});

module.exports = {
  getSingleContact,
  CreateContact,
  deleteContact,
  getAllContacts,
  UpdateContact,
};
