


 function AboutMeSection(
    {aboutMeContent}
 ) {
console.log(aboutMeContent)
const {headline, intro, image, list} = aboutMeContent
  return (
 <div className="grid grid-cols-2 gap-8">
    <img src={image} alt={headline}/>
    <div>
        <h2>{headline}</h2>
        <p>{intro}</p>
        <ul>
        {list?.map((item: {title:string, text:string}) => (
            <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </li>
            ))}
        </ul>
    </div>
 </div>

  )
}

export default AboutMeSection