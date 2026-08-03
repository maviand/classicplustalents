export type ItemRarity = 'Poor' | 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Artifact';
export type ItemBindType = 'Binds when picked up' | 'Binds when equipped' | 'Binds to account' | '';

export interface WowItem {
  id?: string;
  name: string;
  rarity: ItemRarity;
  bindType?: ItemBindType;
  slot?: string; // e.g. "Main Hand", "Chest", "Trinket"
  type?: string; // e.g. "Sword", "Plate", "Consumable"
  stats?: string[]; // e.g. ["+15 Stamina", "+10 Intellect"]
  effect?: string; // e.g. "Equip: Increases spell damage by 15."
  requiresLevel?: number;
  flavorText?: string;
  mats?: string; // For crafting recipes
  sellPrice?: string; // e.g. "15g 30s 0c"
  icon?: string;
  source?: string;
}

export interface WowSpell {
  name: string;
  castTime: string;
  cooldown?: string;
  range?: string;
  cost?: string;
  description: string;
  icon?: string;
}
