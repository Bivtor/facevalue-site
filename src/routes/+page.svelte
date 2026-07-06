<script lang="ts">
	import { LINKS } from '$lib/links';
	import BeforeAfterGrid from '$lib/components/BeforeAfterGrid.svelte';

	const features = [
		{
			name: 'Clean titles',
			body: 'Rewritten from the video’s transcript to say what it actually delivers. No caps lock, no curiosity gaps, no promises the content doesn’t keep.'
		},
		{
			name: 'Clean thumbnails',
			body: 'A real frame from the video instead of the engineered reaction shot.'
		},
		{
			name: 'Hide Shorts',
			body: 'One toggle removes Shorts shelves and reels everywhere. The part of the site built purely to keep you scrolling, gone.'
		},
		{
			name: 'Channel exceptions',
			body: 'Trust a creator? Pause Face Value on their channel and see them exactly as they publish.'
		}
	];

	const steps = [
		{
			n: '01',
			title: 'We read the transcript',
			body: 'When a video first appears in anyone’s feed, our server fetches its public transcript. The actual content, not the packaging.'
		},
		{
			n: '02',
			title: 'The title is rewritten',
			body: 'A language model rewrites the title to state plainly what the video is about, based on what is actually said in it.'
		},
		{
			n: '03',
			title: 'A real frame replaces the thumbnail',
			body: 'We pull a sharp, representative frame from the video stream itself and show that instead of the thumbnail.'
		}
	];

	const browsers = [
		{ name: 'Chrome', href: LINKS.chrome },
		{ name: 'Firefox', href: LINKS.firefox },
		{ name: 'Edge', href: LINKS.edge }
	];
</script>

<svelte:head>
	<title>Face Value | Take your attention back from YouTube</title>
	<meta
		name="description"
		content="A browser extension that rewrites clickbait YouTube titles from the actual transcript, replaces shock thumbnails with a real frame from the video, and removes Shorts if you want it to."
	/>
	<meta property="og:title" content="Face Value | Take your attention back from YouTube" />
	<meta
		property="og:description"
		content="Titles rewritten from the transcript. Thumbnails replaced with real frames. Shorts optional. Your feed, described honestly."
	/>
	<meta property="og:url" content="https://facethevalue.com" />
</svelte:head>

<!-- ── Hero ─────────────────────────────────────────────────────────────────── -->
<section class="pt-16 pb-20 sm:pt-24">
	<p class="font-mono text-xs tracking-widest text-accent uppercase">a browser extension</p>
	<h1 class="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl">
		Take YouTube at<br />
		<span class="strike">face value.</span>
	</h1>
	<p class="mt-8 max-w-xl text-lg leading-relaxed text-mut">
		Every thumbnail on YouTube is a bid for your attention, and the bids keep escalating.
		Face Value rewrites clickbait titles from the video&rsquo;s
		<em class="font-serif text-fg">actual transcript</em>, swaps shock thumbnails for a real
		frame, and removes Shorts if you want it to. You decide what deserves your time, based on
		what things actually are.
	</p>
	<div id="get" class="mt-10 flex flex-wrap items-center gap-3">
		{#each browsers as b (b.name)}
			<a
				href={b.href}
				class="rounded-full border border-hair bg-surface px-6 py-3 font-mono text-sm transition-colors hover:border-accent"
			>
				Add to {b.name}
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
		This is about your attention, not just bad titles.
	</h2>
	<div class="mt-6 grid max-w-3xl gap-5 leading-relaxed text-mut">
		<p>
			The shouting isn&rsquo;t a fringe problem anymore. Shocked faces, red arrows, capital
			letters, promises the video never keeps. Even honest creators making genuinely good work
			package it this way, because the algorithm rewards whoever grabs hardest. It stopped
			being a signal of anything.
		</p>
		<p>
			Face Value takes that lever away. When every title says plainly what a video is, and
			every thumbnail is just a frame from the video, grabbing stops working. What&rsquo;s left
			is a feed you can read like a library instead of a slot machine, and an attention span
			that belongs to you rather than to whoever reacted loudest.
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
		Results are cached and shared. The first person to see a video pays a few seconds of
		processing, everyone after gets it instantly. The extension never blocks your browsing;
		cards fill in as answers arrive.
	</p>
</section>

<!-- ── Privacy note ─────────────────────────────────────────────────────────── -->
<section class="mt-24 border-t border-hair pt-8">
	<p class="max-w-2xl text-sm leading-relaxed text-dim">
		Face Value runs without an account. Requests carry the video ids and titles on pages you
		view and nothing that identifies you. There is no analytics or tracking code in the
		extension or on this site.
		<a href="/privacy" class="text-accent hover:underline">Full privacy policy</a>
	</p>
</section>

<!-- ── Donate ───────────────────────────────────────────────────────────────── -->
<section class="mt-24 text-center">
	<h2 class="font-serif text-3xl tracking-tight">Free, and it costs us money.</h2>
	<p class="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mut">
		Every title is a language model call and every thumbnail is real video processing. There
		are no ads and nothing is sold, so the servers get paid the old fashioned way.
	</p>
	<a
		href={LINKS.donate}
		class="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
	>
		Consider donating
	</a>
</section>
