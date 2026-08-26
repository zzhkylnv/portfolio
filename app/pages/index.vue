<template>
  <main class="relative min-h-screen w-full bg-[#040814] text-slate-100 overflow-x-hidden font-sans">
    <div
      class="pointer-events-none fixed inset-0 -z-10"
      style="background: radial-gradient(130% 100% at 10% 15%, #0f244a 0%, #071226 40%, #040814 85%);"
    />

    <!-- Navbar  -->
<header class="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
  <nav class="relative flex items-center rounded-full bg-slate-950/40 backdrop-blur-xl border border-cyan-500/20 px-6 sm:px-8 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
    <ul class="relative flex items-center gap-3 sm:gap-4">
      <div
        class="absolute -top-[7px] left-0 pointer-events-none transition-all duration-300 ease-out z-20 flex flex-col items-center justify-center"
        :style="{
          transform: indicatorStyle.transform,
          width: indicatorStyle.width,
          opacity: indicatorStyle.opacity
        }"
      >
        <div class="h-[2px] w-full rounded-full bg-cyan-200 shadow-[0_0_10px_#22d3ee]" />
        <div class="h-4 w-full -mt-1 rounded-full bg-cyan-400/40 blur-sm" />
      </div>
      <li
        v-for="(item, index) in navItems"
        :key="item.name"
        class="relative"
        ref="navItemRefs"
      >
        <a
          :href="item.href"
          @click.prevent="setActive(index)"
          class="relative z-10 block px-2.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-medium tracking-wider uppercase transition-all duration-300 rounded-full"
          :class="[
            activeIndex === index 
              ? 'text-white font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
              : 'text-slate-400 hover:text-cyan-200'
          ]"
        >
          {{ item.name }}
        </a>
      </li>

    </ul>
  </nav>
</header>
    <section id="home" class="relative isolate min-h-screen w-full overflow-hidden flex items-center">
      <div class="pointer-events-none absolute -left-24 top-1/4 -z-10 h-[36rem] w-[36rem] animate-pulse rounded-full bg-cyan-600/15 blur-[130px]" />

      <div class="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <span
          v-for="(star, i) in stars"
          :key="i"
          class="absolute animate-twinkle rounded-full bg-cyan-100"
          :style="{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay
          }"
        />
      </div>

      <div class="relative mx-auto grid min-h-screen w-full max-w-[1700px] grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] pt-20 lg:pt-0 items-center">
        <div class="relative z-10 flex flex-col justify-center px-6 py-24 sm:px-12 sm:py-28 lg:pl-28 lg:pr-12">
          <div class="animate-rise max-w-2xl">
            <p class="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-cyan-300/80">
              <span class="h-px w-8 bg-cyan-400/40" />
              PORTFOLIO
            </p>

            <h1 class="font-display font-normal leading-[1.08] text-slate-100">
              <span class="block font-sans text-3xl font-light text-slate-400 sm:text-4xl md:text-5xl">
                Hello there,
              </span>
              <span class="mt-3 block text-[2.75rem] xs:text-5xl sm:text-7xl md:text-8xl">
                <span class="text-cyan-300 not-italic">I'm</span> Azizah
                <br class="hidden sm:block" />
                Keylanova
                <br class="hidden sm:block" />
                Gunawan.
              </span>
            </h1>

            <p class="mt-10 max-w-md text-lg leading-relaxed text-slate-300 sm:text-xl">
              Welcome to my little corner of the internet—it's still quiet, but slowly taking shape.
            </p>

            <div class="mt-14 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest2 text-slate-400">
              <span class="h-px w-8 bg-slate-600/50" />
              Newyork, ID
            </div>
          </div>
        </div>

        <div class="relative hidden items-center justify-center lg:flex -translate-y-6" aria-hidden="true">
          <div class="pointer-events-none absolute h-[32rem] w-[32rem] animate-pulse rounded-full bg-cyan-500/15 blur-[120px]" />
          <img
            src="/ironman.jpg"
            alt="Iron Man Hologram"
            class="pointer-events-none relative h-[85vh] max-h-[600px] w-auto scale-125 object-contain mix-blend-screen opacity-95 contrast-135 brightness-110 drop-shadow-[0_0_50px_rgba(0,217,255,0.6)] [mask-image:radial-gradient(ellipse_65%_75%_at_center,black_45%,transparent_80%)] transition-transform duration-500"
          />
        </div>
      </div>
    </section>

