
<template>
    <FullCalendar v-bind:options="options"/>
</template>

<script setup>

import {reactive} from 'vue'
import '@fullcalendar/core'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
const options = reactive({
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
        left: 'prev, next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek, listDay'
    },
    editable:false,
    selectable: true,
    weekends: true,
    dateClick: (arg) => {
        console.log(arg.start + arg.end) 
    }
})
</script>

