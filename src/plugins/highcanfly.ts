import type { Forecast, RainOrSnow } from '../types/ForecastCollection'

export const weatherIsFlyable = (
  forecast: Forecast,
  flying = {
    sectors: [{ min_angle: -1, max_angle: 360 }],
    wind: { min_speed: 0, max_speed: 6.11 }
  }
) => {
  let directionOK = false
  flying.sectors.forEach((sector) => {
    if (
      sector.min_angle <= forecast.wind.direction &&
      forecast.wind.direction <= sector.max_angle
    ) {
      directionOK = true
    }
  })
  return (
    directionOK &&
    flying.wind.min_speed <= forecast.wind.speed &&
    forecast.wind.speed <= flying.wind.max_speed &&
    flying.wind.min_speed <= forecast.wind.gust &&
    forecast.wind.gust <= flying.wind.max_speed &&
    weatherGetRain(forecast.rain).height === 0
  )
}

export const weatherGetRain = (rain: RainOrSnow) => {
  const rainInterval = Object.keys(rain)
  return { interval: rainInterval[0], height: rain[rainInterval[0]] }
}
