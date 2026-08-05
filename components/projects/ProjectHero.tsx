interface Props {
    project:any
}

export default function ProjectHero({
    project
}:Props){

return(

<section className="py-20">

<h1 className="text-7xl font-black">

{project.name}

</h1>

<p className="mt-6 max-w-3xl text-xl text-gray-400">

{project.description}

</p>

</section>

)

}