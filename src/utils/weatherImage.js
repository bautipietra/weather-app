const weatherImage = (code) => {
  switch (Number(code)) {
    case 1000:
      return 'normal'

    case 1003:
      return 'partly-cloudy'

    case 1006:
      return 'cloudy'

    case 1009:
      return 'cloudy'

    case 1030:
      return 'cloudy'

    case 1063:
      return 'rain'

    case 1066:
      return 'snow'

    case 1069:
      return 'snow-rain'

    case 1072:
      return 'snow-rain'

    case 1087:
      return 'thundery'

    case 1114:
      return 'snow'

    case 1117:
      return 'snow'

    case 1135:
      return 'cloudy'

    case 1147:
      return 'cloudy'

    case 1150:
      return 'rain-normal'

    case 1153:
      return 'rain-normal'

    case 1168:
      return 'snow-rain'

    case 1171:
      return 'snow-rain'

    case 1180:
      return 'rain-normal'

    case 1183:
      return 'rain-normal'

    case 1186:
      return 'rain-normal'

    case 1192:
      return 'rain-normal-heavy'

    case 1195:
      return 'rain-heavy'

    case 1198:
      return 'snow-rain'

    case 1201:
      return 'snow-rain'

    case 1204:
      return 'snow-rain'

    case 1207:
      return 'snow-rain'

    case 1216:
      return 'snow'

    case 1219:
      return 'snow'

    case 1222:
      return 'snow'

    case 1225:
      return 'snow'

    case 1237:
      return 'pellets'

    case 1243:
      return 'rain'

    case 1246:
      return 'rain-heavy'

    case 1249:
      return 'rain-snow'

    case 1252:
      return 'rain-snow'

    case 1255:
      return 'rain-snow'

    case 1258:
      return 'rain-snow'

    case 1261:
      return 'pellets'

    case 1264:
      return 'pellets'

    case 1273:
      return 'rain-thunder'

    case 1276:
      return 'rain-thunder'

    case 1279:
      return 'snow-thunder'

    case 1282:
      return 'snow-thunder'

    default:
      break;
  }
}