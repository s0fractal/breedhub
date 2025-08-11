import { Breed, Achievement, SpecialAchievement } from "@/types/breeds";

export const topAchievementBreeds: Breed[] = [
  {
    Name: "Labrador",
    PetProfileCount: 245,
    KennelCount: 32,
    PatronCount: 128,
    AchievementProgress: 85,
    LastAchievement: { Name: "Gold Standard" }
  },
  {
    Name: "Pug",
    PetProfileCount: 189,
    KennelCount: 28,
    PatronCount: 97,
    AchievementProgress: 72,
    LastAchievement: { Name: "Rising Star" }
  },
  {
    Name: "Shiba",
    PetProfileCount: 156,
    KennelCount: 24,
    PatronCount: 84,
    AchievementProgress: 68,
    LastAchievement: { Name: "Popular Choice" }
  },
];

export const topRatingBreeds: Breed[] = [
  {
    Name: "Beagle",
    PetProfileCount: 312,
    KennelCount: 45,
    PatronCount: 156,
    AchievementProgress: 92,
    LastAchievement: { Name: "Champion Breed" }
  },
  {
    Name: "Boxer", 
    PetProfileCount: 278,
    KennelCount: 38,
    PatronCount: 142,
    AchievementProgress: 88,
    LastAchievement: { Name: "Elite Status" }
  },
  {
    Name: "Bulldog",
    PetProfileCount: 234,
    KennelCount: 35,
    PatronCount: 119,
    AchievementProgress: 78,
    LastAchievement: { Name: "Distinguished" }
  },
  {
    Name: "Golden Retriever",
    PetProfileCount: 456,
    KennelCount: 67,
    PatronCount: 234,
    AchievementProgress: 96,
    LastAchievement: { Name: "Legendary" }
  },
  {
    Name: "German Shepherd",
    PetProfileCount: 398,
    KennelCount: 54,
    PatronCount: 187,
    AchievementProgress: 94,
    LastAchievement: { Name: "Master Class" }
  }
];

export const achievements: Achievement[] = [
  { 
    Name: "First Level", 
    IntValue: 100, 
    Description: "Welcome to the breeding community! Your first milestone." 
  },
  { 
    Name: "Second Level", 
    IntValue: 300, 
    Description: "Growing strong! Your kennel is gaining recognition." 
  },
  {
    Name: "Third Level",
    IntValue: 500,
    Description: "Established breeder with proven track record."
  },
  {
    Name: "Elite Breeder",
    IntValue: 1000,
    Description: "You're among the top breeders in the community!"
  }
];

export const specialAchievements: SpecialAchievement[] = [
  { 
    IntValue: 50, 
    Description: "Register your first litter" 
  },
  { 
    IntValue: 100, 
    Description: "Complete health testing for all breeding dogs" 
  },
  {
    IntValue: 150,
    Description: "Win your first championship"
  },
  {
    IntValue: 200,
    Description: "Establish international connections"
  }
];

export const platformStats = {
  petProfiles: 1000,
  kennels: 250,
  events: 36
};