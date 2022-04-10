import { UnitsSystem } from "./types";

export const weatherApi = {
  getCurrentWeather: async (
    lat: number,
    lon: number,
    unitsSystem: UnitsSystem = UnitsSystem.metric
  ) => {
    try {
      const weatherData = await fetch(
        `${process.env.REACT_APP_WEATHER_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unitsSystem}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      ).then((res) => res.json());

      return weatherData;
    } catch (error) {
      console.error(error);

      return [];
    }
  },
  getFiveDaysWeather: async (
    lat: number,
    lon: number,
    unitsSystem: UnitsSystem = UnitsSystem.metric
  ) => {
    try {
      const weatherData = await fetch(
        `${process.env.REACT_APP_WEATHER_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unitsSystem}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      ).then((res) => res.json());

      return weatherData;
    } catch (error) {
      console.error(error);

      return [];
    }
  },
  getLocationsList: async (locationQuery: string, limit: number = 5) => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_WEATHER_URL}/geo/1.0/direct?q=${locationQuery}&limit=${limit}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      ).then((res) => res.json());

      return data;
    } catch (error) {
      console.error(error);

      return [];
    }
  },
};
