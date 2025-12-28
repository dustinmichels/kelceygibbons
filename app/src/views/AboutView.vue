<script setup>
import { Microscope } from 'lucide-vue-next'
</script>

<template>
  <section class="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
    <div class="flex flex-col md:flex-row gap-12">
      <div class="md:w-1/3">
        <div
          class="aspect-square bg-[var(--burnt-peach)] border-4 border-[var(--blue-slate)] relative overflow-hidden"
        >
          <img
            src="/assets/accordian.jpeg"
            alt="Kelcey Gibbons"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="md:w-2/3 space-y-6">
        <h2 class="font-header text-5xl font-black uppercase text-[var(--blue-slate)]">
          About Kelcey
        </h2>
        <div class="prose prose-lg text-[var(--blue-slate)] space-y-4">
          <p>
            I am a PhD Candidate at MIT studying American histories of technology. My work centers
            on the vibrant, often overlooked lineages of African American education and
            professionalization.
          </p>
          <p>
            By bridging the gap between archival research and multimedia storytelling, I seek to
            reveal how technological systems have been both sites of exclusion and tools for
            liberation.
          </p>
          <p>
            I am a professional daydreamer, a multimedia storyteller, and I love my research so, so
            much. I believe that understanding our technical past is a prerequisite for building
            equitable futures.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 pt-6">
          <div class="p-4 bg-[var(--sky-surge)]/10 border-l-4 border-[var(--sky-surge)]">
            <h4 class="font-mono text-xs uppercase font-bold">Institutional</h4>
            <p class="font-header text-lg uppercase">MIT STS Program</p>
          </div>
          <div class="p-4 bg-[var(--sweet-peony)]/10 border-l-4 border-[var(--sweet-peony)]">
            <h4 class="font-mono text-xs uppercase font-bold">Focus</h4>
            <p class="font-header text-lg uppercase">Black Tech Ed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
