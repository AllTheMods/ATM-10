// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.loaded(event => {
    let $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
    event.server.registryAccess().registryOrThrow($Registries.BIOME).addAlias("biomeswevegone:skyrise_vale", "biomeswevegone:skyris_vale")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


