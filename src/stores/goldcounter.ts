import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGoldCounterStore = defineStore('goldcounter', () => {
  //Base state
  const goldcounter = ref(0)

  //IntervalGoldCount - The ammount of gold need to be added every second
  const IntervalGoldCount = ref(0)

  //Add by 1
  function increment() {
    goldcounter.value++
  }

  //Main increment function that adds the total count to the current count
  function incrementByTotalValue(){
    goldcounter.value += IntervalGoldCount.value
  }

  // ----- Function for Auto increment every second -----

  //Basically setInterval requires an ID to clear it later, also don't worry about performance, 
  //it just stores it once when the interval starts
  let intervalId: number | null = null;

  function startAutoIncrement() {
    if (intervalId === null) {
      intervalId = window.setInterval(() => {
        incrementByTotalValue();
      }, 1000); // 1000ms = 1 second
    }
  }
  function stopAutoIncrement() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return { goldcounter, IntervalGoldCount, increment, startAutoIncrement, stopAutoIncrement }
})