<script setup>
import { ref, onMounted } from 'vue'
import { Menu, Camera, Microscope, Sparkles, Twitter, Linkedin, Mail } from 'lucide-vue-next'

const currentPage = ref('home')
const mobileMenu = ref(false)
</script>

<template>
  <div class="noise min-h-screen flex flex-col">
    <!-- Navigation -->
    <nav class="sticky top-0 z-40 bg-[var(--white-smoke)] border-b-2 border-[var(--blue-slate)] px-6 py-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div @click="currentPage = 'home'" class="cursor-pointer">
          <h1 class="font-header text-2xl font-black uppercase tracking-tighter leading-none">
            Kelcey <span class="text-[var(--sweet-peony)]">Gibbons</span>
          </h1>
          <p class="font-mono text-xs uppercase tracking-widest text-[var(--burnt-peach)]">Digital Griot / MIT</p>
        </div>

        <div class="hidden md:flex gap-8 font-mono text-sm uppercase font-bold">
          <button @click="currentPage = 'home'" :class="currentPage === 'home' ? 'text-[var(--sweet-peony)] underline' : ''">Home</button>
          <button @click="currentPage = 'about'" :class="currentPage === 'about' ? 'text-[var(--sweet-peony)] underline' : ''">About</button>
          <button @click="currentPage = 'writing'" :class="currentPage === 'writing' ? 'text-[var(--sweet-peony)] underline' : ''">Poems & Stories</button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-[var(--blue-slate)]" @click="mobileMenu = !mobileMenu">
          <Menu />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenu" class="md:hidden absolute top-full left-0 w-full bg-[var(--white-smoke)] border-b-2 border-[var(--blue-slate)] p-6 space-y-4 font-mono uppercase text-center shadow-xl">
        <div @click="currentPage = 'home'; mobileMenu = false" class="cursor-pointer">Home</div>
        <div @click="currentPage = 'about'; mobileMenu = false" class="cursor-pointer">About</div>
        <div @click="currentPage = 'writing'; mobileMenu = false" class="cursor-pointer">Poems & Stories</div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow">
      <Transition name="fade" mode="out-in">
        <!-- Home Page -->
        <section v-if="currentPage === 'home'" key="home" class="p-6 md:p-12 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <!-- Hero Text -->
            <div class="lg:col-span-7 space-y-8 relative z-10">
              <div class="inline-block px-4 py-1 bg-[var(--sky-surge)] text-white font-mono text-sm uppercase">
                PhD Candidate @ MIT
              </div>
              <h2 class="font-header text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
                Learning <br> is <br> <span class="text-[var(--sweet-peony)] underline decoration-sky-400">Liberating</span>
              </h2>
              <p class="text-xl md:text-2xl leading-relaxed max-w-xl italic text-[var(--blue-slate)]">
                "I study American histories of technology by focusing on African American education and professionalization."
              </p>
              <div class="flex gap-4">
                <button @click="currentPage = 'about'" class="btn-offset px-8 py-3 font-mono uppercase font-bold text-sm">
                  The Research
                </button>
                <button @click="currentPage = 'writing'" class="btn-offset px-8 py-3 font-mono uppercase font-bold text-sm bg-[var(--burnt-peach)] text-white">
                  The Stories
                </button>
              </div>
            </div>

            <!-- Hero Image / Visual -->
            <div class="lg:col-span-5 relative">
              <div class="aspect-[4/5] bg-[var(--blue-slate)] overflow-hidden relative border-4 border-[var(--blue-slate)]">
                <img src="/assets/podium.jpeg" alt="Kelcey Gibbons" class="w-full h-full object-cover" />
              </div>
              <!-- Sticker Elements -->
              <div class="absolute -bottom-6 -left-6 bg-[var(--sweet-peony)] text-white p-4 font-mono text-xs uppercase shadow-lg transform -rotate-3 border-2 border-[var(--blue-slate)]">
                Professional Daydreamer
              </div>
            </div>
          </div>

          <!-- Quote Ticker -->
          <div class="mt-24 border-t-2 border-b-2 border-[var(--blue-slate)] py-4 overflow-hidden whitespace-nowrap">
            <div class="inline-block animate-pulse font-mono uppercase text-sm tracking-widest text-[var(--sky-surge)]">
              Multimedia Storytelling • African American History • History of Technology • Digital Griot •
              Multimedia Storytelling • African American History • History of Technology • Digital Griot •
            </div>
          </div>
        </section>

        <!-- About Page -->
        <section v-else-if="currentPage === 'about'" key="about" class="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
          <div class="flex flex-col md:flex-row gap-12">
            <div class="md:w-1/3">
              <div class="aspect-square bg-[var(--burnt-peach)] border-4 border-[var(--blue-slate)] relative duotone-hover">
                <div class="absolute inset-0 flex items-center justify-center text-white/30 font-mono text-xs text-center p-4">
                  [ Image: Kelcey in the Lab ]
                </div>
                <div class="absolute -top-4 -right-4 w-12 h-12 bg-[var(--sky-surge)] rounded-full border-2 border-[var(--blue-slate)] flex items-center justify-center text-white">
                  <Microscope class="w-6 h-6" />
                </div>
              </div>
            </div>
            <div class="md:w-2/3 space-y-6">
              <h2 class="font-header text-5xl font-black uppercase text-[var(--blue-slate)]">About Kelcey</h2>
              <div class="prose prose-lg text-[var(--blue-slate)] space-y-4">
                <p>I am a PhD Candidate at MIT studying American histories of technology. My work centers on the vibrant, often overlooked lineages of African American education and professionalization.</p>
                <p>By bridging the gap between archival research and multimedia storytelling, I seek to reveal how technological systems have been both sites of exclusion and tools for liberation.</p>
                <p>I am a professional daydreamer, a multimedia storyteller, and I love my research so, so much. I believe that understanding our technical past is a prerequisite for building equitable futures.</p>
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

        <!-- Writing Page -->
        <section v-else-if="currentPage === 'writing'" key="writing" class="p-6 md:p-12 max-w-7xl mx-auto">
          <h2 class="font-header text-5xl font-black uppercase mb-12 flex items-center gap-4">
            <span class="text-[var(--burnt-peach)]">Creative</span>
            <Sparkles class="text-[var(--sky-surge)]" />
            Archives
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="border-2 border-[var(--blue-slate)] p-8 bg-white btn-offset space-y-4">
              <div class="font-mono text-[10px] uppercase text-[var(--sky-surge)]">Short Story // Afrofuturism</div>
              <h3 class="font-header text-2xl uppercase font-bold">The Circuit Weaver</h3>
              <p class="text-sm italic text-[var(--blue-slate)]/70">"In the heart of the mainframe, she found the rhythm of the loom..."</p>
              <button class="text-[var(--sweet-peony)] font-mono text-xs uppercase font-bold hover:underline">Read Fragment →</button>
            </div>

            <!-- Card 2 -->
            <div class="border-2 border-[var(--blue-slate)] p-8 bg-[var(--burnt-peach)] text-white btn-offset space-y-4">
              <div class="font-mono text-[10px] uppercase opacity-70">Poetry // Technical</div>
              <h3 class="font-header text-2xl uppercase font-bold">Ode to the Vacuum Tube</h3>
              <p class="text-sm italic">"Glass-blown memories / glowing amber in the dark / carrying the voice of a ghost."</p>
              <button class="font-mono text-xs uppercase font-bold hover:underline">Read Fragment →</button>
            </div>

            <!-- Card 3 -->
            <div class="border-2 border-[var(--blue-slate)] p-8 bg-white btn-offset space-y-4">
              <div class="font-mono text-[10px] uppercase text-[var(--sky-surge)]">Story // Oral History</div>
              <h3 class="font-header text-2xl uppercase font-bold">Digital Ancestry</h3>
              <p class="text-sm italic text-[var(--blue-slate)]/70">Reflections on how we carry our elders into the silicon valley.</p>
              <button class="text-[var(--sweet-peony)] font-mono text-xs uppercase font-bold hover:underline">Read Fragment →</button>
            </div>

            <!-- Visual Grid Filler -->
            <div class="lg:col-span-2 aspect-[21/9] kente-border border-2 border-[var(--blue-slate)] flex items-center justify-center relative">
              <div class="bg-white px-6 py-2 border-2 border-[var(--blue-slate)] font-mono text-xs uppercase font-bold z-10">
                Multimedia Gallery Coming Soon
              </div>
            </div>
          </div>
        </section>
      </Transition>
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
