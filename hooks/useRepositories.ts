"use client";

import { useQuery } from "@tanstack/react-query";

export function useRepositories(){

    return useQuery({

        queryKey:["repositories"],

        queryFn:async()=>{

            const response = await fetch("/api/github");

            return response.json();

        }

    });

}