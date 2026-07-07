<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { LINKS } from '$lib/links';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	// Vercel Web Analytics: cookieless, aggregate page views only (disclosed in /privacy).
	injectAnalytics();

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="theme-color" content="#0f0f0f" />
</svelte:head>

<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-6">
	<header class="flex items-center justify-between py-6">
		<a href="/" class="flex items-center gap-3">
			<img src={favicon} alt="" class="h-8 w-8" />
			<span class="font-serif text-xl tracking-tight">Face Value</span>
		</a>
		<nav class="flex items-center gap-4 font-mono text-xs text-mut sm:gap-6">
			<a href="/#how" class="hidden transition-colors hover:text-fg sm:inline">how it works</a>
			<a href="/privacy" class="transition-colors hover:text-fg">privacy</a>
			<a href={LINKS.github} class="hidden transition-colors hover:text-fg sm:inline">source</a>
			<a href="/#get" class="rounded-full border border-hair px-4 py-1.5 text-fg transition-colors hover:border-accent">get the extension</a>
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="mt-24 border-t border-hair py-10 font-mono text-xs text-dim">
		<div class="flex flex-wrap items-center justify-between gap-4">
			<span>© 2026 Face Value</span>
			<div class="flex gap-6">
				<a href="/privacy" class="transition-colors hover:text-fg">privacy</a>
				<a href={LINKS.github} class="transition-colors hover:text-fg">source</a>
				<a href={LINKS.contact} class="transition-colors hover:text-fg">contact</a>
			</div>
		</div>
		<p class="mt-4 max-w-xl leading-relaxed">See things at Face Value.</p>
	</footer>
</div>
