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

export interface ActivityDetail {
  name: string;
  description: string;
  vibe: Vibe;
}

export interface Location {
  name: string;
  activities: ActivityDetail[];
  type: LocationType;
}

export interface ActivityRecord {
  [key: string]: ActivityDetail;
}
