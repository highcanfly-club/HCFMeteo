/**
 * 
 * @param url absolute path of asset (must begin with @/assets/)
 * @returns a vite transformed url string
 */
export function $require(url:string):string{
    return `../assets/${url.replace('@/assets/','../src/assets/')}`
  }