<script setup>
import { Sparkles } from 'lucide-vue-next'
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
      <div class="border-2 border-[var(--blue-slate)] p-8 bg-white btn-offset space-y-4">
        <div class="font-mono text-[10px] uppercase text-[var(--sky-surge)]">
          Short Story // Afrofuturism
        </div>
        <h3 class="font-header text-2xl uppercase font-bold">The Circuit Weaver</h3>
        <p class="text-sm italic text-[var(--blue-slate)]/70">
          "In the heart of the mainframe, she found the rhythm of the loom..."
        </p>
        <button
          class="text-[var(--sweet-peony)] font-mono text-xs uppercase font-bold hover:underline"
        >
          Read Fragment →
        </button>
      </div>

      <!-- Card 2 -->
      <div
        class="border-2 border-[var(--blue-slate)] p-8 !bg-[var(--burnt-peach)] text-white btn-offset space-y-4"
      >
        <div class="font-mono text-[10px] uppercase opacity-70">Poetry // Technical</div>
        <h3 class="font-header text-2xl uppercase font-bold">Ode to the Vacuum Tube</h3>
        <p class="text-sm italic">
          "Glass-blown memories / glowing amber in the dark / carrying the voice of a ghost."
        </p>
        <button class="font-mono text-xs uppercase font-bold hover:underline">
          Read Fragment →
        </button>
      </div>

      <!-- Card 3 -->
      <div class="border-2 border-[var(--blue-slate)] p-8 bg-white btn-offset space-y-4">
        <div class="font-mono text-[10px] uppercase text-[var(--sky-surge)]">
          Story // Oral History
        </div>
        <h3 class="font-header text-2xl uppercase font-bold">Digital Ancestry</h3>
        <p class="text-sm italic text-[var(--blue-slate)]/70">
          Reflections on how we carry our elders into the silicon valley.
        </p>
        <button
          class="text-[var(--sweet-peony)] font-mono text-xs uppercase font-bold hover:underline"
        >
          Read Fragment →
        </button>
      </div>

      <!-- Visual Grid Filler -->
      <div
        class="lg:col-span-2 aspect-[21/9] kente-border border-2 border-[var(--blue-slate)] flex items-center justify-center relative"
      >
        <div
          class="bg-white px-6 py-2 border-2 border-[var(--blue-slate)] font-mono text-xs uppercase font-bold z-10"
        >
          Multimedia Gallery Coming Soon
        </div>
      </div>
    </div>
  </section>
</template>
