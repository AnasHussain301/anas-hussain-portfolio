import { Star, GitFork } from "lucide-react";

export default function ProjectStats({
    project
}:{
    project:any
}){

return(

<div className="mt-12 flex gap-8">

<div>

<Star/>

{project.stargazers_count}

</div>

<div>

<GitFork/>

{project.forks_count}

</div>

<div>

{project.language}

</div>

</div>

)

}