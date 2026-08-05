import { NextResponse } from "next/server";

import { getRepositories } from "@/lib/github/repositories";

export async function GET(){

    const repositories = await getRepositories();

    return NextResponse.json(repositories);

}