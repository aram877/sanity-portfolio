


 function AboutMeSection(
    {aboutMeContent}
 ) {

const {headline, intro, image, list} = aboutMeContent
console.log(image)
  return (
 <div className="grid grid-cols-2 gap-8">
    <img src={image} alt={headline} className="w-full h-fill object-cover"/>
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