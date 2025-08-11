export interface Breed {
  Name: string;
  PetProfileCount: number;
  KennelCount: number; 
  PatronCount: number;
  AchievementProgress: number;
  LastAchievement?: {
    Name: string;
  };
}

export interface Achievement {
  Name: string;
  IntValue: number;
  Description: string;
}

export interface SpecialAchievement {
  IntValue: number;
  Description: string;
}