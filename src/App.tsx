import { weatherApi } from "api/weather";
import { ForecastList } from "components/ForecastList";
import { SearchForm } from "components/SearchForm";
import { Location } from "components/SearchForm/types";
import { useEffect, useState } from "react";

const App = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [fiveDaysForecastData, setFiveDaysForecastData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const fiveDaysForecast = location
        ? await weatherApi.getFiveDaysWeather(location?.lat, location?.lon)
        : [];

      const dailyForecast = fiveDaysForecast.list.filter(
        (day: Record<string, any>, index: number) => index % 8 === 0
      );

      isMounted && setFiveDaysForecastData(dailyForecast);
    };

    location && init();

    return () => {
      isMounted = false;
    };
  }, [location]);

  const locationSelectHandler = (selectedLocation: Location | null) =>
    setLocation(selectedLocation);

  return (
    <div className="App">
      <SearchForm onLocationSelect={locationSelectHandler} />
      {location?.name && (
        <h1 className={"w-11/12 max-w-md mx-auto p-2 rounded-md text-center bg-sky-400 text-white text-xl"}>
          {location.name}, {location.state} ({location.country})
        </h1>
      )}
      <ForecastList forecastList={fiveDaysForecastData} />
    </div>
  );
};

export default App;
