"use client";

const filters = [

    "All",

    "Python",

    "C++",

    "TypeScript",

    "JavaScript",

    "Unity",

    "AI",

    "ML",

    "React",

    "Next.js",

];

export default function ProjectFilters() {

    return (

        <div className="flex flex-wrap gap-4">

            {

                filters.map((filter) => (

                    <button

                        key={filter}

                        className="rounded-full bg-white/5 px-6 py-3 hover:bg-cyan-500/20"

                    >

                        {filter}

                    </button>

                ))

            }

        </div>

    );

}