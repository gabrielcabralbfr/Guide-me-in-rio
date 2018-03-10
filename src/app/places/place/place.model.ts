export interface Place {
  geometry: {
    lat: number;
    lng: number;
  };
  icon: string;
  id: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: [
    {
      height: number;
      width: number;
      photo_reference: string;
    }
  ];
  place_id: string;
  rating: number;
  reference: string;
  types: string[];
  vicinity: string;
}
