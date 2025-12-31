
import { TimeZoneInfo, RelationshipStats } from './types';

export const MY_TIMEZONE: TimeZoneInfo = {
  name: "Butuan City",
  zone: "Asia/Manila",
  label: "Chami's Time"
};

export const HER_TIMEZONE: TimeZoneInfo = {
  name: "Cavite City",
  zone: "Asia/Manila",
  label: "Mavis' Time"
};

export const STATS: RelationshipStats = {
  startDate: new Date('2025-12-25'),
  nextMeetupDate: null,
  distanceMiles: 492,
  originCity: "Butuan",
  destinationCity: "Cavite"
};

export const FALLBACK_QUESTIONS = [
  "What's your absolute favorite childhood memory?",
  "If we could teleport anywhere right now for one hour, where would we go?",
  "What's a small habit of mine you've noticed already?",
  "What song reminds you of our first conversation?",
  "What's your 'comfort movie' that you could watch 100 times?",
  "If you had to describe our first week in three words, what would they be?"
];
