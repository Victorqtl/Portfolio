import Image from 'next/image';
import Me from '@/assets/me.png';

export default function Sidebar() {
	return (
		<div className='flex flex-col gap-4 w-1/4 border-r border-border h-screen p-4'>
			<div className='flex items-center gap-2'>
				<Image
					src={Me}
					alt='logo'
					className='w-10 h-10 rounded-full'
					width={1000}
					height={1000}
				/>
				<div>
					<p>Victor Quertelet</p>
					<p className='text-muted-foreground'>Développeur Full Stack</p>
				</div>
			</div>
			<div></div>
		</div>
	);
}
