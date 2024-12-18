// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
if (Platform.isLoaded('minecolonies')) {
    ServerEvents.recipes(event => {
        event.remove({ id: 'minecolonies:supplychestdeployer' })
        event.shaped('minecolonies:supplychestdeployer', [
            ' B ',
            'III',
            'RRR'
        ], {
            B: 'minecraft:white_banner',
            I: 'minecraft:iron_bars',
            R: '#minecraft:chest_boats'
        })

        event.remove({ id: 'minecolonies:supplycampdeployer' })
        event.shaped('minecolonies:supplycampdeployer', [
            '   ',
            'IBI',
            'RRR'
        ], {
            B: 'minecraft:white_banner',
            I: 'minecraft:iron_bars',
            R: '#minecraft:chest_boats'
        })
//Replaces Minecolonies Cabbage with all of the cabbages
        event.replaceInput({ input: 'minecolonies:cabbage' }, 'minecolonies:cabbage', '#c:crops/cabbage' )
//Bell Pepper replacement
        event.replaceInput({ input: 'minecolonies:bell_pepper' }, 'minecolonies:bell_pepper', '#c:crops/bellpepper' )
//Chickpea replacement
        event.replaceInput({ input: 'minecolonies:chickpea' }, 'minecolonies:chickpea', '#c:crops/chickpea' )
//Durum Wheat replacement
        event.replaceInput({ input: 'minecolonies:durum' }, 'minecolonies:durum', '#c:crops/wheat' )
//Eggplant replacement
        event.replaceInput({ input: 'minecolonies:eggplant' }, 'minecolonies:eggplant', '#c:crops/eggplant' )
//Garlic replacement
        event.replaceInput({ input: 'minecolonies:garlic' }, 'minecolonies:garlic', '#c:crops/garlic' )
//Onion replacement
        event.replaceInput({ input: 'minecolonies:onion' }, 'minecolonies:onion', '#c:crops/onion' )
//Soybean replacement
        event.replaceInput({ input: 'minecolonies:soybean' }, 'minecolonies:soybean', '#c:crops/onion' )
//Tomato replacement
        event.replaceInput({ input: 'minecolonies:tomato' }, 'minecolonies:tomato', '#c:crops/tomato' )
//Rice replacement
        event.replaceInput({ input: 'minecolonies:rice' }, 'minecolonies:rice', '#c:crops/rice' )
//Corn replacement
        event.replaceInput({ input: 'minecolonies:corn' }, 'minecolonies:corn', '#c:crops/corn' )
//Peas replacement
        event.replaceInput({ input: 'minecolonies:peas' }, 'minecolonies:peas', '#c:crops/peas' )
//Butternut Squash replacement
        event.replaceInput({ input: 'minecolonies:butternut_squash' }, 'minecolonies:butternut_squash', '#c:crops/wintersquash' )
//Large Water Bottle replacement
        event.replaceInput({ input: 'minecolonies:large_water_bottle' }, 'minecolonies:large_water_bottle', '#c:water/freshwater' )
//Large Milk Bottle replacement
        event.replaceInput({ input: 'minecolonies:large_milk_bottle' }, 'minecolonies:large_milk_bottle', '#c:milk' )
//Large Soy Milk Bottle
        event.replaceInput({ input: 'minecolonies:large_soy_milk_bottle' }, 'minecolonies:large_soy_milk_bottle', '#c:milk' )
//Raw Noodles replacement
        event.replaceInput({ input: 'minecolonies:raw_noodle' }, 'minecolonies:raw_noodle', '#c:pasta' )
//Butter replacement
        event.replaceInput({ input: 'minecolonies:butter' }, 'minecolonies:butter', '#c:butter' )
//Cornmeal replacement
        event.replaceInput({ input: 'minecolonies:cornmeal' }, 'minecolonies:cornmeal', '#c:cornmeal' )
//Soysauce replacement
        event.replaceInput({ input: 'minecolonies:soysauce' }, 'minecolonies:soysauce', '#c:soysauce' )
//Cheddar Cheese replacement
        event.replaceInput({ input: 'minecolonies:cheddar_cheese' }, 'minecolonies:cheddar_cheese', '#c:cheese' )
//Feta Cheese replacement
        event.replaceInput({ input: 'minecolonies:feta_cheese' }, 'minecolonies:feta_cheese', '#c:cheese' )
//Yogurt replacement
        event.replaceInput({ input: 'minecolonies:yogurt' }, 'minecolonies:yogurt', '#c:yogurt' )
//Tortillas replacement
        event.replaceInput({ input: 'minecolonies:tortillas' }, 'minecolonies:tortillas', '#c:tortilla' )
    })
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
