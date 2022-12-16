import  NavBar  from "../NavBar/NavBar";
import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
import { ISourceOptions } from "tsparticles-engine";



export function ContainerLayout() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, [])
    return (
    <NavBar>
    <div id="tsparticles" className="space-x-8 flex flex-col  items-center justify-center bg-slate-700 p-0  ">
          <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
    </div>
    </NavBar>
    )
  }