<template>

      <the-schedule></the-schedule>
      
      <the-calendar></the-calendar>
 
      
</template>

<script>
import TheSchedule from './components/TheSchedule.vue'
import TheCalendar from './components/TheCalendar.vue'

export default {
  name: 'App',

  components: {
    TheSchedule,
    TheCalendar
  },
}
</script>
