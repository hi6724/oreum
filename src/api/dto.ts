export interface SeasonRecommedResponse {
  id: number;
  name: string;
  city: string;
  location: string;
  address: string;
  longitude: number;
  latitude: number;
  placeUrl: string;
  keywords: string[];
  imageUrl: string;
  description: string;
  season: "봄" | "여름" | "가을" | "겨울";
}

export interface BirthdateRecommedResponse {
  adjective: string;
  oremName: string;
  plantResponse: {
    plantName: string;
    bloomingSeason: number;
    distribution: string;
    floweringPeriod: string;
    height: string;
    description: string;
    imageUrl: string;
  };
}
