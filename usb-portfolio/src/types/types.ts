export interface Skill {
  id: number;
  title: string;
  Image: string;
}
export interface Project {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
}

export interface SkillCardProps {
  skill: {
    title: string;
    Image: string;
  };
}
export interface NavbarProps { 
  darkMode: boolean;
   setDarkMode: React.Dispatch<React.SetStateAction<boolean>>; }
