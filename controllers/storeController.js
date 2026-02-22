const Favourite = require("../models/favourite");
const Home = require("../models/home");
const Booking = require("../models/booking");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Favourite.getFavourites(favourites => {
      const homesWithFav = registeredHomes.map(home => ({
        ...home,
        isFavourite: favourites.includes(home.id)
      }));
      res.render("store/index", {
        registeredHomes: homesWithFav,
        pageTitle: "airbnb Home",
        currentPage: "index",
      });
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Favourite.getFavourites(favourites => {
      let homesWithFav = registeredHomes.map(home => ({
        ...home,
        isFavourite: favourites.includes(home.id)
      }));

      const searchQuery = req.query.search;
      if (searchQuery) {
        homesWithFav = homesWithFav.filter(home =>
          home.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      res.render("store/home-list", {
        registeredHomes: homesWithFav,
        pageTitle: "Homes List",
        currentPage: "Home",
      });
    });
  });
};

exports.getBookings = (req, res, next) => {
  Booking.fetchAll(bookings => {
    res.render("store/bookings", {
      bookings: bookings,
      pageTitle: "My Bookings",
      currentPage: "bookings",
    });
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id)).map(home => ({
        ...home,
        isFavourite: true
      }));
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourites",
      });
    });
  });
};

exports.postAddToFavourite = (req, res, next) => {
  Favourite.addToFavourite(req.body.id, error => {
    if (error) {
      console.error("Error adding to favourites:", error);
    }
    res.redirect("/favourites");
  });
};

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, error => {
    if (error) {
      console.error("Error removing from favourites:", error);
    }
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, home => {
    if (!home) {
      res.redirect("/homes");
    } else {
      Favourite.getFavourites(favourites => {
        const homeWithFav = {
          ...home,
          isFavourite: favourites.includes(homeId)
        };
        res.render("store/home-detail", {
          home: homeWithFav,
          pageTitle: "Home Detail",
          currentPage: "Home",
        });
      });
    }
  });
};

exports.postBookHome = (req, res, next) => {
  const { userName, email, phone, checkIn, checkOut } = req.body;
  const homeId = req.params.homeId;
  
  const booking = new Booking(homeId, userName, email, phone, checkIn, checkOut);
  booking.save((error) => {
    if (error) {
      console.error("Error creating booking:", error);
      return res.status(500).render("404", {
        pageTitle: "Error",
        currentPage: "error"
      });
    }
    res.redirect("/bookings");
  });
};
