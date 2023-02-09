export const LocationType = {
  Park: "Park",
  Neighborhood: "Neighborhood",
  City: "City",
} as const;

type LocationType = typeof LocationType[keyof typeof LocationType];

export const Vibe = {
  Active: "Active",
  Chill: "Chill",
} as const;

type Vibe = typeof Vibe[keyof typeof Vibe];

export const Activity = {
  Coffee: 1,
  Restaurant: 2,
  Zoo: 3,
  SafariPark: 4,
  Brewery: 5,
  Drink: 6,
  Museum: 7,
  Walk: 8,
  BeachDay: 9,
  BeachWalk: 10,
  Hike: 11,
  Mountain: 12,
  Movie: 13,
  ScooterRide: 14,
  Historic: 15,
  BoatRide: 16,
  BikeRide: 17,
  GuidedTour: 18,
  Run: 19,
  Picnic: 20,
  IceCream: 21,
  Shopping: 22,
} as const;

type Activity = typeof Activity[keyof typeof Activity];

export interface ActivityDetail {
  name: string;
  description: string;
  vibe: Vibe;
}

export interface Location {
  name: string;
  activities: number[];
  type: LocationType;
}

export interface ActivityRecord {
  [key: number]: ActivityDetail;
}
