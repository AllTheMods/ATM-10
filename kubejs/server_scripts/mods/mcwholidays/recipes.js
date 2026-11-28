// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    ;['blue', 'cyan', 'gray', 'green', 'light_blue', 'magenta', 'orange', 'pink', 'purple', 'red', 'silver', 'yellow'].forEach(colour => {
        allthemods.forEachRecipe({ id: `mcwholidays:${colour}_ornament` }, recipe => {
            let key = JSON.parse(recipe.json).key
            key.S = { tag: 'c:strings' }
            recipe.set('key', key)
            recipe.set('pattern', [' S ', 'ABA', ' A '])
        })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
