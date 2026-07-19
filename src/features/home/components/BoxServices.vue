<script setup lang="ts">
import { computed, ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { locale } from "../../../i18n/store";
import AppearingText from "../../../components/AppearingText.vue";
import { BREAKPOINTS } from "../../../utils/sizes";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";

const point = new Vector3(0.9, 1.7, 6.75);

const wrapperRef = ref<HTMLDivElement | null>(null);
const timelines = ref<{ timeline: gsap.core.Timeline; delay: number }[]>([]);
let matchMedia: gsap.MatchMedia | null = null;

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

watchEffect((onInvalidate) => {
  const wrapperEl = wrapperRef.value;
  if (!wrapperEl) return;

  if (matchMedia) {
    matchMedia.revert();
    matchMedia = null;
  }

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

      if (!isMobile) {
        tl.fromTo(
          wrapperEl,
          { clipPath: "inset(0% 100% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.4, ease: "none" },
          0,
        );
      } else {
        gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
      }

      for (let i = 0; i < timelines.value.length; i++) {
        const item = timelines.value[i];
        if (!item) continue;
        tl.add(() => {
          item.timeline.restart(true);
        }, item.delay + 0.25);
      }

      emit("timeline:created", tl);

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

const SERVICES_EN = [
  { name: "Flutter & Dart" },
  { name: "Firebase & Supabase" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "Git & GitHub" },
  { name: "REST APIs" },
] as const satisfies { name: string }[];

const SERVICES_HI = [
  { name: "Flutter & Dart" },
  { name: "Firebase & Supabase" },
  { name: "JavaScript" },
  { name: "Python" },
  { name: "Java" },
  { name: "Git & GitHub" },
  { name: "REST APIs" },
] as const satisfies { name: string }[];

const services = computed(() => {
  return locale.value === "en" ? SERVICES_EN : SERVICES_HI;
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div
        class="box-services-content"
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

        <div class="box-services-title">
          <AppearingText
            :text="locale === 'en' ? 'Skills' : 'कौशल'"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        <div class="box-services-list">
          <div class="box-services-list-item" v-for="(service, index) in services" :key="service.name">
            <div class="box-services-list-item-bullet"></div>
            <p class="box-services-list-item-name">
              <AppearingText
                :text="service.name"
                :steps="1"
                :duration="0.3"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.1 + index * 0.1)"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));

  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);

  @include mixins.landscape {
    width: 320px;
    max-width: calc(var(--svw) * 30);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }

  @include mixins.landscape-large {
    width: 320px;
    max-width: calc(var(--svw) * 30);
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
    left: 0;
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
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-cyan-400), transparent);
    background-size: 200% 100%;
    animation: laser-pulse-right 2s linear infinite;

    @include mixins.landscape {
      width: var(--line-length);
    }
  }

  @keyframes laser-pulse-right {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  &-content {
    border: var(--stroke-sm) solid rgba(52, 191, 255, 0.4);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    background-image: 
      linear-gradient(rgba(52, 191, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(52, 191, 255, 0.03) 1px, transparent 1px);
    background-size: 12px 12px;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease, box-shadow 0.3s ease;
    backdrop-filter: blur(6px);

    &:hover {
      transform: scale(1.03);
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
    }

    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
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

  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
      position: relative;

      &-bullet {
        width: 6px;
        height: 6px;
        background-color: var(--color-cyan-400);
        border-radius: 50%;
        box-shadow: 0 0 6px var(--color-cyan-400);
        position: relative;
        flex-shrink: 0;

        &::after {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border: 1px solid var(--color-cyan-400);
          border-radius: 50%;
          animation: bullet-pulse 1.8s ease-out infinite;
          opacity: 0;
        }
      }

      @keyframes bullet-pulse {
        0% { transform: scale(0.6); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: scale(1.6); opacity: 0; }
      }

      &-name {
        font-size: var(--font-size-md);

        @include mixins.landscape {
          font-size: var(--font-size-sm);
        }

        @include mixins.landscape-large {
          font-size: var(--font-size-lg);
        }
      }
    }
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;

    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }

    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }
}
</style>
