StartupEvents.postInit(event => {
    let $ChemthrowerHandler = Java.loadClass("blusunrize.immersiveengineering.api.tool.ChemthrowerHandler")
    let $ChemthrowerEffect_Extinguish = Java.loadClass("blusunrize.immersiveengineering.api.tool.ChemthrowerHandler$ChemthrowerEffect_Extinguish")
    $ChemthrowerHandler.registerEffect("c:hydrofluoric_acid", new $ChemthrowerEffect_Extinguish())
})