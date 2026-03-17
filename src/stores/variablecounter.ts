import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {

  const gold = reactive({
    value: 0
  })

  const wood = reactive({
    value: 0
  })

  const rocks = reactive({
    value: 0
  })

  const buildings = reactive({
    miner: {
      gold: {
        count: 0,
        rate: 1        
      }
    },
    dens: {
      gold: {
        count: 0,
        rate: 5        
      }
    },
    generator: {
      gold: {
        count: 0,
        rate: 10        
      }
    }
  })

  function gainGold() {
    let total = 0

    for (const building of Object.values(buildings)) { //Basically since objects have keys and values, we just take the values and loop through
      if (building.gold) {
        total += building.gold.count * building.gold.rate
      }
    }

    gold.value += total
  }

  return { gold, wood, rocks, buildings, gainGold }
})