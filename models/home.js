// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save(callback) {
    Home.fetchAll((registeredHomes) => {
      if (this.id) { // edit home case
        registeredHomes = registeredHomes.map(home => 
          home.id === this.id ? this : home);
      } else { // add home case
        this.id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes, null, 2), (error) => {
        if (callback) callback(error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
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

  static findById(homeId, callback) {
    this.fetchAll(homes => {
      const homeFound = homes.find(home => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    const Favourite = require("./favourite");
    this.fetchAll(homes => {
      homes = homes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
        if (error) {
          return callback(error);
        }
        Favourite.deleteById(homeId, callback);
      });
    });
  }
};