// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove("xycraft_machines:compat/mek/processing/aluminum/dust/from_dirty_dust")

    allthemods.remove({ id: 'xycraft:shaped/glass_viewer_rgb' })
    const rgbColours = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    rgbColours.forEach(colour => {
        allthemods.shaped(`4x xycraft_world:glass_viewer_rgb_${colour}`, [' G ', 'GDG', ' G '], {
            G: '#c:glass_blocks/cheap',
            D: `#c:dyes/${colour}`
        }).id(`xycraft:shaped/glass_viewer_rgb_${colour}`)
        if (colour != 'white') {
            allthemods.shapeless(`xycraft_world:glass_viewer_rgb_glowing_${colour}`, [
                'minecraft:glow_ink_sac',
                `xycraft_world:glass_viewer_rgb_${colour}`
            ]).id(`xycraft:shapeless/glass_viewer_rgb_glowing_${colour}`)
        }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
