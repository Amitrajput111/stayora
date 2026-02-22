
// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        return callback(new Error("Home is already marked favourite"));
      }
      favourites.push(homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(favourites, null, 2), callback);
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
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

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homeIds, null, 2), callback);
    });
  }
};
