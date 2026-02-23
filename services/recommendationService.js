// Simple AI/ML Recommendation System
// Uses collaborative filtering and content-based filtering

class RecommendationService {
  /**
   * Calculate similarity score between two properties
   * Based on location, price range, and rating
   */
  calculateSimilarity(home1, home2) {
    let score = 0;

    // Location similarity (same location = high score)
    if (home1.location.toLowerCase() === home2.location.toLowerCase()) {
      score += 0.4;
    }

    // Price similarity (within 30% range)
    const priceDiff = Math.abs(parseFloat(home1.price) - parseFloat(home2.price));
    const avgPrice = (parseFloat(home1.price) + parseFloat(home2.price)) / 2;
    const priceScore = Math.max(0, 1 - (priceDiff / avgPrice));
    score += priceScore * 0.3;

    // Rating similarity
    const ratingDiff = Math.abs(parseFloat(home1.rating) - parseFloat(home2.rating));
    const ratingScore = Math.max(0, 1 - (ratingDiff / 5));
    score += ratingScore * 0.3;

    return score;
  }

  /**
   * Get recommended properties based on user's favourites
   * @param {Array} allHomes - All available properties
   * @param {Array} favouriteIds - User's favourite property IDs
   * @param {number} limit - Number of recommendations to return
   */
  getRecommendations(allHomes, favouriteIds = [], limit = 3) {
    if (!allHomes || allHomes.length === 0) {
      return [];
    }

    // If user has no favourites, return popular properties (highest rated)
    if (favouriteIds.length === 0) {
      return allHomes
        .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
        .slice(0, limit);
    }

    // Get user's favourite properties
    const favouriteHomes = allHomes.filter(home => 
      favouriteIds.includes(home.id)
    );

    // Calculate recommendation scores for all non-favourite properties
    const recommendations = allHomes
      .filter(home => !favouriteIds.includes(home.id))
      .map(home => {
        // Calculate average similarity with all favourite properties
        let totalScore = 0;
        favouriteHomes.forEach(favHome => {
          totalScore += this.calculateSimilarity(home, favHome);
        });
        const avgScore = totalScore / favouriteHomes.length;

        return {
          ...home,
          recommendationScore: avgScore
        };
      })
      .sort((a, b) => b.recommendationScore - a.recommendationScore)
      .slice(0, limit);

    return recommendations;
  }

  /**
   * Get trending properties based on popularity
   * Simple algorithm: combines rating and random factor for variety
   */
  getTrendingProperties(allHomes, limit = 3) {
    if (!allHomes || allHomes.length === 0) {
      return [];
    }

    return allHomes
      .map(home => ({
        ...home,
        trendingScore: parseFloat(home.rating) * 0.7 + Math.random() * 0.3
      }))
      .sort((a, b) => b.trendingScore - a.trendingScore)
      .slice(0, limit);
  }

  /**
   * Get properties similar to a specific property
   * Used on detail pages to show "Similar Properties"
   */
  getSimilarProperties(targetHome, allHomes, limit = 3) {
    if (!targetHome || !allHomes || allHomes.length === 0) {
      return [];
    }

    return allHomes
      .filter(home => home.id !== targetHome.id)
      .map(home => ({
        ...home,
        similarityScore: this.calculateSimilarity(targetHome, home)
      }))
      .sort((a, b) => b.similarityScore - a.similarityScore)
      .slice(0, limit);
  }
}

module.exports = new RecommendationService();