<section id="about" class="relative isolate min-h-screen w-full overflow-hidden py-24 flex flex-col justify-center">
  <div class="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 -z-10 h-[32rem] w-[32rem] animate-pulse rounded-full bg-blue-600/15 blur-[140px]" />

  <div class="relative mx-auto w-full max-w-[1400px] px-6 sm:px-12 lg:px-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
      <div v-reveal.scale class="relative flex items-center justify-center min-h-[350px]">
        <div class="pointer-events-none absolute h-[20rem] w-[20rem] sm:h-[24rem] sm:w-[24rem] animate-pulse rounded-full bg-cyan-400/20 blur-[100px]" />
        
        <img
          src="/ironmanheart.jpg"
          alt="Iron Man Arc Reactor Heart"
          class="pointer-events-none relative w-full max-w-[320px] sm:max-w-[380px] h-auto object-contain mix-blend-screen opacity-95 contrast-125 brightness-110 drop-shadow-[0_0_45px_rgba(0,217,255,0.7)] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_72%)]"
        />
      </div>

      <div v-reveal.right class="relative z-10 flex flex-col justify-center">
        <p class="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest2 text-cyan-400">
          <span class="h-px w-8 bg-cyan-400/50" />
          ABOUT ME
        </p>

        <h2 class="font-display text-4xl sm:text-5xl lg:text-6xl text-slate-100 font-normal leading-tight">
          Driven by curiosity, <br />
          powered by <span class="text-cyan-300 italic">creativity</span>.
        </h2>

        <p class="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
I'm a Junior Developer and PPLG student with a growing interest in web development. I'm currently learning, experimenting, and building projects to improve my skills in both frontend and backend development.

I may still be at the beginning of my journey, but I'm always curious to learn something new, solve problems, and turn ideas into real projects.

        </p>
      </div>

    </div>

