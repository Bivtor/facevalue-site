<script lang="ts">
	import { LINKS } from '$lib/links';

	const features = [
		{
			name: 'Clean titles',
			body: 'Every title is rewritten from the video’s actual transcript — what it delivers, not what it dangles.'
		},
		{
			name: 'Clean thumbnails',
			body: 'Juiced thumbnails are swapped for a real frame pulled from the video itself.'
		},
		{
			name: 'Hide Shorts',
			body: 'One toggle removes Shorts shelves and reels everywhere on the site.'
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
			body: 'When a video first appears in anyone’s feed, our server fetches its public transcript — the actual content, not the packaging.'
		},
		{
			n: '02',
			title: 'The title is rewritten',
			body: 'A language model rewrites the title to state plainly what the video is about. No caps-lock, no curiosity gaps, no promises the content doesn’t keep.'
		},
		{
			n: '03',
			title: 'A real frame replaces the thumbnail',
			body: 'We extract a sharp, representative frame from the video stream itself and show that instead of the engineered thumbnail.'
		}
	];

	const browsers = [
		{ name: 'Chrome', href: LINKS.chrome },
		{ name: 'Firefox', href: LINKS.firefox },
		{ name: 'Edge', href: LINKS.edge }
	];
</script>

<svelte:head>
	<title>Face Value — YouTube without the clickbait</title>
	<meta
		name="description"
		content="A browser extension that rewrites clickbait YouTube titles from the actual transcript and replaces engineered thumbnails with a real frame from the video. No account, no tracking."
	/>
	<meta property="og:title" content="Face Value — YouTube without the clickbait" />
	<meta
		property="og:description"
		content="Titles rewritten from the transcript. Thumbnails replaced with real frames. No account, no tracking."
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
		Clickbait titles rewritten from the video&rsquo;s <em class="font-serif text-fg">actual transcript</em>.
		Engineered thumbnails swapped for a real frame from the video. Your feed, described honestly.
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
		<span class="font-mono text-xs text-dim">free · no account</span>
	</div>
</section>

<!-- ── Before / after ───────────────────────────────────────────────────────── -->
<section class="grid gap-6 sm:grid-cols-2">
	<!-- before -->
	<div class="rounded-2xl border border-hair bg-surface p-5">
		<p class="mb-4 font-mono text-xs tracking-widest text-dim uppercase">what they publish</p>
		<div class="overflow-hidden rounded-xl bg-card">
			<div class="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#3a1420] via-[#241028] to-[#0c1c30]">
				<span class="rotate-[-4deg] text-4xl font-bold tracking-tight text-[#ffd83d] drop-shadow-[0_2px_0_rgba(0,0,0,0.6)]">
					INSANE?!
				</span>
				<span class="absolute right-3 bottom-3 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white">14:07</span>
			</div>
		</div>
		<p class="mt-4 leading-snug font-semibold">
			You Won&rsquo;t BELIEVE What This $30 Gadget Did To My House 😱 (SHOCKING RESULTS)
		</p>
		<p class="mt-1 font-mono text-xs text-dim">Some Channel · 1.2M views</p>
	</div>

	<!-- after -->
	<div class="rounded-2xl border border-hair bg-surface p-5">
		<p class="mb-4 font-mono text-xs tracking-widest text-accent uppercase">what you see</p>
		<div class="overflow-hidden rounded-xl bg-card">
			<div class="relative flex aspect-video items-end bg-gradient-to-b from-[#2b2b28] to-[#191917] p-4">
				<div class="w-full">
					<div class="mb-2 h-2 w-3/5 rounded bg-white/25"></div>
					<div class="h-2 w-2/5 rounded bg-white/15"></div>
				</div>
				<span class="absolute top-3 left-3 font-mono text-[10px] text-white/40">real frame · 12:41</span>
				<span class="absolute right-3 bottom-3 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] text-white">14:07</span>
			</div>
		</div>
		<p class="mt-4 leading-snug font-semibold text-fg">
			Testing a $30 dehumidifier against a hygrometer for a week
		</p>
		<p class="mt-1 font-mono text-xs text-dim">Some Channel · 1.2M views</p>
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
		Results are cached and shared: the first person to see a video pays the few seconds of
		processing, everyone after gets it instantly. The extension itself never blocks your
		browsing — cards fill in as answers arrive.
	</p>
</section>

<!-- ── Privacy ──────────────────────────────────────────────────────────────── -->
<section class="mt-28 rounded-2xl border border-hair bg-surface p-8 sm:p-10">
	<h2 class="font-serif text-4xl tracking-tight">Nothing to sell.</h2>
	<div class="mt-6 grid gap-6 text-sm leading-relaxed text-mut sm:grid-cols-3">
		<p>
			<span class="font-semibold text-fg">No account, no user ID.</span> Requests carry nothing
			that identifies you or links your requests together.
		</p>
		<p>
			<span class="font-semibold text-fg">Only public video metadata leaves your browser</span> —
			the IDs and titles of videos on pages you view. Settings stay on your machine.
		</p>
		<p>
			<span class="font-semibold text-fg">No analytics, no trackers, no ads.</span> Not restraint —
			the data to sell doesn&rsquo;t exist.
		</p>
	</div>
	<a href="/privacy" class="mt-8 inline-block font-mono text-xs text-accent hover:underline">
		read the full privacy policy →
	</a>
</section>

<!-- ── Donate ───────────────────────────────────────────────────────────────── -->
<section class="mt-28 text-center">
	<h2 class="font-serif text-3xl tracking-tight">Free, and it costs us money.</h2>
	<p class="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mut">
		Every title is a language-model call and every thumbnail is real video processing. There are
		no ads and no data to sell, so servers are paid for the old-fashioned way.
	</p>
	<a
		href={LINKS.donate}
		class="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
	>
		Consider donating
	</a>
</section>
