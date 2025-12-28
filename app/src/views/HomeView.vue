<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (page) => {
  router.push({ name: page })
}
</script>

<template>
  <section class="p-6 md:p-12 lg:py-6 lg:px-12 max-w-7xl mx-auto h-full flex flex-col justify-center">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      <!-- Hero Text -->
      <div class="lg:col-span-7 space-y-8 lg:space-y-4 relative z-10">
        <div class="inline-block px-4 py-1 bg-[var(--sky-surge)] text-white font-mono text-sm uppercase">
          PhD Candidate @ MIT
        </div>
        <h2 class="font-header font-black uppercase tracking-tighter">
          <div class="text-3xl md:text-4xl lg:text-5xl leading-tight">Learning is</div>
          <div class="text-4xl md:text-5xl lg:text-6xl leading-[0.9]">
            <span class="text-[var(--sweet-peony)] underline decoration-sky-400">Liberating</span>
          </div>
        </h2>
        <p class="text-xl md:text-2xl leading-relaxed max-w-xl italic text-[var(--blue-slate)]">
          Hi! I study American histories of technology by focusing on African American education and
          professionalization.
        </p>
        <div class="flex gap-4">
          <button @click="navigateTo('about')" class="btn-offset px-8 py-3 font-mono uppercase font-bold text-sm">
            The Research
          </button>
          <button
            @click="navigateTo('writing')"
            class="btn-offset px-8 py-3 font-mono uppercase font-bold text-sm !bg-[var(--burnt-peach)] text-white">
            The Stories
          </button>
        </div>
      </div>

      <!-- Hero Image / Visual -->
      <div class="lg:col-span-5 relative">
        <div
          class="aspect-[4/5] bg-[var(--blue-slate)] overflow-hidden relative border-4 border-[var(--blue-slate)] max-w-xs md:max-w-sm lg:max-w-none lg:max-h-[60vh] lg:w-auto mx-auto">
          <img src="/assets/podium.jpeg" alt="Kelcey Gibbons" class="w-full h-full object-cover" />
        </div>
        <!-- Sticker Elements -->
        <div
          class="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-left-6 lg:translate-x-0 bg-[var(--sweet-peony)] text-white p-4 font-mono text-xs uppercase shadow-lg transform -rotate-3 border-2 border-[var(--blue-slate)] whitespace-nowrap">
          Professional Daydreamer
        </div>
      </div>
    </div>

    <!-- Quote Ticker -->
    <div class="mt-24 lg:mt-10 py-4 overflow-hidden whitespace-nowrap">
      <div class="inline-block animate-scroll font-mono uppercase text-sm tracking-widest text-[var(--sky-surge)]">
        Multimedia Storytelling • African American History • History of Technology • Philly-raised • Multimedia
        Storytelling • African American History • History of Technology • Philly-raised • Multimedia Storytelling •
        African American History • History of Technology • Philly-raised • Multimedia Storytelling • African American
        History • History of Technology • Philly-raised •
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}
</style>
