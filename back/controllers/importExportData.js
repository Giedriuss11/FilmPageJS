const sendRes = require("../modules/sendRes");
const filmData = require("../dataBase/data");
let FilmsFinder = [];
let FilmName = "";

module.exports = {
  getLastFilm: async (req, res) => {
    if (FilmsFinder.length === 0) {
      FilmsFinder = filmData;
      sendRes(res, true, { films: FilmsFinder, category: "Film page" }, null);
    } else {
      sendRes(res, true, { films: FilmsFinder, category: FilmName }, null);
    }
  },
  searchByName: async (req, res) => {
    const { name } = req.body;

    FilmName = name;

    const films = filmData;

    function findObjectsByCategory(films, category) {
      const trimmedCategory = category.trim();
      const trimmedFilms = films.map((film) => ({
        ...film,
        category: film.category.map((cat) => cat.trim()),
      }));

      const lowercaseCategory = trimmedCategory.toLowerCase();

      if (
        lowercaseCategory === "all films" ||
        lowercaseCategory === "film page"
      ) {
        return trimmedFilms;
      }

      return trimmedFilms.filter((film) => {
        const categories = film.category.map((cat) => cat.toLowerCase());
        return categories.includes(lowercaseCategory);
      });
    }

    const results = findObjectsByCategory(films, name);

    FilmsFinder = results;

    sendRes(res, true, { films: results, category: FilmName }, null);
  },
  searchByKeyWord: async (req, res) => {
    const { word } = req.body;

    FilmWord = word;

    const films = FilmsFinder;

    function findObjectsByKey(films, keyword) {
      const trimmedKeyword = keyword.trim().toLowerCase();

      return films.filter((film) => {
        const title = film.title.toLowerCase();
        return title.includes(trimmedKeyword);
      });
    }

    const results = findObjectsByKey(films, word);

    sendRes(res, true, { films: results }, null);
  },
};
