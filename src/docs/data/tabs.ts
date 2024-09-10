export const tabsDefault = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' }
	]}
/>`;


export const tabsDisabled = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
    disabled
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' }
	]}
/>`;

export const tabsDisabledSpecific = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' ,disabled: true, tooltip: 'Mangos are not allowed'}
	]}
/>`;