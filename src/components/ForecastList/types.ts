import { UnitsSystem } from "api/weather/types";

export interface ForecastListProps {
  forecastList: Record<string, any>[];
  unitSystem?: UnitsSystem;
}
