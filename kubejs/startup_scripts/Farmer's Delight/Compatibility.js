/*
  This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
  As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
*/

let stews = [
    "biomeswevegone:white_puffball_stew",
    "rootsclassic:rooty_stew",
    "undergarden:bloody_stew",
    "undergarden:inky_stew",
    "undergarden:indigo_stew",
    "undergarden:veiled_stew"
]

ItemEvents.modification(allthemods => {
    stews.forEach(stew => {
          allthemods.modify(stew, item => {
              item.maxStackSize = 16
          })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.