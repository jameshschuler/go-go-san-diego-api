import { Coords } from "../types.ts";

export function parseCoords(coords?: string): Coords | null {
  if (!coords) {
    return null;
  }

  const [latString, lngString] = coords.split(",");
  const latSymbol = latString.includes("S") ? "-" : "";
  const lngSymbol = lngString.includes("W") ? "-" : "";

  const [latValue, lngValue] = coords.match(/[\d\.]+/g)!;

  const lat = Number(`${latSymbol}${latValue}`);
  const lng = Number(`${lngSymbol}${lngValue}`);

  return {
    latitude: lat,
    longitude: lng,
  } as Coords;
}
