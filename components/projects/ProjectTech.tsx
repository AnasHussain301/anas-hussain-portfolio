export default function ProjectTech({
    topics
}:{
    topics:string[]
}){

return(

<div className="flex flex-wrap gap-4">

{

topics.map(topic=>(

<div

key={topic}

className="rounded-full bg-cyan-400/10 px-5 py-2"

>

{topic}

</div>

))

}

</div>

)

}