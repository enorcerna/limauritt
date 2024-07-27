<script lang="ts">
	import * as Tabs from '@/components/ui/tabs';
	import * as Card from '@/components/ui/card';
	import { Button } from '@/components/ui/button';
	import * as Carousel from '@/components/ui/carousel';
	import amano from '@/assets/prot/a-mano.png';
	import digi1 from '@/assets/prot/digi-1.png';
	import digi2 from '@/assets/prot/digi-2.png';
	import digi3 from '@/assets/prot/digi-3.png';
	const digis = [digi1, digi2, digi3];
</script>

<Tabs.Root value="account" class="">
	<Tabs.List class="grid w-full grid-cols-2">
		<Tabs.Trigger value="account">Dibujo</Tabs.Trigger>
		<Tabs.Trigger value="password">Digitalizacion</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="account">
		<Card.Root>
			<Card.Header></Card.Header>
			<Card.Content class="space-y-2"><img src={amano} alt="" /></Card.Content>
		</Card.Root>
	</Tabs.Content>
	<Tabs.Content value="password">
		<Card.Root>
			<Card.Header></Card.Header>
			<Card.Content class=""
				><Carousel.Root>
					<Carousel.Content>
						{#each digis as d}
							<Carousel.Item>
								<div class="p-1">
									<Card.Root>
										<Card.Content class="flex aspect-video items-center justify-center p-6">
											<img src={d} alt="" />
										</Card.Content>
									</Card.Root>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root></Card.Content
			>
		</Card.Root>
	</Tabs.Content>
</Tabs.Root>
