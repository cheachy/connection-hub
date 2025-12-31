
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
  "If you had to describe our first week in three words, what would they be?",
  "What is your favorite way to spend a rainy afternoon?",
  "What's the best piece of advice you've ever received?",
  "If you could have dinner with any fictional character, who would it be?",
  "What was the first thing I said (or wrote) that actually made you laugh out loud?",
  "What's a small detail about my personality that you've picked up on already?",
  "Is there a specific song that makes you think of me when it comes on?",
  "What's one thing you were nervous to tell me, but now you're glad you did?",
  "If you had to describe our 'vibe' to a friend in only three words, which would you pick?",
  "What is the most unexpected thing you've enjoyed about getting to know me this week?",
  "When you see a notification from me, what's the first thought that pops into your head?",
  "If we were together right now, what's one low-key activity (like grocery shopping or a walk) you'd want to do with me?",
  "What is your absolute favorite way to spend a slow Sunday morning?",
  "What's a 'comfort movie' you own that you're dying to show me?",
  "If you could teleport me to your side for just one hour, how would we spend it?",
  "What's the best compliment you've ever received?",
  "What's a personality trait you really value in other people?",
  "If you could ask me anything at all right now—no holds barred—what would it be?"
];
