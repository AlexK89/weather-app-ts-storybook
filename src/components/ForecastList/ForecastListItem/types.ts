import { UnitsSystem } from "api/weather/types";

export interface ForecastListItemProps {
  unitSystem: UnitsSystem;
  temperature: number;
  icon: string;
  speed: number;
  humidity: number;
  pressure: number;
}
