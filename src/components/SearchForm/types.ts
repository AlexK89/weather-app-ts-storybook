export interface Location {
  country: string;
  lat: number;
  local_names: Record<string, string>;
  lon: number;
  name: string;
  state: string;
}

export interface SearchFormProps {
  onLocationSelect: (location: Location | null) => void;
}
