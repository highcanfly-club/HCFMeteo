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
import { LazyObserver } from "@sctg/lazy-vue"
import CardMeteo from "./CardMeteo.vue";
import { onMounted, ref, watch } from "vue";
import { FlyingPlace } from "../../types/GeoJSON";
const props = defineProps<{
  places: GeoJSON.FlyingPlaceCollection,
  slug: string
}>()

let changes = -1
const places = ref(getPlaces(props.slug));
const card_meteo = ref<typeof CardMeteo[]>(null)

/**
* 
* @param slug can be 'all' | 'default' | a valid place slug 
*/
function getPlaces(slug: string): GeoJSON.FlyingPlace[] {
  let _places: GeoJSON.FlyingPlaceCollection
  switch (slug) {
    case 'all':
      _places = props.places
      break;
    case 'default':
      const _featuresDefault = props.places.features.filter((place) => {
        return place.properties.default === true
      });
      _places = { type: 'FeatureCollection', features: _featuresDefault }
      break;
    default:
      const _features = props.places.features.filter((place) => {
        return place.properties.slug === slug;
      });
      _places = { type: 'FeatureCollection', features: _features }
  }
  return _places.features;
}

function onlazyMeteo(entry: IntersectionObserverEntry, unobserve: Function, id: number) {
  if (entry.isIntersecting && card_meteo.value !== undefined) {
    unobserve();
    card_meteo.value[id].getWeatherData()
  }
}

watch(() => props.slug,
  () => {
    places.value = getPlaces(props.slug);
    changes++;
    if (changes && places.value.length === 1) {
      console.log(`slug is now ${props.slug} refresh weather datas`)
      card_meteo.value[0].getWeatherData()
    }
  },
  { immediate: true })

onMounted(() => {
  places.value = getPlaces(props.slug);
})
</script>
<style scoped lang="scss">
@tailwind utilities;
</style>