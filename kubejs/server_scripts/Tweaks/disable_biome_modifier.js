ServerEvents.generateData('after_mods', allthemods => {

    let ids = JsonIO.read("kubejs/server_scripts/Tweaks/disable_biome_modifier_ids.json").ids

    for (let id of ids) {
        allthemods.json(`${id}.json`,
            {
                "type": "neoforge:none"
            }
        )
    }
})