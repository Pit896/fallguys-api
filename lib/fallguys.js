const Achievements = require("./api/achievements/Achievements");
const Articles = require("./api/articles/Articles");
const SkinColors = require("./api/skins/colors/Colors");
const SkinEmotes = require("./api/skins/emotes/Emotes");
const SkinCelebrations = require("./api/skins/celebrations/Celebrations");
const SkinFaces = require("./api/skins/faces/Faces");
const FreeSkins = require("./api/skins/free/Free");
const SkinPatterns = require("./api/skins/patterns/Patterns");
const Skins = require("./api/skins/Skins");
const Daily = require("./api/skins/Daily");

class FallGuys {
  static crownIcon = "https://cdn.esportinfo.gg/fallguy/img/skins/crowns_icon.png";
  static kudosIcon = "https://cdn.esportinfo.gg/fallguy/img/skins/kudos_icon.png";

  static async getAchievements(){
    return await Achievements.init();
  }

  static async getArticles(){
    return await Articles.init();
  }

  static async getColors(){
    return await SkinColors.init();
  }

  static async getEmotes(){
    return await SkinEmotes.init();
  }

  static async getCelebrations(){
    return await SkinCelebrations.init();
  }

  static async getFaces(){
    return await SkinFaces.init();
  }

  static async getFreeSkins(){
    return await FreeSkins.init();
  }

  static async getPatterns(){
    return await SkinPatterns.init();
  }

  static async getSkins(){
    return await Skins.init();
  }

  static async getDaily(){
    return await Daily.init();
  }
}

module.exports = FallGuys;