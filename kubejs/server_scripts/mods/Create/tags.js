// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  // Avoid Ultimine removing intersecting Create tracks together (ATM-10 #4519).
  allthemods.add('ftbultimine:excluded_blocks', '#create:tracks')
})
