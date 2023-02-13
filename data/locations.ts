import { Activity, Location, LocationType } from "../types.ts";
import { commonActivities } from "./activities.ts";

export const locations: Location[] = [
  {
    name: "North Park",
    activities: [...commonActivities, Activity.Brewery, Activity.Drink],
    type: LocationType.Neighborhood,
  },
  {
    name: "Little Italy",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Balboa Park",
    activities: [...commonActivities, Activity.Zoo, Activity.Museum],
    type: LocationType.Park,
  },
  {
    name: "Chula Vista",
    activities: [...commonActivities, Activity.Mountain],
    type: LocationType.City,
  },
  {
    name: "Mission Beach",
    activities: [
      ...commonActivities,
      Activity.BeachDay,
      Activity.BeachWalk,
      Activity.Brewery,
      Activity.Drink,
    ],
    type: LocationType.Neighborhood,
  },
  {
    name: "La Jolla",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "South Park",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "National City",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "El Cajon",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Mission Valley",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Mission Hills",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Hillcrest",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Bankers Hill",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Pacific Beach",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Ocean Beach",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Imperial Beach",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "La Mesa",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Escondido",
    activities: [...commonActivities, Activity.SafariPark],
    type: LocationType.City,
  },
  {
    name: "Mission Trails Regional Park",
    activities: [Activity.BikeRide, Activity.Hike, Activity.Mountain],
    type: LocationType.Park,
  },
  {
    name: "Lemon Grove",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Bonita",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Santee",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Coronado",
    activities: [...commonActivities],
    type: LocationType.City,
  },
  {
    name: "Barrio Logan",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Cortez Hill",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "East Village",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Sherman Heights",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Gaslamp",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Core District",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Golden Hill",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Grant Hill",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Logan Heights",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Encanto",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "City Heights",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "University Heights",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Burlingame",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Normal Heights",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Cherokee Point",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Kensington",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Talmadge",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Sunset Cliffs",
    activities: [...commonActivities],
    type: LocationType.Neighborhood,
  },
  {
    name: "Del Mar",
    activities: [...commonActivities, Activity.BeachDay, Activity.BeachWalk],
    type: LocationType.City,
  },
];
