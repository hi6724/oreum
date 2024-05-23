export interface SeasonRecommedResponse {
  name: string;
  city: string;
  placeUrl: string;
  keywords: string[];
  imageUrl: string;
  desc: string;
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
    desc: string;
    imageUrl: string;
  };
}
