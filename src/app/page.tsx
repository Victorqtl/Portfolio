import Sidebar from '@/components/sidebar';
import { ModeToggle } from '@/components/ui/mode-toggle';

export default function page() {
	return (
		<div>
			<ModeToggle />
			<Sidebar />
		</div>
	);
}
