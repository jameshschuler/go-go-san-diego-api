import { Activity, Location, LocationType } from "../types.ts";
import { commonActivities } from "./activities.ts";

export const locations: Location[] = [
  {
    name: "North Park",
    activities: [...commonActivities, Activity.Brewery, Activity.Drink],
    coords: {
      latitude: "32.74846 N",
      longitude: "117.13013 W",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Little Italy",
    activities: [...commonActivities],
    coords: {
      latitude: "32.72568 N",
      longitude: "117.16813 W",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Balboa Park",
    activities: [...commonActivities, Activity.Zoo, Activity.Museum],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Park,
  },
  {
    name: "Chula Vista",
    activities: [...commonActivities, Activity.Mountain],
    coords: {
      latitude: "32.64106 N",
      longitude: "117.08439 W",
    },
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
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "La Jolla",
    activities: [...commonActivities],
    coords: {
      latitude: "32.84067 N",
      longitude: "117.25821 W",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "South Park",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "National City",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "El Cajon",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Mission Valley",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Mission Hills",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Hillcrest",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Bankers Hill",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Pacific Beach",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Ocean Beach",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Imperial Beach",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "La Mesa",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Escondido",
    activities: [...commonActivities, Activity.SafariPark],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Mission Trails Regional Park",
    activities: [Activity.BikeRide, Activity.Hike, Activity.Mountain],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Park,
  },
  {
    name: "Lemon Grove",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Bonita",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Santee",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Coronado",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
  {
    name: "Barrio Logan",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Cortez Hill",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "East Village",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Sherman Heights",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Gaslamp",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Core District",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Golden Hill",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Grant Hill",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Logan Heights",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Encanto",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "City Heights",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "University Heights",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Burlingame",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Normal Heights",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Cherokee Point",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Kensington",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Talmadge",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Sunset Cliffs",
    activities: [...commonActivities],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.Neighborhood,
  },
  {
    name: "Del Mar",
    activities: [...commonActivities, Activity.BeachDay, Activity.BeachWalk],
    coords: {
      latitude: "",
      longitude: "",
    },
    type: LocationType.City,
  },
];