<div class="mt-9 border-t border-cyan-500/15 pt-9">
  
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">
    
    <div v-reveal.left>
      <h3 class="font-display text-lg sm:text-xl font-normal text-slate-100 italic mb-3">
        Education
      </h3>

      <div class="relative pl-6 border-l border-cyan-500/30">
        <div class="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        
        <div class="space-y-0.5">
          <p class="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-medium">
            SMK Negeri 1 Gunungputri
          </p>
          <h4 class="text-sm font-semibold text-slate-100">Pengembangan Perangkat Lunak & Gim (PPLG)</h4>
          <p class="font-mono text-[10px] text-slate-400">2024 — Present</p>
          <p class="text-xs text-slate-400 leading-relaxed pt-1 max-w-sm">
            Delving into the foundations of software engineering, structured programming logic, web interface architecture, and the basics of mobile application development.
          </p>
        </div>
      </div>
    </div>

    <div v-reveal.right>
      <h3 class="font-display text-lg sm:text-xl font-normal text-slate-100 italic mb-3">
        Experience
      </h3>

      <div class="relative pl-6 border-l border-cyan-500/30 space-y-6">
        <div class="relative">
          <div class="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          
          <div class="space-y-0.5">
            <p class="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-medium">
              Academic & Vocational Projects
            </p>
            <h4 class="text-sm font-semibold text-slate-100">Full-Stack & Mobile Exploration Developer</h4>
            <p class="font-mono text-[10px] text-slate-400">Project-Based Learning (SMK)</p>
           
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          
          <div class="space-y-0.5">
            <p class="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-medium">
              Clevio National AI Game Contest
            </p>
            <h4 class="text-sm font-semibold text-slate-100">AI-Powered Game Creator & Digital Illustrator</h4>
            <p class="font-mono text-[10px] text-slate-400">National AI Game Competition</p>
            
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-[28.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          
          <div class="space-y-0.5">
            <p class="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-medium">
              Junior Frontend Developer
            </p>
            <h4 class="text-sm font-semibold text-slate-100">Internship</h4>
            <p class="font-mono text-[10px] text-slate-400">Present</p>
            
          </div>
        </div>

      </div>
    </div>

  </div>

</div>

  </div>
</section>

<!-- SECTION 3: PORTFOLIO -->
<section id="portfolio" class="relative isolate min-h-screen w-full overflow-hidden py-20 flex flex-col justify-center">
  
  <div class="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 h-[30rem] w-[45rem] animate-pulse rounded-full bg-cyan-600/10 blur-[150px]" />

  <div class="relative mx-auto w-full max-w-[1300px] px-6 sm:px-12 lg:px-16">
    
    <div v-reveal class="text-center max-w-2xl mx-auto mb-10">
      <p class="font-mono text-[10px] text-cyan-400 tracking-[0.25em] uppercase font-medium">
        MY CRAFTS & SKILLS
      </p>
      <h2 class="font-display text-3xl sm:text-4xl font-normal text-slate-100 italic mt-1">
        Portfolio
      </h2>
    </div>

    <div v-reveal.fade class="flex justify-center mb-12 border-b border-slate-800/80 pb-3 max-w-xl mx-auto">
      <div class="relative flex gap-4 xs:gap-8 sm:gap-12">
        <!-- Sliding underline indicator -->
        <div
          class="absolute bottom-[-13px] h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee] rounded-full transition-all duration-300 ease-out z-20"
          :style="{
            left: portfolioIndicatorStyle.left,
            width: portfolioIndicatorStyle.width,
            opacity: portfolioIndicatorStyle.opacity
          }"
        />
        
        <!-- Tab Projects -->
        <button
          ref="projectsTabRef"
          @click="activeTab = 'projects'"
          class="relative py-2 text-[10px] xs:text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
          :class="[activeTab === 'projects' ? 'text-cyan-400 font-semibold' : 'text-slate-500 hover:text-slate-300']"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          Projects
        </button>

        <!-- Tab Certificates -->
        <button
          ref="certificatesTabRef"
          @click="activeTab = 'certificates'"
          class="relative py-2 text-[10px] xs:text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
          :class="[activeTab === 'certificates' ? 'text-cyan-400 font-semibold' : 'text-slate-500 hover:text-slate-300']"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
          Certificates
        </button>

        <!-- Tab Tech Stack -->
        <button
          ref="techTabRef"
          @click="activeTab = 'tech'"
          class="relative py-2 text-[10px] xs:text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
          :class="[activeTab === 'tech' ? 'text-cyan-400 font-semibold' : 'text-slate-500 hover:text-slate-300']"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          Tech Stack
        </button>

      </div>
    </div>

    <div class="min-h-[350px]">
      <Transition name="tab-fade" mode="out-in">
        
        <!-- 1. PROJECTS GRID -->
        <div v-if="activeTab === 'projects'" key="projects" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in projects"
          :key="index"
          v-reveal="index * 100"
          class="group relative h-64 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-center items-center"
        >
          <!-- Jika Gambar Kosong -->
          <template v-if="!item.image">
            <div class="absolute inset-0 bg-[#071124] flex flex-col items-center justify-center p-5 sm:p-6 text-center">
              <span class="font-mono text-xs text-cyan-400 tracking-[0.3em] uppercase mb-2 animate-pulse">
                // COMING SOON
              </span>
              <h3 class="text-base font-semibold text-slate-200">
                {{ item.title }}
              </h3>
            </div>
          </template>

          <!-- Jika Ada Gambar -->
          <template v-else>
            <img :src="item.image" :alt="item.title" class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />
            <div class="absolute bottom-3 left-4 group-hover:opacity-0 transition-opacity duration-300">
              <span class="font-mono text-[10px] text-cyan-300 tracking-wider uppercase block">{{ item.title }}</span>
            </div>
          </template>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-[#040814]/95 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span class="font-mono text-[9px] text-cyan-400 tracking-widest uppercase mb-1">{{ item.category }}</span>
            <h3 class="text-base font-semibold text-slate-100">{{ item.title }}</h3>
            <div class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
              <span v-for="(t, i) in item.tech" :key="i" class="font-mono text-[9px] text-cyan-300 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded-full">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 2. CERTIFICATES GRID -->
      <div v-else-if="activeTab === 'certificates'" key="certificates" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          v-reveal="index * 100"
          class="group relative h-60 w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-center items-center"
        >
          <template v-if="cert.isComingSoon">
            <div class="absolute inset-0 bg-[#071124] flex flex-col items-center justify-center p-5 sm:p-6 text-center border border-dashed border-slate-800">
              <h3 class="text-sm font-semibold text-slate-400 tracking-wider">
                COMING SOON
              </h3>
              <p class="text-[11px] text-slate-600 mt-1">
                The next certificate is coming soon.
              </p>
            </div>
          </template>

          <!-- Jika Sertifikat Asli Ada -->
          <template v-else>
            <img :src="cert.image" :alt="cert.title" class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-300" />
            <div class="absolute bottom-3 left-4 group-hover:opacity-0 transition-opacity duration-300">
              <span class="font-mono text-[10px] text-cyan-300 tracking-wider uppercase block">{{ cert.title }}</span>
            </div>
            
            <div class="absolute inset-0 bg-[#040814]/90 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-[9px] text-cyan-400 uppercase tracking-widest">{{ cert.category }}</span>
                <span class="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{{ cert.year }}</span>
              </div>
              <h3 class="text-sm font-semibold text-slate-100">{{ cert.title }}</h3>
              <p class="text-[11px] font-mono text-cyan-300/80 mt-1">Issuer: {{ cert.issuer }}</p>
              <p class="text-xs text-slate-300 leading-relaxed mt-2">{{ cert.description }}</p>
            </div>
          </template>
        </div>
      </div>

      <!-- 3. TECH STACK (MINIMALIST LOGOS) -->
      <div v-else-if="activeTab === 'tech'" key="tech" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          v-reveal="index * 50"
          class="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="text-xl sm:text-2xl w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-800/20 flex items-center justify-center">
            {{ tech.icon }}
          </div>
          <div>
            <h3 class="text-xs sm:text-sm font-mono font-medium text-slate-200">
              {{ tech.name }}
            </h3>
          </div>
        </div>
      </div>
      
      </Transition>
      </div>

    </div>

  
</section>

<!-- SECTION 4: CONTACT & FOOTER -->
<section id="contact" class="relative isolate min-h-screen w-full overflow-hidden py-20 flex flex-col justify-between bg-[#030712]">

  <!-- STARFIELD BACKGROUND -->
  <div class="pointer-events-none absolute inset-0 -z-10">
    <div
      v-for="(star, index) in contactStars"
      :key="index"
      class="absolute rounded-full bg-cyan-200 animate-pulse"
      :style="{
        top: star.top,
        left: star.left,
        width: star.size + 'px',
        height: star.size + 'px',
        animationDelay: star.delay,
        boxShadow: '0 0 10px #22d3ee, 0 0 20px #22d3ee'
      }"
    />
  </div>

  <div class="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 h-[38rem] w-[55rem] rounded-full bg-cyan-500/10 blur-[170px]" :class="{ 'animate-pulse': !isStriking }" />

  <!-- SCREEN FLASH OVERLAY -->
  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-cyan-300/20 transition-opacity duration-75"
    :style="{ opacity: boltOpacity * 0.35 }"
  />

 <!-- MAIN LAYOUT -->
