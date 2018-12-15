<script lang="ts" src="./Home.ts"></script>

<style>
/**/
.fa {
	color: $accent-dark;
}

.info {
	font-size: 20;
}

</style>

<template>
	<Page class="page">
		<ActionBar class="action-bar">
			<Label class="action-bar-title" text="Home"></Label>
		</ActionBar>

		<GridLayout>
			<Label class="info" horizontalAlignment="center" verticalAlignment="center">
					<Span class="fa" text.decode="&#xf135; " />
					<Span :text="`the ${message} is...`" />
			</Label>
		</GridLayout>
	</Page>
</template>
