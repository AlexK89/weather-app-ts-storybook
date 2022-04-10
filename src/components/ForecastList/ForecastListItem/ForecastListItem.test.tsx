import { render } from "@testing-library/react";
import { UnitsSystem } from "api/weather/types";
import { ForecastListItem } from "./ForecastListItem";

describe("ForeCastListItem", () => {
  const props = {
    unitSystem: UnitsSystem.metric,
    temperature: 10,
    icon: "04d",
    speed: 2,
    humidity: 60,
    pressure: 1000,
  };

  test("should render component with temperature", () => {
    const { getByTestId } = render(<ForecastListItem {...props} />);
    const listItemElement = getByTestId("forecast-list-item");
    const itemText = listItemElement.textContent;

    expect(itemText).toContain("10°C");
  });

  test("should render component with wind speed", () => {
    const { getByTestId } = render(<ForecastListItem {...props} />);
    const listItemElement = getByTestId("forecast-list-item");
    const itemText = listItemElement.textContent;

    expect(itemText).toContain("Wind: 2 m/s");
  });

  test("should render component with humidity", () => {
    const { getByTestId } = render(<ForecastListItem {...props} />);
    const listItemElement = getByTestId("forecast-list-item");
    const itemText = listItemElement.textContent;

    expect(itemText).toContain("Humidity: 60 %");
  });

  test("should render component with pressure", () => {
    const { getByTestId } = render(<ForecastListItem {...props} />);
    const listItemElement = getByTestId("forecast-list-item");
    const itemText = listItemElement.textContent;

    expect(itemText).toContain("Pressure: 1000 hPa");
  });

  test("should render component with icon", () => {
    const { getByTestId } = render(<ForecastListItem {...props} />);
    const listItemElement = getByTestId("forecast-list-item");
    const img = listItemElement.querySelector("img");

    expect(img?.src).toContain("04d");
  });

  test("should render component with other unit system", () => {
    const { getByTestId } = render(
      <ForecastListItem {...props} unitSystem={UnitsSystem.standard} />
    );
    const listItemElement = getByTestId("forecast-list-item");
    const itemText = listItemElement.textContent;

    expect(itemText).toContain("10K");
  });
});
