<script setup lang="ts">
import { ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import PinIcon from "../../../components/icons/Pin.vue";

const point = new Vector3(-0.9, 2, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  // Clean up previous matchMedia
  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

  // Initialize GSAP matchMedia
  matchMedia = gsap.matchMedia();

  matchMedia.add(
    {
      isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
      isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
    },
    (context) => {
      const { conditions } = context;
      const { isMobile } = conditions as { isMobile: boolean; isDesktop: boolean };

      const tl = gsap.timeline({
        paused: true,
      });

      // Only animate clipPath on desktop
      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 0% 0% 100%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: "none" },
          0,
        );
      } else {
        // On mobile, ensure clipPath is set to visible immediately
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.15);
      }

      emit("timeline:created", tl);

      // Return cleanup function
      return () => {
        tl.kill();
      };
    },
  );

  onInvalidate(() => {
    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }
  });
});

onBeforeUnmount(() => {
  if (matchMedia) {
    matchMedia.revert();
  }
});

const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
  const updatedTimelines = [...timelines.value, { timeline, delay }];
  timelines.value = updatedTimelines;
};

const mouseX = ref(0);
const mouseY = ref(0);
const isHovered = ref(false);

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
};
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-description">
      <div
        class="box-description-content"
        @mousemove="handleMouseMove"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        :style="isHovered ? {
          background: `radial-gradient(circle 100px at ${mouseX}px ${mouseY}px, rgba(52, 191, 255, 0.15) 0%, transparent 80%), linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%)`
        } : {}"
      >
        <!-- Corner brackets -->
        <div class="box-corners">
          <div class="corner corner-tl"></div>
          <div class="corner corner-tr"></div>
          <div class="corner corner-bl"></div>
          <div class="corner corner-br"></div>
        </div>

        <div class="box-description-details">
          <p class="box-description-details-name">Kar</p>
          <div class="box-description-details-location">
            <PinIcon class="box-description-details-location-icon" />
            <p class="box-description-details-location-copy">{{ t("india") }}</p>
          </div>
        </div>
        <div class="box-description-line"></div>
        <div class="box-description-copy">
          <AppearingText
            :text="t('about-tagline')"
            :steps="3"
            :duration="0.7"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-description {
  --line-length: min(48px, calc(var(--svw) * 5));

  gap: var(--space-xxs);
  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    position: relative;
    left: 0;
    bottom: 0;
    width: 480px;
    max-width: calc(var(--svw) * 38);
    transform: translate(-100%, -50%);
    padding-top: 3px;
    padding-right: var(--line-length);
  }

  @include mixins.landscape-large {
    width: 410px;
    max-width: calc(var(--svw) * 32);
  }

  &-line {
    width: 100%;
    height: 1px;
    background-color: var(--color-cyan-400);

    @include mixins.landscape {
      display: none;
    }
  }

  &-details {
    padding: var(--space-sm) var(--space-md);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include mixins.landscape {
      display: none;
    }

    &-name {
      font-size: var(--font-size-title-xs);
      font-weight: 700;
    }

    &-location {
      display: flex;
      align-items: center;
      gap: var(--space-xs);

      &-icon {
        width: var(--icon-size-xs);
        --icon-color: var(--color-white-400);
        transform: translateY(-1px);
      }

      &-copy {
        font-size: var(--font-size-md);
      }
    }
  }

  &::after,
  &::before {
    display: none;

    @include mixins.landscape {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--color-cyan-400);
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-cyan-400), transparent);
    background-size: 200% 100%;
    animation: laser-pulse-left 2s linear infinite;

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  @keyframes laser-pulse-left {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  &-content {
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.4);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    background-image: 
      linear-gradient(rgba(52, 191, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(52, 191, 255, 0.03) 1px, transparent 1px);
    background-size: 12px 12px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(6px);

    &:hover {
      transform: scale(1.02);
      border-color: rgba(52, 191, 255, 0.8);
      box-shadow: 0 0 25px rgba(52, 191, 255, 0.35);

      .corner-tl { transform: translate(-3px, -3px); border-color: rgba(255, 255, 255, 0.9); }
      .corner-tr { transform: translate(3px, -3px); border-color: rgba(255, 255, 255, 0.9); }
      .corner-bl { transform: translate(-3px, 3px); border-color: rgba(255, 255, 255, 0.9); }
      .corner-br { transform: translate(3px, 3px); border-color: rgba(255, 255, 255, 0.9); }
    }

    &::after {
      content: "";
      position: absolute;
      top: -100px;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(52, 191, 255, 0.05) 70%, rgba(52, 191, 255, 0.18) 95%, rgba(52, 191, 255, 0.5) 100%);
      pointer-events: none;
      animation: holographic-scan 4s linear infinite;
    }

    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);

      @include mixins.mq("md") {
        padding: var(--space-sm) var(--space-md);
      }
    }
  }

  @keyframes holographic-scan {
    0% { transform: translateY(0); }
    50%, 100% { transform: translateY(calc(100% + 100px)); }
  }

  .box-corners {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;

    .corner {
      position: absolute;
      width: 10px;
      height: 10px;
      border: var(--stroke-sm) solid rgba(52, 191, 255, 0.6);
      box-shadow: 0 0 6px rgba(52, 191, 255, 0.3);
      transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease;

      &-tl {
        top: -1px;
        left: -1px;
        border-right: none;
        border-bottom: none;
      }
      &-tr {
        top: -1px;
        right: -1px;
        border-left: none;
        border-bottom: none;
      }
      &-bl {
        bottom: -1px;
        left: -1px;
        border-right: none;
        border-top: none;
      }
      &-br {
        bottom: -1px;
        right: -1px;
        border-left: none;
        border-top: none;
      }
    }
  }

  &-copy {
    will-change: opacity;
    font-size: var(--font-size-md);
    padding: var(--space-sm) var(--space-md);

    @include mixins.landscape {
      padding: 0;
      font-size: var(--font-size-sm);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-lg);
    }
  }
}
</style>
