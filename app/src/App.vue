<script setup>
import { Linkedin, Mail, Menu, Twitter } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const mobileMenu = ref(false)

const navigateTo = (page) => {
  router.push({ name: page })
  mobileMenu.value = false
}
</script>

<template>
  <div class="noise min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="sticky top-0 z-40 bg-[var(--white-smoke)] border-b-2 border-[var(--blue-slate)] px-6 py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div @click="navigateTo('home')" class="cursor-pointer">
          <h1 class="font-header text-2xl font-black uppercase tracking-tighter leading-none">
            Kelcey
            <span class="text-[var(--sweet-peony)]">Gibbons</span>
          </h1>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--burnt-peach)]">
            Technologist History / MIT
          </p>
        </div>

        <div class="hidden md:flex gap-8 font-mono text-sm uppercase font-bold">
          <button
            @click="navigateTo('home')"
            :class="route.name === 'home' ? 'text-[var(--sweet-peony)] underline' : ''">
            Home
          </button>
          <button
            @click="navigateTo('about')"
            :class="route.name === 'about' ? 'text-[var(--sweet-peony)] underline' : ''">
            About
          </button>
          <button @click="navigateTo('cv')" :class="route.name === 'cv' ? 'text-[var(--sweet-peony)] underline' : ''">
            CV
          </button>
          <button
            @click="navigateTo('writing')"
            :class="route.name === 'writing' ? 'text-[var(--sweet-peony)] underline' : ''">
            Poems & Stories
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-[var(--blue-slate)]" @click="mobileMenu = !mobileMenu">
          <Menu />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenu"
        class="md:hidden absolute top-full left-0 w-full bg-[var(--white-smoke)] border-b-2 border-[var(--blue-slate)] p-6 space-y-4 font-mono uppercase text-center shadow-xl">
        <div @click="navigateTo('home')" class="cursor-pointer">Home</div>
        <div @click="navigateTo('about')" class="cursor-pointer">About</div>
        <div @click="navigateTo('cv')" class="cursor-pointer">CV</div>
        <div @click="navigateTo('writing')" class="cursor-pointer">Poems & Stories</div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- Footer -->
    <footer class="p-8 border-t-2 border-[var(--blue-slate)] bg-[var(--white-smoke)]">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="font-mono text-[10px] uppercase tracking-widest text-[var(--blue-slate)]">
          © 2024 Kelcey Gibbons | MIT History of Tech | Constructed for the Future
        </div>
        <div class="flex gap-6">
          <a href="#" class="text-[var(--blue-slate)] hover:text-[var(--sweet-peony)] transition-colors">
            <Twitter />
          </a>
          <a href="#" class="text-[var(--blue-slate)] hover:text-[var(--sweet-peony)] transition-colors">
            <Linkedin />
          </a>
          <a href="#" class="text-[var(--blue-slate)] hover:text-[var(--sweet-peony)] transition-colors">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
