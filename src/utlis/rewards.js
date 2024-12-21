export const getRandomRewards = () => {
    const items = ['Weapon', 'Consumable', 'Material'];
    const rarities = ['Common', 'Rare', 'Epic', 'Legendary'];
    const item = items[Math.floor(Math.random() * items.length)];
    const rarity = rarities[Math.floor(Math.random() * rarities.length)];
    const count = Math.floor(Math.random() * 10) + 1;
  
    return { item, rarity, count };
  };
  