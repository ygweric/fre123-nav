<template>
	<footer class="text-left text-[#6c757d] p-6 bg-[rgba(248,249,250,1)] h-[70px] fixed left-0 right-0 bottom-0">
		<section class="flex justify-between">
			<!-- Left -->
			<div class="text-[14px] h-[30px]">
				<span
					>Powered by
					<a
						href="https://www.fre123.com"
						target="_blank"
						ref="nofollow"
						class="decoration-transparent text-[#a4715c]"
						>FRE123</a
					>
				</span>
			</div>
			<!-- Left -->
			
			
			<div  class="flex-grow flex justify-center items-center text-sm">
				<a href="http://beian.miit.gov.cn/" target="_blank">京ICP备2024056307号</a>
			</div>
			<!-- Right -->
			<div
				v-if="footerConfig.right.is_show && footerConfig.right.list.length > 0"
				class="flex text-[20px] text-black"
			>
				<a v-for="item in footerConfig.right.list" :href="item.url" target="_blank" class="pr-6">
					<IconsFontAwesome
						:size="item.icon_size"
						class="hover:text-[#0d6efd]"
						:icon="item.icon_class"
					/>
				</a>
			</div>
		</section>
	</footer>
</template>

<script setup lang="ts">
import { CONFIG_KEY_FOOTER, getConfigItem } from '~/stores/config'

const footerConfig = getConfigItem(CONFIG_KEY_FOOTER)
</script>

<style scoped></style>
