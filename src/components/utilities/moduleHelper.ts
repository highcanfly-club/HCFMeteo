import {weatherIcons} from './weather-icons.js'
/**
 * 
 * @param url absolute path of asset (must begin with @/assets/)
 * @returns a vite transformed url string
 */
export function $require(url:string):string{
    return `../assets/${url.replace('@/assets/','../src/assets/')}`
  }

  export function getIcon(name:string){
    return weatherIcons[name]
  }