export interface SeasonRecommedResponse {
  id: number;
  name: string;
  city: string;
  placeUrl: string;
  keywords: string[];
  imageUrl: string;
  description: string;
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
