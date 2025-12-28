<script setup>
defineProps({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="border-2 border-[var(--blue-slate)] p-8 bg-white btn-offset space-y-4">
    <div class="font-mono text-[10px] uppercase text-[var(--sky-surge)]">
      {{ category }}
    </div>
    <h3 class="font-header text-2xl uppercase font-bold">{{ title }}</h3>
    <p class="text-sm italic text-[var(--blue-slate)]/70">
      {{ excerpt }}
    </p>
    <router-link
      :to="to"
      class="text-[var(--sweet-peony)] font-mono text-xs uppercase font-bold hover:underline block"
    >
      Read Full Story →
    </router-link>
  </div>
</template>
