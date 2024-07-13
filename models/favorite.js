const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the favorite schema
const favoriteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  campsites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campsite'
    }
  ]
}, {
  timestamps: true
});

// Create and export the Favorite model
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
