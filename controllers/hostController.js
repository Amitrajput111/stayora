const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId, home => {
    if (!home) {
      return res.redirect("/host/host-home-list");
    }

    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  );
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save((error) => {
    if (error) {
      console.error("Error adding home:", error);
      return res.status(500).render("404", {
        pageTitle: "Error",
        currentPage: "error"
      });
    }
    res.redirect("/host/home-added");
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.id = id;
  home.save((error) => {
    if (error) {
      console.error("Error editing home:", error);
      return res.status(500).render("404", {
        pageTitle: "Error",
        currentPage: "error"
      });
    }
    res.redirect("/host/host-home-list");
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.deleteById(homeId, error => {
    if (error) {
      console.error("Error deleting home:", error);
    }
    res.redirect("/host/host-home-list");
  });
};

exports.getHomeAdded = (req, res, next) => {
  res.render("host/home-added", {
    pageTitle: "Property Added",
    currentPage: "addHome"
  });
};
