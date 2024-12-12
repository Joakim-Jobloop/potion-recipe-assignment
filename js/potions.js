// Function that can be called to get the potion image url
export const basePotionImageUrl = (potion) => {
  return `./public/images/potions/${potion}-potion.webp`;
};

// Function that can be called to get the potion object
export function getPotion(potion) {
  return potions[potion];
}

// Function that can be called to check the ingredients for a potion:
export function checkPotionIngredients(potion) {
  return Object.entries(potions[potion])
    .filter(([key]) => key !== "image" && key !== "name")
    .map(([, value]) => value);
}

// All potions, created as objects (for easier reference)
export const potions = {
  healingPotion: {
    herbs: 2,
    berries: 1,
    water: 0,
    mushrooms: 1,
    flowers: 0,
    image: basePotionImageUrl("healing"), // returns: ./public/images/potions/healing-potion.webp
    name: "Healing Potion",
  },
  strengthPotion: {
    herbs: 1,
    berries: 1,
    mushrooms: 1,
    water: 0,
    flowers: 1,
    image: basePotionImageUrl("strength"),
    name: "Strength Potion",
  },
  manaPotion: {
    herbs: 1,
    berries: 2,
    water: 1,
    mushrooms: 0,
    flowers: 1,
    name: "Mana Potion",
    image: basePotionImageUrl("mana"),
  },
  speedPotion: {
    herbs: 0,
    berries: 1,
    water: 1,
    mushrooms: 2,
    flowers: 1,
    name: "Speed Potion",
    image: basePotionImageUrl("speed"),
  },
  stealthPotion: {
    herbs: 1,
    berries: 0,
    water: 2,
    mushrooms: 1,
    flowers: 0,
    name: "Stealth Potion",
    image: basePotionImageUrl("stealth"),
  },
  antidote: {
    herbs: 2,
    berries: 1,
    water: 1,
    mushrooms: 0,
    flowers: 0,
    name: "Antidote",
    image: basePotionImageUrl("antidote"),
  },
  lovePotion: {
    herbs: 1,
    berries: 2,
    water: 0,
    mushrooms: 0,
    flowers: 2,
    name: "Love Potion",
    image: basePotionImageUrl("love"),
  },
  nightVisionPotion: {
    herbs: 1,
    berries: 0,
    water: 0,
    mushrooms: 2,
    flowers: 1,
    name: "Night Vision Potion",
    image: basePotionImageUrl("nightvision"),
  },
  fireResistancePotion: {
    herbs: 2,
    berries: 0,
    water: 1,
    mushrooms: 1,
    flowers: 1,
    name: "Fire Resistance Potion",
    image: basePotionImageUrl("fire-resistance"),
  },
  frostResistancePotion: {
    herbs: 0,
    berries: 1,
    water: 2,
    mushrooms: 1,
    flowers: 1,
    name: "Frost Resistance Potion",
    image: basePotionImageUrl("frost-resistance"),
  },
  lightningResistancePotion: {
    herbs: 1,
    berries: 1,
    water: 1,
    mushrooms: 2,
    flowers: 0,
    name: "Lightning Resistance Potion",
    image: basePotionImageUrl("lightning-resistance"),
  },
  energyPotion: {
    herbs: 1,
    berries: 2,
    water: 1,
    mushrooms: 0,
    flowers: 0,
    name: "Energy Potion",
    image: basePotionImageUrl("energy"),
  },
  focusPotion: {
    herbs: 2,
    berries: 1,
    water: 0,
    mushrooms: 0,
    flowers: 2,
    name: "Focus Potion",
    image: basePotionImageUrl("focus"),
  },
};
