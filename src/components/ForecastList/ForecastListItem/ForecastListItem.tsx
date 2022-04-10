import {
  HumidityUnitsSymbols,
  PressureUnitsSymbols,
  SpeedUnitsSymbols,
  TemperatureUnitsSymbols,
} from "api/weather/types";
import { ForecastListItemProps } from "./types";

export const ForecastListItem: React.FC<ForecastListItemProps> = ({
  unitSystem,
  temperature,
  icon,
  speed,
  humidity,
  pressure,
}) => {
  return (
    <li
      data-testid="forecast-list-item"
      className={
        "shadow-md mt-4 p-4 flex justify-between rounded-md bg-white hover:shadow-lg transition duration-150 hover:bg-sky-400 group cursor-pointer"
      }
    >
      <div className={"temperature"}>
        <div className={"current flex"}>
          <span className={"text-8xl text-sky-400 group-hover:text-white"}>
            {Math.round(temperature)}
            <span className={"text-sm"}>
              {TemperatureUnitsSymbols[unitSystem]}
            </span>
          </span>
          <span>
            <img
              src={`${process.env.REACT_APP_WEATHER_URL}/img/w/${icon}.png`}
              alt="weather condition icon"
            />
          </span>
        </div>
      </div>
      <ul className="main-info flex flex-col justify-between text-gray-400 group-hover:text-white">
        <li>
          <span className={"font-semibold"}>Wind:</span> {Math.round(speed)}{" "}
          {SpeedUnitsSymbols[unitSystem]}
        </li>
        <li>
          <span className={"font-semibold"}>Humidity:</span>{" "}
          {Math.round(humidity)} {HumidityUnitsSymbols[unitSystem]}
        </li>
        <li>
          <span className={"font-semibold"}>Pressure:</span>{" "}
          {Math.round(pressure)} {PressureUnitsSymbols[unitSystem]}
        </li>
      </ul>
    </li>
  );
};
