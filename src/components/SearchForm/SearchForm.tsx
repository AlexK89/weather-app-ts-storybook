import { FormEvent, useEffect, useState } from "react";
import { weatherApi } from "api/weather";
import { SearchFormProps, Location } from "./types";
import { useDebounce } from "hooks/useDebounce";

export const SearchForm: React.FC<SearchFormProps> = ({ onLocationSelect }) => {
  const [locationName, setLocationName] = useState("");
  const [locationsList, setLocationsList] = useState([]);
  const [isListVisible, setIsListVisible] = useState(false);
  const debouncedLocationName = useDebounce(locationName, 500);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const list = await weatherApi.getLocationsList(locationName);
      isMounted && setLocationsList(list);
    };

    locationName && init();

    return () => {
      isMounted = false;
    };
  }, [debouncedLocationName]);

  const locationChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    setLocationName(event.currentTarget.value);

    if (!event.currentTarget.value) setLocationsList([]);
  };

  const selectLocationHandler = (location: Location) => {
    onLocationSelect(location);
    setLocationName("");
    setLocationsList([]);
  };

  return (
    <div className={"w-11/12 max-w-md mx-auto my-4 relative"}>
      <input
        data-testid="search-input"
        type="text"
        placeholder="Please pick the city"
        className={
          "w-full p-2 border-b-2 border-gray-400 focus:border-sky-400 outline-0 placeholder:text-grey-400 text-sky-400"
        }
        value={locationName}
        onChange={locationChangeHandler}
        onFocus={() => setIsListVisible(true)}
        // dirty version to show the list on focus
        onBlur={() => setTimeout(() => setIsListVisible(false), 200)}
      />

      {!!locationsList?.length && isListVisible && (
        <ul
          data-testid={"location-list"}
          className={"absolute w-full rounded-b-md shadow-md bg-white"}
        >
          {locationsList.map((location, index) => {
            const { name, state, country } = location;

            return (
              <li
                key={index}
                data-testid={`location-item-${index}`}
                className={
                  "transition duration-150 hover:bg-sky-400 hover:text-white p-2 cursor-pointer"
                }
                onClick={() => selectLocationHandler(location)}
              >
                {name}, {state} ({country})
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
