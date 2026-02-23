const Favourite = require("../models/favourite");
const Home = require("../models/home");
const Booking = require("../models/booking");
const recommendationService = require("../services/recommendationService");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    Favourite.getFavourites(favourites => {
      const homesWithFav = registeredHomes.map(home => ({
        ...home,
        isFavourite: favourites.includes(home.id)
      }));
      
      // Get AI recommendations based on user's favourites
      const recommendations = recommendationService.getRecommendations(
        registeredHomes, 
        favourites, 
        3
      );
      
      res.render("store/index", {
        registeredHomes: homesWithFav,
        recommendations: recommendations,
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
      Home.fetchAll((allHomes) => {
        Favourite.getFavourites(favourites => {
          const homeWithFav = {
            ...home,
            isFavourite: favourites.includes(homeId)
          };
          
          // Get similar properties using AI recommendation
          const similarProperties = recommendationService.getSimilarProperties(
            home,
            allHomes,
            3
          );
          
          res.render("store/home-detail", {
            home: homeWithFav,
            similarProperties: similarProperties,
            pageTitle: "Home Detail",
            currentPage: "Home",
          });
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
