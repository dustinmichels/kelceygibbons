<script setup>
import { ArrowLeft } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: 'Short Story',
  },
  author: {
    type: String,
    default: 'Kelcey Gibbons',
  },
})
</script>

<template>
  <section class="p-6 md:p-12 max-w-4xl mx-auto space-y-8">
    <!-- Back Navigation -->
    <div class="mb-8">
      <router-link
        to="/writing"
        class="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold hover:text-[var(--sky-surge)] transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Archives
      </router-link>
    </div>

    <article class="space-y-6">
      <header class="space-y-4 mb-12 border-b-2 border-[var(--blue-slate)] pb-8">
        <div class="font-mono text-xs uppercase tracking-wider text-[var(--sky-surge)]">
          {{ subtitle }}
        </div>
        <h1 class="font-header text-4xl md:text-6xl font-black uppercase text-[var(--blue-slate)]">
          {{ title }}
        </h1>
      </header>

      <div
        class="prose prose-lg md:prose-xl text-[var(--blue-slate)] font-serif leading-relaxed max-w-none"
      >
        <slot></slot>
      </div>

      <footer
        class="mt-12 pt-8 border-t border-[var(--blue-slate)]/20 font-mono text-sm text-[var(--blue-slate)]/60 text-right"
      >
        — {{ author }}
      </footer>
    </article>
  </section>
</template>
