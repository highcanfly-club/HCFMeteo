# HCFMeteo for Vue3
## Demo
This is the meteo we use in our website.  
https://highcanfly.club/meteo  
Browse https://github.com/highcanfly-club/vue-highcanfly/blob/main/src/views/ViewMeteo.vue for seeing the current use.  

## Sample use
```sh
npm i --save @highcanfly/meteo
```
```vue
<template>
    <card-multi-meteo class="flex flex-col lg:flex-row" :places="placesJson" slug="default" :lang="locale"/>
</template>
<script setup lang="ts">
import {CardMultiMeteo,GeoJSON} from "@highcanfly/meteo";
import "@highcanfly-club/meteo/dist/index.css"
import _places from "@/config/places.json";
const placesJson = _places as unknown as GeoJSON.FlyingPlaceCollection
</script>
``` 

```json
{
    "type": "FeatureCollection",
    "features": [
     {
        "_id": {
          "$oid": "62d6da39fe08c204d77d4918"
        },
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.739542,
            45.949472
          ]
        },
        "properties": {
          "name": "Plaine-Joux",
          "slug": "plaine-joux",
          "default": true,
          "idBaliseAlt": 2521,
          "nameAlt": "Le Prarion",
          "fly": {
            "sectors": [
              {
                "min_angle": 150,
                "max_angle": 200
              }
            ],
            "wind": {
              "min_speed": 0,
              "max_speed": 5.55
            }
          }
        }
      },{
        "_id": {
          "$oid": "62d6da39fe08c204d77d4919"
        },
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.851649,
            45.937921
          ]
        },
        "properties": {
          "name": "Planpraz",
          "slug": "planpraz",
          "default": true,
          "idBalise": 94,
          "idBaliseAlt": 95,
          "nameAlt": "Plan de l'aiguille",
          "fly": {
            "sectors": [
              {
                "min_angle": 200,
                "max_angle": 260
              },
              {
                "min_angle": 70,
                "max_angle": 110
              }
            ],
            "wind": {
              "min_speed": 0,
              "max_speed": 5.55
            }
          }
        }
      },{
        "_id": {
          "$oid": "62d6da39fe08c204d77d491a"
        },
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.888846,
            45.879449
          ]
        },
        "properties": {
          "name": "Aiguille du midi",
          "slug": "aiguille-du-midi",
          "idBaliseAlt": 95,
          "nameAlt": "Plan de l'aiguille",
          "fly": {
            "sectors": [
              {
                "min_angle": 300,
                "max_angle": 340
              },
              {
                "min_angle": 100,
                "max_angle": 166
              }
            ],
            "wind": {
              "min_speed": 0,
              "max_speed": 2
            }
          }
        }
      },{
        "_id": {
          "$oid": "62d6da39fe08c204d77d491b"
        },
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.743386,
            45.878229
          ]
        },
        "properties": {
          "name": "Tête de la Charme (1846m)",
          "slug": "la-charme",
          "idBaliseAlt": 2521,
          "nameAlt": "Le Prarion",
          "fly": {
            "sectors": [
              {
                "min_angle": 255,
                "max_angle": 285
              }
            ],
            "wind": {
              "min_speed": 0,
              "max_speed": 5
            }
          }
        }
      },{
        "_id": {
          "$oid": "62d6da39fe08c204d77d491c"
        },
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.696828,
            45.7873174
          ]
        },
        "properties": {
          "name": "Les Contamines, le Signal (1870m)",
          "slug": "les-contamines",
          "idBalise": 100,
          "idBaliseAlt": 2521,
          "nameAlt": "Le Prarion",
          "fly": {
            "sectors": [
              {
                "min_angle": 74,
                "max_angle": 106
              }
            ],
            "wind": {
              "min_speed": 0,
              "max_speed": 5
            }
          }
        }
      }]
}
```