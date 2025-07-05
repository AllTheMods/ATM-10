// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    // Quantum processor
    allthemods.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 8,
        "item_inputs": [
            {
                "amount": 1,
                "item": "advanced_ae:quantum_alloy"
            },
            {
                "amount": 1,
                "item": "advanced_ae:quantum_processor_press",
                "probability": 0.0
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "advanced_ae:printed_quantum_processor"
            }
        ]
    })
    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "duration": 200,
        "eu": 16,
        "fluid_inputs": [
            {
                "amount": 90,
                "fluid": "modern_industrialization:molten_redstone"
            }
        ],
        "item_inputs": [
            {
                "amount": 1,
                "item": "advanced_ae:printed_quantum_processor"
            },
            {
                "amount": 1,
                "item": "ae2:printed_silicon"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "advanced_ae:quantum_processor"
            }
        ]
    })

    // Energy processor
    allthemods.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 8,
        "item_inputs": [
            {
                "amount": 1,
                "item": "appflux:charged_redstone"
            },
            {
                "amount": 1,
                "item": "appflux:energy_processor_press",
                "probability": 0.0
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "appflux:printed_energy_processor"
            }
        ]
    })
    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "duration": 200,
        "eu": 16,
        "fluid_inputs": [
            {
                "amount": 90,
                "fluid": "modern_industrialization:molten_redstone"
            }
        ],
        "item_inputs": [
            {
                "amount": 1,
                "item": "appflux:printed_energy_processor"
            },
            {
                "amount": 1,
                "item": "ae2:printed_silicon"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "appflux:energy_processor"
            }
        ]
    })

    // Concurrent processor
    allthemods.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 8,
        "item_inputs": [
            {
                "amount": 1,
                "item": "extendedae:entro_crystal"
            },
            {
                "amount": 1,
                "item": "extendedae:concurrent_processor_press",
                "probability": 0.0
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "extendedae:concurrent_processor_print"
            }
        ]
    })
    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "duration": 200,
        "eu": 16,
        "fluid_inputs": [
            {
                "amount": 90,
                "fluid": "modern_industrialization:molten_redstone"
            }
        ],
        "item_inputs": [
            {
                "amount": 1,
                "item": "extendedae:concurrent_processor_print"
            },
            {
                "amount": 1,
                "item": "ae2:printed_silicon"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "extendedae:concurrent_processor"
            }
        ]
    })

    // Accumulation processor
    allthemods.custom({
        "type": "modern_industrialization:packer",
        "duration": 200,
        "eu": 8,
        "item_inputs": [
            {
                "amount": 1,
                "item": "megacells:sky_steel_ingot"
            },
            {
                "amount": 1,
                "item": "megacells:accumulation_processor_press",
                "probability": 0.0
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "megacells:printed_accumulation_processor"
            }
        ]
    })
    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "duration": 200,
        "eu": 16,
        "item_inputs": [
            {
                "amount": 1,
                "item": "megacells:printed_accumulation_processor"
            },
            {
                "amount": 1,
                "item": "ae2:printed_silicon"
            },
            {
                "amount": 1,
                "item": "ae2:fluix_dust"
            }
        ],
        "item_outputs": [
            {
                "amount": 1,
                "item": "megacells:accumulation_processor"
            }
        ]
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.