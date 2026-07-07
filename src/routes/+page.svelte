<script lang="ts">
  import { LINKS } from "$lib/links";
  import BeforeAfterGrid from "$lib/components/BeforeAfterGrid.svelte";

  const features = [
    {
      name: "Clean titles",
      body: "Face Value's edge is in the way titles are formed - reading the actual video transcript gives the AI a very accurate picture of the content, rather than working with only the title.",
    },
    {
      name: "Clean thumbnails",
      body: "A thumbnail caching process preserves a crisp looking homepage while fully addressing the fundamental issue.",
    },
    {
      name: "Hide Shorts",
      body: "One toggle removes Shorts shelves, reels, and the sidebar button everywhere. Nobody asked for YouTube to become Instagram Reels or TikTok.",
    },
    {
      name: "Channel exceptions",
      body: "Trust a creator? Pause Face Value on their channel and see them exactly as they publish.",
    },
  ];

  const steps = [
    {
      n: "01",
      title: "We read the transcript",
      body: "When a video first appears in anyone’s feed, our server fetches its public transcript.",
    },
    {
      n: "02",
      title: "The title is rewritten",
      body: "A language model rewrites the title to plainly state the contents of the video.",
    },
    {
      n: "03",
      title: "A real frame replaces the thumbnail",
      body: "We pull a sharp, representative frame from the video stream itself and display that instead of the thumbnail.",
    },
  ];

  // Monochrome brand marks (simple-icons, 24x24 viewBox), drawn with currentColor.
  const browsers = [
    {
      name: "Chrome",
      href: LINKS.chrome,
      icon: "M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z",
    },
    {
      name: "Firefox",
      href: LINKS.firefox,
      icon: "M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z",
    },
    {
      name: "Edge",
      href: LINKS.edge,
      icon: "M21.86 17.86q.14 0 .25.12.1.13.1.25t-.11.33l-.32.46-.43.53-.44.5q-.21.25-.38.42l-.22.23q-.58.53-1.34 1.04-.76.51-1.6.91-.86.4-1.74.64t-1.67.24q-.9 0-1.69-.28-.8-.28-1.48-.78-.68-.5-1.22-1.17-.53-.66-.92-1.44-.38-.77-.58-1.6-.2-.83-.2-1.67 0-1 .32-1.96.33-.97.87-1.8.14.95.55 1.77.41.82 1.02 1.5.6.68 1.38 1.21.78.54 1.64.9.86.36 1.77.56.92.2 1.8.2 1.12 0 2.18-.24 1.06-.23 2.06-.72l.2-.1.2-.05zm-15.5-1.27q0 1.1.27 2.15.27 1.06.78 2.03.51.96 1.24 1.77.74.82 1.66 1.4-1.47-.2-2.8-.74-1.33-.55-2.48-1.37-1.15-.83-2.08-1.9-.92-1.07-1.58-2.33T.36 14.94Q0 13.54 0 12.06q0-.81.32-1.49.31-.68.83-1.23.53-.55 1.2-.96.66-.4 1.35-.66.74-.27 1.5-.39.78-.12 1.55-.12.7 0 1.42.1.72.12 1.4.35.68.23 1.32.57.63.35 1.16.83-.35 0-.7.07-.33.07-.65.23v-.02q-.63.28-1.2.74-.57.46-1.05 1.04-.48.58-.87 1.26-.38.67-.65 1.39-.27.71-.42 1.44-.15.72-.15 1.38zM11.96.06q1.7 0 3.33.39 1.63.38 3.07 1.15 1.43.77 2.62 1.93 1.18 1.16 1.98 2.7.49.94.76 1.96.28 1 .28 2.08 0 .89-.23 1.7-.24.8-.69 1.48-.45.68-1.1 1.22-.64.53-1.45.88-.54.24-1.11.36-.58.13-1.16.13-.42 0-.97-.03-.54-.03-1.1-.12-.55-.1-1.05-.28-.5-.19-.84-.5-.12-.09-.23-.24-.1-.16-.1-.33 0-.15.16-.35.16-.2.35-.5.2-.28.36-.68.16-.4.16-.95 0-1.06-.4-1.96-.4-.91-1.06-1.64-.66-.74-1.52-1.28-.86-.55-1.79-.89-.84-.3-1.72-.44-.87-.14-1.76-.14-1.55 0-3.06.45T.94 7.55q.71-1.74 1.81-3.13 1.1-1.38 2.52-2.35Q6.68 1.1 8.37.58q1.7-.52 3.58-.52Z",
    },
  ];
</script>

