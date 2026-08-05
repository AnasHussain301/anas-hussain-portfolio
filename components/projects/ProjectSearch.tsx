"use client";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

export default function ProjectSearch({
    value,
    onChange,
}: Props) {

    return (

        <input

            value={value}

            onChange={(e) => onChange(e.target.value)}

            placeholder="Search projects..."

            className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"

        />

    );

}