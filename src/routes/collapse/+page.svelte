<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Error from '$lib/error/error.svelte';
	import { collapseDefault, collapseExpanded, collapseSize } from '../../docs/data/collapse.js';
	import { Collapse, Pagination } from '$lib/index.js';
</script>

<svelte:head>
	<title>Collapse</title>
</svelte:head>

{#snippet collapse()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			collapse
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A set of headings, vertically stacked, that each reveal an related section of content.
			Commonly referred to as an accordion.
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

{#snippet defaultCollapse()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item value="item-1">
						<Collapse.Trigger>Question A</Collapse.Trigger>
						<Collapse.Content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
					<Collapse.Item value="item-2">
						<Collapse.Trigger>Question B</Collapse.Trigger>
						<Collapse.Content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseDefault)}
		</div>
	</Row>
{/snippet}

{#snippet expanded()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">expanded</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item value="item-1">
						<Collapse.Trigger>Question A</Collapse.Trigger>
						<Collapse.Content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
					<Collapse.Item defaultExpanded value="item-2">
						<Collapse.Trigger>Question B</Collapse.Trigger>
						<Collapse.Content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseExpanded)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">small</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item size="small" value="item-1">
						<Collapse.Trigger>Question A</Collapse.Trigger>
						<Collapse.Content>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseSize)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'choicebox', href: '/choicebox' }}
			next={{ title: 'description', href: '/description' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render collapse()}
	{@render defaultCollapse()}
	{@render expanded()}
	{@render size()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
