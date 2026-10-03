import hr from './hr.json';
import en from './en.json';
import zh from './zh.json';
import de from './de.json';

export const TOPIC_SLUGS = [
  'king-tomislav-monument',
  'things-to-do-near-king-tomislav-square',
  'green-horseshoe-walking-route',
  'advent-king-tomislav-square',
] as const;

export const topicData: Record<string, Record<string, any>> = { hr, en, zh, de };
