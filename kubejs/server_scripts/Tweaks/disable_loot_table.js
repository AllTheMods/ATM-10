ServerEvents.generateData('after_mods', allthemods => {

    let ids = JsonIO.read("kubejs/server_scripts/Tweaks/disable_loot_table_ids.json").ids

    for (let id of ids) {
        allthemods.json(`${id}.json`,
            {
                "neoforge:conditions": [
                    {
                        "type": "neoforge:false"
                    }
                ]
            }
        )
    }
})