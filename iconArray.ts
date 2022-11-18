import icons from './src/assets/forecast/mf-icons.json' assert {type:"json"}
import fs from "fs"
let imports = ""
let weatherIcons = ""
icons.forEach((icon)=>{
    if (icon.name !== "null")
    {imports +=`import ${icon.name} from "../../assets/forecast/${icon.name}.svg"\n`
    weatherIcons += `"${icon.name}":${icon.name},`}
})
weatherIcons = `export const weatherIcons = {${weatherIcons}}`
console.log(imports)
console.log(weatherIcons)

fs.writeFile(`./src/components/utilities/weather-icons.ts`, `${imports}\n${weatherIcons}`, function (err) {
    if (err) return console.log(err);
    console.log(`Wrote json icons`);
});