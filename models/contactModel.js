const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add the contact name"],
  },
  email: {
    type: String,
    required: [true, "Please enter a contact email"],
  },
  phone: {
    type: String,
    required: [true, "Please enter a contact Phone Number"],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);
