<script lang="ts">
  // A grid of real video cards with a draggable divider: left of the line is what
  // got published, right of the line is what Face Value shows. Examples are real
  // pipeline output collected by scripts/fetch-examples.mjs; each page load samples
  // six at random from the full set.
  import { onMount } from "svelte";
  import examples from "$lib/examples.json";

  interface Example {
    id: string; // YouTube video id (keys the images in /static/examples)
    channel: string;
    bait: string; // the published title
    clean: string; // the Face Value rewrite
  }

  const all = examples as Example[];

  // SSR/first paint renders a deterministic slice so hydration matches, then we
  // shuffle on mount so every visit gets a different six.
  let cards = $state(all.slice(0, 6));
  onMount(() => {
    const pool = [...all];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    cards = pool.slice(0, 6);
  });

  let pct = $state(55);
  let wrap: HTMLDivElement | undefined = $state();

  function setFrom(clientX: number) {
    if (!wrap) return;
    const r = wrap.getBoundingClientRect();
    pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
  }
  function onPointerDown(e: PointerEvent) {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFrom(e.clientX);
  }
  function onPointerMove(e: PointerEvent) {
    if (e.buttons > 0) setFrom(e.clientX);
  }
</script>

{#snippet cardText(title: string, c: Example, cleanSide: boolean)}
  <p
    class="mt-2.5 line-clamp-2 min-h-[2.7em] text-sm leading-snug font-semibold {cleanSide
      ? 'text-fg'
      : ''}"
  >
    {title}
  </p>
  <p class="mt-1 font-mono text-[11px] text-dim">{c.channel}</p>
{/snippet}

<div class="flex items-baseline justify-between">
  <p class="font-mono text-xs tracking-widest text-dim uppercase">
    what they publish
  </p>
  <p class="font-mono text-xs tracking-widest text-accent uppercase">
    what you see
  </p>
</div>

<!-- Pointer drag is a convenience; the real slider control (keyboard/AT) is the
     range input below. -->
<div
  bind:this={wrap}
  role="group"
  aria-label="Published feed versus Face Value feed comparison"
  class="relative mt-4 cursor-ew-resize select-none"
  style="touch-action: pan-y;"
  onpointerdown={onPointerDown}
  onpointermove={onPointerMove}
>
  <!-- Base layer: the cleaned feed -->
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
    {#each cards as c (c.id)}
      <div>
        <div class="relative aspect-video overflow-hidden rounded-lg bg-[#181816]">
          <img
            src="/examples/{c.id}-clean.jpg"
            alt=""
            loading="lazy"
            draggable="false"
            class="h-full w-full object-cover"
          />
        </div>
        {@render cardText(c.clean, c, true)}
      </div>
    {/each}
  </div>

  <!-- Overlay layer: the published feed, clipped to the left of the divider -->
  <div
    class="absolute inset-0 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5"
    style="clip-path: inset(0 {100 - pct}% 0 0);"
    aria-hidden="true"
  >
    {#each cards as c (c.id)}
      <div class="bg-ink">
        <div class="relative aspect-video overflow-hidden rounded-lg bg-[#181816]">
          <img
            src="/examples/{c.id}-original.jpg"
            alt=""
            loading="lazy"
            draggable="false"
            class="h-full w-full object-cover"
          />
        </div>
        {@render cardText(c.bait, c, false)}
      </div>
    {/each}
  </div>

  <!-- Divider -->
  <div
    class="pointer-events-none absolute inset-y-0 z-10"
    style="left: {pct}%;"
  >
    <div
      class="absolute inset-y-0 w-[3px] -translate-x-1/2 rounded bg-accent"
    ></div>
    <div
      class="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-ink font-mono text-[10px] text-accent shadow-lg"
    >
      ↔
    </div>
  </div>

  <!-- Keyboard access to the slider position -->
  <label class="sr-only" for="ba-slider">Comparison slider position</label>
  <input
    id="ba-slider"
    type="range"
    min="0"
    max="100"
    bind:value={pct}
    class="sr-only"
  />
</div>
