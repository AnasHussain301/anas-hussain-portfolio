"use client";

import { motion } from "framer-motion";

export default function Spotlight(){

return(

<motion.div

animate={{

x:[0,100,-100,0],

y:[0,-50,80,0]

}}

transition={{

duration:12,

repeat:Infinity

}}

className="absolute h-[600px] w-[600px] rounded-full bg-cyan-500/20 blur-[180px]"

/>

)

}