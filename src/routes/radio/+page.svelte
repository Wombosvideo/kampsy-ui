<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Error from '$lib/error/error.svelte';
	import {
		errorCustomLabel,
		errorDefault,
		errorSize,
		errorWithProp
	} from '../../docs/data/error.js';
	import Pagination from '$lib/pagination/pagination.svelte';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			radio
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Provides single user input from a selection of options.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultErr()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Error>This email address is already in use.</Error>
				</div>
			{/snippet}
			{@render demoAndCode(demo, errorDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">Radio disabled</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Error size="sm">This email is in use.</Error>
				<Error size="md">This email is in use.</Error>
				<Error size="lg">This email is in use.</Error>
			{/snippet}
			{@render demoAndCode(demo, errorSize)}
		</div>
	</Row>
{/snippet}

{#snippet withErrorProp()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">With an error property</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Error
					error={{
						message: 'The request failed.',
						action: 'Contact Us',
						link: 'https://kampsy.kampsy.xyz/error'
					}}
				/>
			{/snippet}
			{@render demoAndCode(demo, errorWithProp)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'button', href: '/button' }}
			next={{ title: 'pagination', href: '/pagination' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render defaultErr()}
	{@render disabled()}
	{@render withErrorProp()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
