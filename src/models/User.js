const mongoose = require('mongoose');

// Schema 
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isSubscriber: { type: Boolean, default: false }
});

// Model compilation
const User = mongoose.model('User', userSchema);

module.exports = User;
