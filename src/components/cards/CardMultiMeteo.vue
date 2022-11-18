<template>
  <div class="flex justify-center">
    <div class="flex flex-wrap sm:flex-nowrap sm:flex-row overflow-x-auto items-center">
      <div v-for="(place, index) in places as FlyingPlace[]" :key="place.id"
        class="m-4 w-full sm:w-152 h-200 sm:min-w-152 overflow-y-auto">
        <div class="shadow-slate-500/50 min-w-0 break-words w-full shadow-lg rounded-xl bg-slate-50 p-2">
          <lazy-observer :id="index" @on-change="onlazyMeteo">
            <card-meteo ref="card_meteo" :place="place as FlyingPlace" :lazy="true" :id="index" />
          </lazy-observer>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {LazyObserver} from "@sctg/lazy-vue"
import CardMeteo from "./CardMeteo.vue";
import { onMounted, ref } from "vue";
import { FlyingPlace } from "../../types/GeoJSON";
const props = defineProps<{
  places: GeoJSON.FlyingPlaceCollection,
  key: string
}>()

const places = ref(getPlaces(props.key));
const card_meteo = ref<typeof CardMeteo[]>(null)

function getPlaces(slug: string): GeoJSON.FlyingPlace[] | boolean {
  const _places = slug
    ? getPlaceWithSlug(slug).length > 0
      ? getPlaceWithSlug(slug) || slug === "all"
      : props.places.features
    : props.places.features.filter((place) => {
      return place.properties.default === true;
    });
  return _places;
}
function onlazyMeteo(entry: IntersectionObserverEntry, unobserve: Function, id: number) {
  if (entry.isIntersecting && card_meteo.value !== undefined) {
    unobserve();
    card_meteo.value[id].getWeatherData()
  }
}
function getPlaceWithSlug(slug: string) {
  return props.places.features.filter((place) => {
    return place.properties.slug === slug;
  });
}
onMounted(()=>{
  places.value = getPlaces(props.key);
})
</script>
<style scoped lang="scss">
@tailwind utilities;
</style>