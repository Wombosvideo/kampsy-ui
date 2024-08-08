export const progressDefault = `
import { Progress } from 'kampsy-ui';

<Progress value={80} />`;


export const progressDynamicColors = `
import { Progress } from 'kampsy-ui';

<Progress value={dynamic} />

<div class="flex items-center gap-4">
	<Button
		onclick={() => {
			if (dynamic < 100) {
				dynamic = dynamic + 10;
			}
		}}
		size="small">Increase</Button>
	<Button
		onclick={() => {
			if (dynamic > 0) {
				dynamic = dynamic - 10;
			}
		}}
		size="small"
		type="secondary">Decrease</Button>
</div>`;

export const progressThemed = `
import { Progress } from 'kampsy-ui';

<div class="w-full space-y-6">
	<Progress type="success" value={100} />
	<Progress type="error" value={10} />
	<Progress type="warning" value={40} />
	<Progress type="secondary" value={70} />
</div>`;