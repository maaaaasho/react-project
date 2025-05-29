import { skills } from '../data/data.ts';
import SkillCard from './SkillCard';


const Skills = () => {
  return (
    <div id='skills' className='w-full pt-24 '>
      
      <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div className='text-center dark:text-white'>
              <p data-aos='zoom-in' className='text-4xl my-20 font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p data-aos='zoom-in' className='py-14'> These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid  gap-8 grid-cols-2 sm:grid-cols-4 text-center py-8'>
              {skills.map((skill)=>(
                <SkillCard key={skill.id} skill={skill}/>
              ))}
          </div>
      </div>
    </div>
  );
};

export default Skills;