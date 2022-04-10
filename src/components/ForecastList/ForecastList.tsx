import { UnitsSystem } from "api/weather/types";
import { ForecastListItem } from "./ForecastListItem";
import { ForecastListProps } from "./types";

export const ForecastList: React.FC<ForecastListProps> = ({
  forecastList,
  unitSystem = UnitsSystem.metric,
}) => {
  return (
    <ul className={"w-11/12 max-w-md mx-auto mt-8"}>
      {forecastList.map((forecast, index) => {
        const { main, wind, weather } = forecast;

        return (
          <ForecastListItem
            key={index}
            unitSystem={unitSystem}
            temperature={main.temp}
            icon={weather[0].icon}
            speed={wind.speed}
            humidity={main.humidity}
            pressure={main.pressure}
          />
        );
      })}
    </ul>
  );
};
