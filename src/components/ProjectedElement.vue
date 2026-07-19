<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Vector3 } from "three";
import { camera } from "../three/core/camera";
import { sizes } from "../utils/sizes";
import gsap from "gsap";
import { sceneWeightsInOut } from "../animations/scenes";

const props = defineProps<{
  point: Vector3;
}>();

const wrapperRef = ref<HTMLDivElement | null>(null);

let lastTransform = "";

const updatePosition = () => {
  if (!wrapperRef.value) return;
  if (sceneWeightsInOut.about.in === 0) return;
  if (sceneWeightsInOut.about.out === 1) return;

  const isLandscape = sizes.isLandscape;
  const { point } = props;

  let xOffset = 0;
  let yOffset = 0;

  if (isLandscape) {
    // Generate organic unique float offsets based on the 3D coordinate seed
    const seed = point.x * 5.3 + point.y * 11.7;
    const time = Date.now() * 0.0016; // speed
    yOffset = Math.sin(time + seed) * 5; // 5px vertical oscillation
    xOffset = Math.cos(time * 0.7 + seed) * 2.5; // 2.5px horizontal oscillation
  }

  const screenPos = isLandscape ? camera.project(point) : { x: 0, y: 0 };

  const finalX = isLandscape ? screenPos.x + xOffset : 0;
  const finalY = isLandscape ? screenPos.y + yOffset : 0;

  const transform = `translate(${finalX}px, ${finalY}px)`;

  if (transform !== lastTransform) {
    wrapperRef.value.style.transform = transform;
    lastTransform = transform;
  }
};

onMounted(() => {
  gsap.ticker.add(updatePosition);
});

onBeforeUnmount(() => {
  gsap.ticker.remove(updatePosition);
});
</script>

<template>
  <div ref="wrapperRef" class="projected-element">
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
.projected-element {
  width: 100%;
  height: 100%;

  @include mixins.landscape {
    width: 0;
    height: 0;
    position: relative;
  }
}
</style>
