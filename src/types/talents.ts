export interface TalentReq {
  id: string;
  points: number;
}

export interface Talent {
  id: string;
  name: string;
  icon: string;
  maxPoints: number;
  row: number;
  col: number;
  desc: string[];
  requires?: TalentReq;
  statScaling?: string;
  loreOrigins?: string;
  synergies?: string[];
  recommendedBuilds?: string[];
  runeInteractions?: string;
  devCommentary?: string;
  visualEffect?: string;
}