<div class="relative mx-auto w-full max-w-[1200px] px-6 sm:px-12">

  <div class="relative flex flex-col items-center justify-center min-h-[450px] sm:min-h-[550px] w-full" ref="strikeArea">

    <div 
      v-reveal.left
      class="absolute left-2 sm:left-8 bottom-2 sm:bottom-8 z-20 pointer-events-auto"
      :class="{ 'animate-bounce-slow': !isStriking }"
      ref="tesseractEl"
    >
      <div class="relative group">
        <div
          class="absolute -inset-4 rounded-full bg-cyan-400/30 blur-2xl transition-all duration-300 group-hover:bg-cyan-300/60"
          :class="{ 'bg-cyan-200/90 scale-150 blur-3xl': isStriking }"
        />
        <img 
          src="/teserak.png" 
          alt="Tesseract" 
          class="relative w-20 h-20 sm:w-32 sm:h-32 object-contain -rotate-12 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" 
        />
      </div>
    </div>

    <div v-reveal.right class="absolute right-8 sm:right-23 top-2 sm:top-4 z-20 pointer-events-auto" ref="hammerEl">
      <div class="relative group">
        <div
          class="absolute -inset-6 rounded-full bg-cyan-400/40 blur-2xl transition-all duration-150 group-hover:bg-cyan-300/70"
          :class="{ 'bg-cyan-200/90 scale-125': isStriking }"
        />
        <img src="/paluthor.png" alt="Thor Hammer" class="relative w-24 h-24 sm:w-40 sm:h-40 object-contain rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]" />
      </div>
    </div>

    <svg class="pointer-events-none absolute inset-0 w-full h-full z-40" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="softNebulaBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="midGlowBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="coreGlowBlur" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <path
        ref="nebulaPathEl"
        :d="pathD"
        fill="none"
        stroke="#22d3ee"
        stroke-width="14"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#softNebulaBlur)"
        :style="pathStyle"
        :opacity="boltOpacity * 0.9"
      />
      <path
        :d="pathD"
        fill="none"
        stroke="#67e8f9"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#midGlowBlur)"
        :style="pathStyle"
        :opacity="boltOpacity"
      />
      <path
        :d="pathD"
        fill="none"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        filter="url(#coreGlowBlur)"
        :style="pathStyle"
        :opacity="boltOpacity"
      />
    </svg>

    <!-- 4. CENTER TEXT & ICON BUTTONS -->
