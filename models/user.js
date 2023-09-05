// const express = require('express');

const mongoose = require('mongoose');

// Define a User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    // Implement password hashing and salting for security.
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50,
  },
  profilePicture: {
    type: String,
    default: 'default-profile.jpg',
  },
  role: {
    type: String,
    enum: ['customer', 'deliveryDriver', 'admin'],
    default: 'customer',
  },
  address: {
    street: { type: String, trim: true, maxlength: 100 },
    city: { type: String, trim: true, maxlength: 50 },
    district: { type: String, trim: true, maxlength: 50 },
    postalCode: { type: String, trim: true, maxlength: 10 },
  },
  phoneNumber: {
    type: String,
    match: /^(?:\+880|0)(?:13\d{1}|14\d{1}|15\d{1}|16\d{1}|17\d{1}|18\d{1}|19\d{1})\d{8}$/,
  },
//   paymentInfo: {
//     cardNumber: { type: String, trim: true },
//     expirationDate: { type: String, trim: true },
//     // Add more payment-related fields like billing address, card type, etc.
//   },
//   orderHistory: [
//     {
//       orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
//       date: { type: Date, default: Date.now },
//       // Include more order details like restaurant name, items ordered, status, etc.
//     },
//   ],
//   favorites: [
//     {
//       restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
//       // Include more restaurant-related details.
//     },
//   ],
//   cart: [
//     {
//       menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
//       quantity: { type: Number, default: 1 },
//       // Include additional details like special instructions.
//     },
//   ],
//   notifications: [
//     {
//       message: { type: String },
//       date: { type: Date, default: Date.now },
//       // Include more notification-related fields.
//     },
//   ],
  // Other custom fields and associations as needed.
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
},{timestamps: true,versionKey:false });

// Define a model based on the schema
const User = mongoose.model('UserF', userSchema);

module.exports = User;
