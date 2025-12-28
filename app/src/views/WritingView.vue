<script setup>
import { Sparkles } from 'lucide-vue-next'
import StoryCard from '../components/StoryCard.vue'
</script>

<template>
  <section class="p-6 md:p-12 max-w-7xl mx-auto">
    <h2 class="font-header text-5xl font-black uppercase mb-12 flex items-center gap-4">
      <span class="text-[var(--burnt-peach)]">Creative</span>
      <Sparkles class="text-[var(--sky-surge)]" />
      Archives
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Card 1 -->
      <StoryCard category="Short Story // Identity" title="ShapeShifter"
        excerpt="Let me crawl out of my skin and put on something more comfortable..." to="/writing/shapeshifter" />

      <!-- Card 2 -->
      <StoryCard category="Short Story // Fiction" title="Zuckerverse"
        excerpt="Today, on the show, I have the pleasure of talking with Mark Zuckerberg 2.0 about his plan for Facebook Life..."
        to="/writing/zuckerverse" />

      <!-- Card 3 -->
      <StoryCard category="Story // Personal" title="Colonial Phil" excerpt="Reflections on history and memory."
        to="/writing/colonial-phil" />
    </div>
  </section>
</template>
