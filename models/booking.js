// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const bookingDataPath = path.join(rootDir, "data", "bookings.json");

module.exports = class Booking {
  constructor(homeId, userName, email, phone, checkIn, checkOut) {
    this.homeId = homeId;
    this.userName = userName;
    this.email = email;
    this.phone = phone;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
  }

  save(callback) {
    Booking.fetchAll((bookings) => {
      const newBooking = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        ...this
      };
      bookings.push(newBooking);
      fs.writeFile(bookingDataPath, JSON.stringify(bookings, null, 2), callback);
    });
  }

  static fetchAll(callback) {
    fs.readFile(bookingDataPath, (err, data) => {
      if (err) {
        return callback([]);
      }
      try {
        callback(JSON.parse(data));
      } catch (parseError) {
        callback([]);
      }
    });
  }

  static findById(id, callback) {
    Booking.fetchAll(bookings => {
      const booking = bookings.find(b => b.id === id);
      callback(booking);
    });
  }

  static deleteById(delBookingId, callback) {
    Booking.fetchAll(bookings => {
      bookings = bookings.filter(booking => booking.id !== delBookingId);
      fs.writeFile(bookingDataPath, JSON.stringify(bookings, null, 2), callback);
    });
  }
};
