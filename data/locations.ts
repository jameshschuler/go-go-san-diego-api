import { Activity, Location, LocationType } from "../types.ts";

export const locations: Location[] = [
  {
    name: "North Park",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Neighborhood,
  },
  {
    name: "Little Italy",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Neighborhood,
  },
  {
    name: "Balboa Park",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Park,
  },
  {
    name: "Chula Vista",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.City,
  },
  {
    name: "Mission Beach",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Neighborhood,
  },
  {
    name: "La Jolla",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Neighborhood,
  },
  {
    name: "South Park",
    activities: [Activity.Coffee, Activity.Restaurant],
    type: LocationType.Neighborhood,
  },
];
