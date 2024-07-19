
function SkillsSection({skills}){
  return (
    <div>
      <h1>Skills</h1>
      <div className="grid grid-cols-3">
        {skills.map(skill => (
          <div key={skill._id} className="skill">
            <img src={skill.icon} alt={skill.name} className="size-16" />
            <div className="skill-name">{skill.name}</div>
            <div className="h-2">
              <div className="h-full bg-red-600" style={{ width: `${skill.proficiency}%` }}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SkillsSection;