
import { ItineraryItem } from './types';

export const EVENT_DATE = "21st March 2026";
export const EVENT_LOCATION = "London, UK";
export const THEME = "The Night Manager";

export const ITINERARY: ItineraryItem[] = [
  { time: "12:00", activity: "Rendezvous at The Connaught", location: "Mayfair" },
  { time: "14:30", activity: "High-Stakes Tactical Planning (Pub)", location: "Soho" },
  { time: "17:00", activity: "Suit Refinement & Refresh", location: "Base Ops" },
  { time: "19:30", activity: "The Roper Banquet", location: "Private Dining, Shoreditch" },
  { time: "22:00", activity: "Midnight Espionage (Nightclub)", location: "Secret Location" },
  { time: "02:00", activity: "Exfiltration Complete", location: "Various" }
];

export const DRESS_CODE_TIPS = [
  "Sharp Linen Blazers (Mediterranean Chic)",
  "Crisp White or Pale Blue Shirts (Button-down or Grandad collar)",
  "Tailored Chinos or Light Wool Trousers",
  "Classic Loafers or Desert Boots (No trainers)",
  "Aviator Sunglasses (Even if it's London cloudy)",
  "A watch that looks like it cost more than the operation"
];
