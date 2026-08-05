import { getRepository } from "@/lib/github/repository";
import { getReadme } from "@/lib/github/readme";

import ProjectHero from "@/components/projects/ProjectHero";
import ProjectReadme from "@/components/projects/ProjectReadme";

interface Props {
    params: {
        slug: string;
    };
}

export default async function Page({
    params,
}: Props) {

    const project = await getRepository(params.slug);

    const readme = await getReadme(params.slug);

    return (

        <main className="mx-auto max-w-7xl px-6 py-20">

            <ProjectHero project={project} />

            <ProjectReadme
                content={readme}
            />

        </main>

    );

}