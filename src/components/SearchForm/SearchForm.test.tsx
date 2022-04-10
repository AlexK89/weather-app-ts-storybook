import { fireEvent, render, waitFor } from "@testing-library/react";
import { weatherApi } from "api/weather";
import { SearchForm } from "./SearchForm";

const getLocationsListSpy = jest.spyOn(weatherApi, "getLocationsList");
getLocationsListSpy.mockResolvedValue([
  {
    name: "Lodnon",
    state: "England",
    country: "GB",
  },
]);

describe("SearchForm", () => {
  test("renders correctly with props", () => {
    const { queryByTestId } = render(
      <SearchForm onLocationSelect={() => {}} />
    );
    expect(queryByTestId("search-input")).toBeTruthy();
  });

  test("trigger api call on input change", async () => {
    const onLocationSelect = jest.fn();
    const { getByTestId } = render(
      <SearchForm onLocationSelect={onLocationSelect} />
    );
    const input = getByTestId("search-input");

    fireEvent.change(input, { target: { value: "London" } });

    await waitFor(() => expect(getLocationsListSpy).toHaveBeenCalledTimes(1));
  });
});