<div v-reveal.scale class="relative z-30 flex flex-col items-center justify-center text-center max-w-3xl px-4">
  <h2 class="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight drop-shadow-2xl">
    Let's Build Something <br />
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 italic">
      Worthy & Powerful.
    </span>
  </h2>

  <div class="mt-4 flex items-center justify-center gap-6 relative z-50">
    
    <a 
      href="https://mail.google.com/mail/?view=cm&fs=1&to=azizahkeylanova7@gmail.com" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Send Email via Gmail"
      title="Kirim Email via Gmail"
      class="text-slate-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] p-2"
    >
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.545l8.073-6.052C21.69 2.279 24 3.434 24 5.457z"/>
      </svg>
    </a>

    <a 
      href="https://wa.me/62895383210625" 
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      title="Chat via WhatsApp"
      class="text-slate-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 drop-shadow-[0_0_12px_rgba(34,211,238,0.4)] hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] p-2"
    >
      <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
    </a>

  </div>
</div>

  </div>
</div>


  <!-- FOOTER BOTTOM  -->
  <footer class="relative z-30 w-full border-t border-slate-800/80 pt-6 pb-2">
    <div class="mx-auto max-w-[1200px] px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="font-mono text-xs text-slate-500">
        © {{ new Date().getFullYear() }} Azizah. 
      </p>
      <div class="flex items-center gap-3">
        <a href="https://github.com" target="_blank" aria-label="GitHub" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z"/></svg>
        </a>
        <a href="https://www.instagram.com/zizahkeylnv" target="_blank" aria-label="Instagram" class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke-width="2"/><path stroke-width="2" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke-width="2" stroke-linecap="round"/></svg>
        </a>
      </div>
    </div>
  </footer>


</section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted, onBeforeUnmount, watch } from 'vue'

const stars = [
  { top: '10%', left: '18%', size: 2, delay: '0s' },
  { top: '20%', left: '80%', size: 3, delay: '0.6s' },
  { top: '78%', left: '12%', size: 2, delay: '1.4s' },
  { top: '15%', left: '92%', size: 2, delay: '2.1s' },
  { top: '85%', left: '75%', size: 3, delay: '0.3s' },
  { top: '90%', left: '30%', size: 2, delay: '1.9s' },
  { top: '5%', left: '55%', size: 2, delay: '1.1s' },
  { top: '68%', left: '6%', size: 3, delay: '2.6s' }
]

const navItems = [
  { name: 'HOME', href: '#home', id: 'home' },
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
  { name: 'CONTACT', href: '#contact', id: 'contact' }
]

const activeIndex = ref(0)
let observer: IntersectionObserver | null = null

const setActive = (index: number) => {
  activeIndex.value = index
  const item = navItems[index]
  const element = document.querySelector(item.href)
  if (element) {
    const { $lenis } = useNuxtApp()
    if ($lenis) {
      $lenis.scrollTo(element, { 
        offset: 0, 
        duration: 1.2
      })
    }
  }
}

const navItemRefs = ref<HTMLElement[]>([])

