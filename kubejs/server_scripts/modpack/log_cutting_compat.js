// This file is made for use in atm10. it's on you and your conscience what you do with this file

// for some reason some logs are not unified under a tag
ServerEvents.tags('item', allthemods => {
    const need_tags = [
        ["allthemodium",
            [["ancient",[
                "ancient_log_0","ancient_log_1","ancient_log_2","stripped_ancient_log"
            ]],
            ["soul",[
                "soul_log", "soul_log_0", "soul_log_1", "soul_log_2"
            ]],
            ["demonic",["demonic_log"]]]
        ],
        ["regions_unexplored",
            [["alpha",["alpha_log"]]]
        ]
    ];
    need_tags.forEach(mod => {
        mod[1].forEach(tag => {
            tag[1].forEach(log => {
                allthemods.add(mod[0]+':'+tag[0]+'_logs', mod[0]+':'+log)
            })
        })
    });
    allthemods.add('regions_unexplored:magnolia_logs','#regions_unexplored:magnolia_logs_item');
})


ServerEvents.recipes(allthemods => {
    // switch @allthemodium logs from individual to using tags
    ["ancient","soul"].forEach(plank => {
        allthemods.remove({output: 'allthemodium:' + plank + '_planks'});
        allthemods.shapeless(Item.of('allthemodium:' + plank + '_planks', 4), ['#allthemodium:'+plank+'_logs']);
    })
    // add sawmill recipes for all the logs that don't have it
    const crafted = [
        ["evilcraft",["undead"]],
        ["allthemodium",["ancient","soul","demonic"]],
        ["integrateddynamics", ["menril"]],
        ["ars_nouveau", ["archwood"]],
        ["regions_unexplored", 
            ["alpha", "baobab", "blackwood", "blue_bioshroom", "brimwood", "cobalt", "cypress", "dead", "eucalyptus", "green_bioshroom", "joshua", "kapok", "larch", "magnolia", "maple", "mauve", "palm", "pine", "pink_bioshroom", "redwood", "socotra", "willow", "yellow_bioshroom"]
        ]
    ];
    crafted.forEach(mod => {
        mod[1].forEach(log => {
            mekSawing(mod[0]+':'+log+'_planks', mod[0]+':'+log+'_logs',`mekanism:sawing/log/${mod[0]}/${log}`);
            prodSawing(mod[0]+':'+log+'_planks', mod[0]+':'+log+'_logs',`productivetrees:sawing/${mod[0]}/${log}_plank_from_log`);
        })
    })

    // the kubeJS schema for recipe.mekanism.sawing seems not yet to be updated to 1.21, so we have to do it this way
    function mekSawing(plank, log, id){
        allthemods.custom({
            "type": "mekanism:sawing",
            "input": {
              "count": 1,
              "tag": log
            },
            "main_output": {
              "count": 6,
              "id": plank
            },
            "secondary_chance": 0.25,
            "secondary_output": {
              "count": 1,
              "id": "mekanism:sawdust"
            }
          }).id(id)
    }
    // pretty much the same spiel with the productiveTrees sawmill, just a bit different syntax
    // thanks to LobsterJonn for help with correct syntax in 1.21
    function prodSawing(plank, log, id){
        allthemods.custom({
            "type": "productivetrees:sawmill",
            "log": {
              "tag": log
            },
            "planks": {
              "count": 6,
              "id": plank
            },
            "secondary": {
              "count": 2,
              "id": "productivetrees:sawdust"
            }
          }).id(id);
    }   
})

// This file is made for use in atm10. it's on you and your conscience what you do with this file