<svelte:head>
  <title>Face Value | Take your attention back from YouTube</title>
  <meta
    name="description"
    content="Face Value is a clickbait remover for YouTube. Titles are rewritten from the video's actual transcript, thumbnails are replaced with a real frame from the video, and Shorts can be hidden entirely."
  />
  <meta
    property="og:title"
    content="Face Value | Take your attention back from YouTube"
  />
  <meta
    property="og:description"
    content="Take back your attention span. Face Value removes clickbait titles and thumbnails from YouTube, hides Shorts entirely, and puts the power back in your hands."
  />
  <meta property="og:url" content="https://facethevalue.com" />
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────────────────────── -->
<section class="pt-16 pb-20 sm:pt-24">
  <p class="font-mono text-xs tracking-widest text-accent uppercase">
    browser extension
  </p>
  <h1
    class="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl"
  >
    Take YouTube at<br />
    <span class="strike">face value.</span>
  </h1>
  <p class="mt-8 max-w-xl text-lg leading-relaxed text-mut">
    Every title on YouTube is written to grab your attention, and every
    thumbnail is engineered for clicks. Face Value rewrites titles from the
    video&rsquo;s
    <em class="font-serif text-fg">actual transcript</em>, replaces thumbnails
    with a real frame from the video, and hides all Shorts by default. You
    decide what deserves your attention.
  </p>
  <div id="get" class="mt-10 flex flex-wrap items-center gap-3">
    {#each browsers as b (b.name)}
      <a
        href={b.href}
        class="flex items-center gap-2.5 rounded-full border border-hair bg-surface px-6 py-3 font-mono text-sm transition-colors hover:border-accent"
      >
        Add to {b.name}
        <svg
          viewBox="0 0 24 24"
          class="h-4 w-4 fill-current text-mut"
          aria-hidden="true"
        >
          <path d={b.icon} />
        </svg>
      </a>
    {/each}
  </div>
</section>

<!-- ── Before / after slider ────────────────────────────────────────────────── -->
<section>
  <BeforeAfterGrid />
</section>

<!-- ── Why ──────────────────────────────────────────────────────────────────── -->
<section class="mt-28">
  <h2 class="max-w-2xl font-serif text-4xl leading-tight tracking-tight">
    This is about our attention, not just bad-faith thumbnails.
  </h2>
  <div class="mt-6 grid max-w-3xl gap-5 leading-relaxed text-mut">
    <p>
      The classic clickbait shock face, the red arrows, capital letters, and now
      AI on top of all that. At this point, even honest creators present their
      videos like this.
    </p>
    <p>
      I built Face Value when I hit my own limit: I couldn&rsquo;t even browse
      podcasts anymore without having to do a deep dive on the video and the
      creator just to see if it was worth my time. Platforms have been
      encouraging this deceptive shock face style for years, and solutions like
      DeArrow don&rsquo;t cover enough content to be worthwhile.
    </p>
    <p>
      Face Value brings back my ability to accurately judge which videos I'd
      like to watch. It also makes the homepage a bit easier to look at in a way
      - you don't notice how much the chaos makes it ugly until you've seen the
      cleaned version. I hope you feel similarly if you use Face Value, and
      please feel more than welcome to reach out about improvements or bugs.
    </p>
  </div>
</section>

<!-- ── Features ─────────────────────────────────────────────────────────────── -->
<section class="mt-24">
  <div class="grid gap-x-10 gap-y-12 sm:grid-cols-2">
    {#each features as f (f.name)}
      <div>
        <h3 class="font-serif text-2xl">{f.name}</h3>
        <p class="mt-2 leading-relaxed text-mut">{f.body}</p>
      </div>
    {/each}
  </div>
</section>

<!-- ── How it works ─────────────────────────────────────────────────────────── -->
<section id="how" class="mt-28 scroll-mt-8">
  <h2 class="font-serif text-4xl tracking-tight">How it works</h2>
  <div class="mt-10 grid gap-10 sm:grid-cols-3">
    {#each steps as s (s.n)}
      <div class="border-t border-hair pt-5">
        <span class="font-mono text-xs text-accent">{s.n}</span>
        <h3 class="mt-3 text-lg font-semibold">{s.title}</h3>
        <p class="mt-2 text-sm leading-relaxed text-mut">{s.body}</p>
      </div>
    {/each}
  </div>
  <p class="mt-10 max-w-2xl text-sm leading-relaxed text-dim">
    Results are cached and shared. The first person to see a video pays a few
    seconds of processing, everyone after gets it instantly. The extension never
    blocks your browsing; cards fill in as answers arrive. Live streams and
    search results are intentionally left untouched.
    <a
      href={LINKS.github}
      target="_blank"
      rel="noopener noreferrer"
      class="text-accent hover:underline">See the source here</a
    >
  </p>
</section>

<!-- ── Divider ──────────────────────────────────────────────────────────────── -->
<div class="mt-24 border-t border-hair"></div>

<!-- ── Donate ───────────────────────────────────────────────────────────────── -->
<section class="mt-24 text-center">
  <h2 class="font-serif text-3xl tracking-tight">
    Free, and funded by donations.
  </h2>
  <p class="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mut">
    The transcript API, thumbnail proxy data, LLM requests, as well as general
    hosting cost me every month. To me, this is a small price to pay for winning
    back the freedom to choose, but Face Value does not make money and donations
    are much appreciated.
  </p>
  <a
    href={LINKS.support}
    class="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
  >
    Consider donating
  </a>
</section>