const indicatorStyle = ref({
  transform: 'translateX(0px)',
  width: '0px',
  opacity: 0
})

const updateIndicator = () => {
  const activeItem = navItemRefs.value[activeIndex.value]
  if (activeItem) {
    const offsetLeft = activeItem.offsetLeft
    const offsetWidth = activeItem.offsetWidth

    indicatorStyle.value = {
      transform: `translateX(${offsetLeft}px)`, 
      width: `${offsetWidth}px`,                
      opacity: 1
    }
  }
}

watch(activeIndex, () => {
  nextTick(updateIndicator)
})

onMounted(() => {
  nextTick(updateIndicator)
  window.addEventListener('resize', updateIndicator)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIndicator)
})

// --- SECTION 3:  ---
const activeTab = ref<'projects' | 'certificates' | 'tech'>('projects')

const projectsTabRef = ref<HTMLElement | null>(null)
const certificatesTabRef = ref<HTMLElement | null>(null)
const techTabRef = ref<HTMLElement | null>(null)

const portfolioIndicatorStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0
})

const updatePortfolioIndicator = () => {
  let activeEl: HTMLElement | null = null
  if (activeTab.value === 'projects') {
    activeEl = projectsTabRef.value
  } else if (activeTab.value === 'certificates') {
    activeEl = certificatesTabRef.value
  } else if (activeTab.value === 'tech') {
    activeEl = techTabRef.value
  }

  if (activeEl) {
    const offsetLeft = activeEl.offsetLeft
    const offsetWidth = activeEl.offsetWidth
    portfolioIndicatorStyle.value = {
      left: `${offsetLeft}px`,
      width: `${offsetWidth}px`,
      opacity: 1
    }
  }
}

watch(activeTab, () => {
  nextTick(updatePortfolioIndicator)
})

const handleResize = () => {
  updateIndicator()
  updatePortfolioIndicator()
}

const projects = [
  {
    title: 'Sushi Store Web App',
    tech: ['HTML/CSS', 'JavaScript', 'Tailwind CSS'],
    image: '',
    isComingSoon: false
  },
 
  {
    title: 'BookLoop Library System',
    category: 'School Project • Web App',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    image: '/bookloop.png',
    isComingSoon: false
  },
  {
    title: 'Graduation Status Checker',
    category: 'Mobile App • Flutter',
    tech: ['Flutter', 'Dart', 'UI/UX'],
    image: '',
    isComingSoon: false
  },
  {
    title: 'Warisan Ayah (Detective Game)',
    category: 'Game Dev • Interactive Story',
    tech: ['Game Engine', 'Logic Building', 'Storytelling'],
    image: '/warisan.jpeg',
    isComingSoon: false
  }
]

const certificates = [
  {
    title: 'Clevio National AI Game Competition',
    issuer: 'Clevio Coder Camp',
    year: '2025',
    category: 'Game Design & AI',
    image: '/clevio.png',
    isComingSoon: false
  },
  {
    title: 'Future Tech Certificate 02',
    issuer: 'Coming Soon',
    year: '2026',
    category: 'Upcoming Achievement',
    description: 'Sertifikasi keahlian profesional berikutnya yang sedang disiapkan.',
    image: '',
    isComingSoon: true
  },
  {
    title: 'Future Tech Certificate 03',
    issuer: 'Coming Soon',
    year: '2026',
    category: 'Upcoming Achievement',
    description: 'Sertifikasi kompetensi bidang teknologi mendatang.',
    image: '',
    isComingSoon: true
  }
]


const contactStars = [
  { top: '15%', left: '10%', size: 2, delay: '0.2s' },
  { top: '25%', left: '85%', size: 3, delay: '1.2s' },
  { top: '70%', left: '15%', size: 2, delay: '0.8s' },
  { top: '80%', left: '78%', size: 3, delay: '2.0s' },
  { top: '40%', left: '92%', size: 2, delay: '0.5s' },
  { top: '10%', left: '60%', size: 3, delay: '1.7s' },
  { top: '88%', left: '40%', size: 2, delay: '2.4s' }
]


// SECTION 4


interface Point {
  x: number
  y: number
}

const strikeArea = ref<HTMLElement | null>(null)
const hammerEl = ref<HTMLElement | null>(null)
const tesseractEl = ref<HTMLElement | null>(null)
const nebulaPathEl = ref<SVGPathElement | null>(null)

