import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // Ensure the same prompt isn't returned twice in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
