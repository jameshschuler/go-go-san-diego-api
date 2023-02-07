const LocationType = {
  Park: "Park",
  Neighborhood: "Neighborhood",
  City: "City",
} as const;

type LocationType = typeof LocationType[keyof typeof LocationType];

const Vibe = {
  Active: "Active",
  Chill: "Chill",
} as const;

type Vibe = typeof Vibe[keyof typeof Vibe];

interface ActivityDetail {
  name: string;
  description: string;
  vibe: Vibe;
}

interface Location {
  name: string;
  activities: ActivityDetail[];
  type: LocationType;
}

interface Activity {
  [key: string]: ActivityDetail;
}

export const Activity: Activity = {
  Coffee: {
    name: "Coffee",
    description: "Visit a Coffee Shop",
    vibe: Vibe.Chill,
  },
  Zoo: {
    name: "Zoo",
    description: "Visit the Zoo",
    vibe: Vibe.Active,
  },
  Restaurant: {
    name: "Restaurant",
    description: "Visit a Restaurant",
    vibe: Vibe.Chill,
  },
  Brewery: {
    name: "Brewery",
    description: "Visit a Brewery",
    vibe: Vibe.Chill,
  },
  Drink: {
    name: "Drink",
    description: "Grab a Cocktail",
    vibe: Vibe.Chill,
  },
  Museum: {
    name: "Museum",
    description: "Visit a Museum",
    vibe: Vibe.Chill,
  },
  Walk: {
    name: "Walk",
    description: "Go for a Walk",
    vibe: Vibe.Active,
  },
  BeachDay: {
    name: "Beach Day",
    description: "Day at the Beach",
    vibe: Vibe.Chill,
  },
  BeachWalk: {
    name: "Beach Walk",
    description: "Walk on the beach",
    vibe: Vibe.Active,
  },
  Hike: {
    name: "Hike",
    description: "Go for a hike",
    vibe: Vibe.Active,
  },
  Mountain: {
    name: "Mountain",
    description: "Climb a Mountain / Peak",
    vibe: Vibe.Active,
  },
  Movie: {
    name: "Movie",
    description: "Watch a Movie",
    vibe: Vibe.Chill,
  },
  ScooterRide: {
    name: "Scooter Ride",
    description: "Explore on a scooter",
    vibe: Vibe.Active,
  },
  Historic: {
    name: "Historic",
    description: "Visit somewhere / something historic",
    vibe: Vibe.Active,
  },
  BikeRide: {
    name: "Bike Ride",
    description: "Go for a Bike Ride",
    vibe: Vibe.Active,
  },
  BoatRide: {
    name: "Boat Ride",
    description: "Take a Boat somewhere",
    vibe: Vibe.Active,
  },
  GuidedTour: {
    name: "Guided Tour",
    description: "Go on a Guided Tour",
    vibe: Vibe.Active,
  },
  Run: {
    name: "Run",
    description: "Go for a Run",
    vibe: Vibe.Active,
  },
  Picnic: {
    name: "Picnic",
    description: "Have a Picnic",
    vibe: Vibe.Chill,
  },
  IceCream: {
    name: "Ice Cream",
    description: "Visit an Ice Cream Shop",
    vibe: Vibe.Chill,
  },
  Shopping: {
    name: "Shopping",
    description: "Visit Local Shops",
    vibe: Vibe.Active,
  },
};

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
];