const isStriking = ref(false)
const sparkStart = ref<Point>({ x: 0, y: 0 })
const sparkEnd = ref<Point>({ x: 0, y: 0 })

const pathD = ref('')
const boltOpacity = ref(0)
const sparkOpacity = ref(0)

const pathLength = ref(0)
const dashOffset = ref(0)
const transitionDuration = ref('0s')

const pathStyle = computed(() => ({
  strokeDasharray: `${pathLength.value}`,
  strokeDashoffset: `${dashOffset.value}`,
  transition: `stroke-dashoffset ${transitionDuration.value} ease-out`
}))

let strikeTimeoutId: ReturnType<typeof setTimeout> | null = null
let stepTimeoutIds: ReturnType<typeof setTimeout>[] = []

function getRelativePoint(el: HTMLElement | null): Point {
  if (!el || !strikeArea.value) return { x: 0, y: 0 }
  const areaRect = strikeArea.value.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  return {
    x: elRect.left + elRect.width / 2 - areaRect.left,
    y: elRect.top + elRect.height / 2 - areaRect.top
  }
}

function buildZigzagPath(start: Point, end: Point, segments = 6): string {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  const perpX = -dy / len
  const perpY = dx / len

  const points: Point[] = [start]
  for (let i = 1; i < segments; i++) {
    const t = i / segments
    const baseX = start.x + dx * t
    const baseY = start.y + dy * t
    const amp = (len / segments) * 0.45 * (i % 2 === 0 ? 1 : -1)
    const jitter = (Math.random() - 0.5) * 10
    points.push({
      x: baseX + perpX * (amp + jitter),
      y: baseY + perpY * (amp + jitter)
    })
  }
  points.push(end)

  return 'M ' + points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' L ')
}

async function fireStrike() {
  const start = getRelativePoint(hammerEl.value)
  const end = getRelativePoint(tesseractEl.value)
  sparkStart.value = start
  sparkEnd.value = end

  pathD.value = buildZigzagPath(start, end)
  boltOpacity.value = 1
  isStriking.value = true

  await nextTick()
  const total = nebulaPathEl.value?.getTotalLength() ?? 400
  pathLength.value = total

  transitionDuration.value = '0s'
  dashOffset.value = total

  await nextTick()

  stepTimeoutIds.push(
    setTimeout(() => {
      transitionDuration.value = '0.55s'
      dashOffset.value = 0
      sparkOpacity.value = 1
    }, 30)
  )

  stepTimeoutIds.push(
    setTimeout(() => {
      boltOpacity.value = 0.4
    }, 620)
  )
  stepTimeoutIds.push(
    setTimeout(() => {
      boltOpacity.value = 1
    }, 680)
  )

  stepTimeoutIds.push(
    setTimeout(() => {
      transitionDuration.value = '0.6s'
      boltOpacity.value = 0
      sparkOpacity.value = 0
    }, 950)
  )

  stepTimeoutIds.push(
    setTimeout(() => {
      isStriking.value = false
      scheduleNextStrike()
    }, 1600)
  )
}

function scheduleNextStrike() {
  const delay = 2500 + Math.random() * 3500
  strikeTimeoutId = setTimeout(fireStrike, delay)
}

onMounted(() => {
  let isMounted = false
  setTimeout(() => {
    isMounted = true
  }, 350)

  const sections = document.querySelectorAll('section[id]')
  observer = new IntersectionObserver(
    (entries) => {
      if (!isMounted) return
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex((item) => item.id === entry.target.id)
          if (index !== -1) {
            activeIndex.value = index
          }
        }
      })
    },
    { threshold: 0.3 }
  )
  sections.forEach((section) => observer?.observe(section))

  scheduleNextStrike()

  window.addEventListener('resize', handleResize)
  nextTick(() => {
    updateIndicator()
    updatePortfolioIndicator()
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  if (strikeTimeoutId) clearTimeout(strikeTimeoutId)
  stepTimeoutIds.forEach((id) => clearTimeout(id))
})
</script>

<style>
@keyframes floatSlow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(3deg);
  }
}

.animate-bounce-slow {
  animation: floatSlow 5s ease-in-out infinite;
}
</style>