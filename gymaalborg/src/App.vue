<template>
<div>
      <the-schedule></the-schedule>
<the-calendar></the-calendar>
      </div>
 
      
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
