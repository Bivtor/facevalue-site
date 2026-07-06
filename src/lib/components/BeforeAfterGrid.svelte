<script lang="ts">
	// A grid of video cards with a draggable divider: left of the line is what gets
	// published, right of the line is what Face Value shows.
	//
	// TODO: these are hand-built mock cards. Replace with real captures from the
	// extension (same data shape: bait title/deco vs clean title, shared channel/meta).
	interface Card {
		bait: string; // the published title
		clean: string; // the Face Value rewrite
		deco: string; // the shouting text on the mock bait thumbnail
		hue: number; // gradient hue for the mock bait thumbnail
		channel: string;
		meta: string;
		dur: string;
	}

	const cards: Card[] = [
		{
			bait: 'You’ve Been Charging Your Phone WRONG Your Whole Life',
			clean: 'How lithium batteries age and which habits slow it',
			deco: 'WRONG!',
			hue: 355,
			channel: 'TechDaily',
			meta: '2.1M views',
			dur: '11:24'
		},
		{
			bait: 'Scientists TERRIFIED By What They Found Under The Ice 🧊',
			clean: 'What Antarctic ice cores reveal about past climate',
			deco: 'TERRIFIED',
			hue: 205,
			channel: 'Horizon Lab',
			meta: '840K views',
			dur: '18:02'
		},
		{
			bait: 'This Mistake Is DESTROYING Your Gains 💪',
			clean: 'Three common bench press form errors and fixes',
			deco: 'STOP THIS',
			hue: 25,
			channel: 'Lift Theory',
			meta: '1.3M views',
			dur: '9:47'
		},
		{
			bait: '$1 Street Food vs $500 Restaurant (SHOCKING WINNER)',
			clean: 'Comparing street food and fine dining in Bangkok',
			deco: '$1 vs $500',
			hue: 45,
			channel: 'Fork First',
			meta: '3.6M views',
			dur: '14:33'
		},
		{
			bait: 'Why NOBODY Buys This Car Anymore...',
			clean: 'The decline of the mid size sedan, explained',
			deco: 'NOBODY?!',
			hue: 275,
			channel: 'Torque Report',
			meta: '990K views',
			dur: '12:58'
		},
		{
			bait: 'I Lived In The World’s QUIETEST Room (GONE WRONG)',
			clean: 'What an hour in an anechoic chamber does to hearing',
			deco: 'GONE WRONG',
			hue: 155,
			channel: 'Field Notes',
			meta: '5.2M views',
			dur: '16:11'
		}
	];

	let pct = $state(55);
	let wrap: HTMLDivElement | undefined = $state();

	function setFrom(clientX: number) {
		if (!wrap) return;
		const r = wrap.getBoundingClientRect();
		pct = Math.max(3, Math.min(97, ((clientX - r.left) / r.width) * 100));
	}
	function onPointerDown(e: PointerEvent) {
		(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
		setFrom(e.clientX);
	}
	function onPointerMove(e: PointerEvent) {
		if (e.buttons > 0) setFrom(e.clientX);
	}
</script>

{#snippet thumbMeta(c: Card)}
	<span class="absolute right-2 bottom-2 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white">
		{c.dur}
	</span>
{/snippet}

{#snippet cardText(title: string, c: Card, cleanSide: boolean)}
	<p class="mt-2.5 line-clamp-2 min-h-[2.7em] text-sm leading-snug font-semibold {cleanSide ? 'text-fg' : ''}">
		{title}
	</p>
	<p class="mt-1 font-mono text-[11px] text-dim">{c.channel} · {c.meta}</p>
{/snippet}

<div class="flex items-baseline justify-between">
	<p class="font-mono text-xs tracking-widest text-dim uppercase">what they publish</p>
	<p class="font-mono text-xs tracking-widest text-accent uppercase">what you see</p>
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
		{#each cards as c (c.bait)}
			<div>
				<div class="relative flex aspect-video items-end overflow-hidden rounded-lg bg-gradient-to-b from-[#2c2c29] to-[#181816] p-3">
					<div class="w-full">
						<div class="mb-1.5 h-1.5 w-3/5 rounded bg-white/25"></div>
						<div class="h-1.5 w-2/5 rounded bg-white/15"></div>
					</div>
					<span class="absolute top-2 left-2 font-mono text-[9px] text-white/35">real frame</span>
					{@render thumbMeta(c)}
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
		{#each cards as c (c.bait)}
			<div class="bg-ink">
				<div
					class="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg"
					style="background: linear-gradient(135deg, hsl({c.hue} 55% 22%), hsl({(c.hue + 40) % 360} 65% 11%));"
				>
					<span class="rotate-[-5deg] px-2 text-center text-xl font-bold tracking-tight text-[#ffd83d] drop-shadow-[0_2px_0_rgba(0,0,0,0.55)] sm:text-2xl">
						{c.deco}
					</span>
					{@render thumbMeta(c)}
				</div>
				{@render cardText(c.bait, c, false)}
			</div>
		{/each}
	</div>

	<!-- Divider -->
	<div class="pointer-events-none absolute inset-y-0 z-10" style="left: {pct}%;">
		<div class="absolute inset-y-0 w-[3px] -translate-x-1/2 rounded bg-accent"></div>
		<div
			class="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-ink font-mono text-[10px] text-accent shadow-lg"
		>
			↔
		</div>
	</div>

	<!-- Keyboard access to the slider position -->
	<label class="sr-only" for="ba-slider">Comparison slider position</label>
	<input id="ba-slider" type="range" min="3" max="97" bind:value={pct} class="sr-only" />
</div>

<p class="mt-4 text-center font-mono text-xs text-dim">drag the line</p>
