
export interface TimeZoneInfo {
  name: string;
  zone: string;
  label: string;
}

export interface CheckInQuestion {
  question: string;
  category: string;
}

export interface RelationshipStats {
  startDate: Date;
  nextMeetupDate: Date;
  distanceMiles: number;
  originCity: string;
  destinationCity: string;
}
