import cloudy from '../assets/day/cloudy.png'
import normal from '../assets/day/normal.png'
import partlyCloudy from '../assets/day/partly-cloudy.png'
import pellets from '../assets/day/pellets.png'
import rainNormalHeavy from '../assets/day/rain-normal-heavy.png'
import rainNormal from '../assets/day/rain-normal.png'
import rainThunder from '../assets/day/rain-thunder.png'
import rain from '../assets/day/rain.png'
import rainHeavy from '../assets/day/rain-heavy.png'
import snowRain from '../assets/day/snow-rain.png'
import snowThunder from '../assets/day/snow-thunder.png'
import snow from '../assets/day/snow.png'
import thundery from '../assets/day/thundery.png'

import ncloudy from '../assets/night/cloudy.png'
import nnormal from '../assets/night/normal.png'
import npartlyCloudy from '../assets/night/partly-cloudy.png'
import npellets from '../assets/night/pellets.png'
import nrainNormalHeavy from '../assets/night/rain-normal-heavy.png'
import nrainNormal from '../assets/night/rain-normal.png'
import nrainThunder from '../assets/night/rain-thunder.png'
import nrain from '../assets/night/rain.png'
import nrainHeavy from '../assets/night/rain-heavy.png'
import nsnowRain from '../assets/night/snow-rain.png'
import nsnowThunder from '../assets/night/snow-thunder.png'
import nsnow from '../assets/night/snow.png'
import nthundery from '../assets/night/thundery.png'

const weatherImage = (code, isDay) => {
  if (isDay) {
    switch (Number(code)) {
      case 1000:
        return <img src={normal} alt=""></img>

      case 1003:
        return <img src={partlyCloudy} alt="" />

      case 1006:
        return <img src={cloudy} alt="" />

      case 1009:
        return <img src={cloudy} alt="" />

      case 1030:
        return <img src={cloudy} alt="" />

      case 1063:
        return <img src={rain} alt="" />

      case 1066:
        return <img src={snow} alt="" />

      case 1069:
        return <img src={snowRain} alt="" />

      case 1072:
        return <img src={snowRain} alt="" />

      case 1087:
        return <img src={thundery} alt="" />

      case 1114:
        return <img src={snow} alt="" />

      case 1117:
        return <img src={snow} alt="" />

      case 1135:
        return <img src={cloudy} alt="" />

      case 1147:
        return <img src={cloudy} alt="" />

      case 1150:
        return <img src={rainNormal} alt="" />

      case 1153:
        return <img src={rainNormal} alt="" />

      case 1168:
        return <img src={snowRain} alt="" />

      case 1171:
        return <img src={snowRain} alt="" />

      case 1180:
        return <img src={rainNormal} alt="" />

      case 1183:
        return <img src={rainNormal} alt="" />

      case 1186:
        return <img src={rainNormal} alt="" />

      case 1192:
        return <img src={rainNormalHeavy} alt="" />

      case 1195:
        return <img src={rainHeavy} alt="" />

      case 1198:
        return <img src={snowRain} alt="" />

        return <img src={snowRain} alt="" />

      case 1204:
        return <img src={snowRain} alt="" />

      case 1207:
        return <img src={snowRain} alt="" />

      case 1216:
        return <img src={snow} alt="" />

      case 1219:
        return <img src={snow} alt="" />

      case 1222:
        return <img src={snow} alt="" />

      case 1225:
        return <img src={snow} alt="" />

      case 1237:
        return <img src={pellets} alt="" />

      case 1243:
        return <img src={rain} alt="" />

      case 1246:
        return <img src={rainHeavy} alt="" />

      case 1249:
        return <img src={snowRain} alt="" />

      case 1252:
        return <img src={snowRain} alt="" />

      case 1255:
        return <img src={snowRain} alt="" />

      case 1258:
        return <img src={snowRain} alt="" />

      case 1261:
        return <img src={pellets} alt="" />

      case 1264:
        return <img src={pellets} alt="" />

      case 1273:
        return <img src={rainThunder} alt="" />

      case 1276:
        return <img src={rainThunder} alt="" />

      case 1279:
        return <img src={snowThunder} alt="" />

      case 1282:
        return <img src={snowThunder} alt="" />

      default:
        break;
    }
  } else {
    switch (Number(code)) {
      case 1000:
        return <img src={nnormal}></img>

      case 1003:
        return <img src={npartlyCloudy} alt="" />

      case 1006:
        return <img src={ncloudy} alt="" />

      case 1009:
        return <img src={ncloudy} alt="" />

      case 1030:
        return <img src={ncloudy} alt="" />

      case 1063:
        return <img src={nrain} alt="" />

      case 1066:
        return <img src={nsnow} alt="" />

      case 1069:
        return <img src={nsnowRain} alt="" />

      case 1072:
        return <img src={nsnowRain} alt="" />

      case 1087:
        return <img src={nthundery} alt="" />

      case 1114:
        return <img src={nsnow} alt="" />

      case 1117:
        return <img src={nsnow} alt="" />

      case 1135:
        return <img src={ncloudy} alt="" />

      case 1147:
        return <img src={ncloudy} alt="" />

      case 1150:
        return <img src={nrainNormal} alt="" />

      case 1153:
        return <img src={nrainNormal} alt="" />

      case 1168:
        return <img src={nsnowRain} alt="" />

      case 1171:
        return <img src={nsnowRain} alt="" />

      case 1180:
        return <img src={nrainNormal} alt="" />

      case 1183:
        return <img src={nrainNormal} alt="" />

      case 1186:
        return <img src={nrainNormal} alt="" />

      case 1192:
        return <img src={nrainNormalHeavy} alt="" />

      case 1195:
        return <img src={nrainHeavy} alt="" />

      case 1198:
        return <img src={nsnowRain} alt="" />

      case 1201:
        return <img src={nsnowRain} alt="" />

      case 1204:
        return <img src={nsnowRain} alt="" />

      case 1207:
        return <img src={nsnowRain} alt="" />

      case 1216:
        return <img src={nsnow} alt="" />

      case 1219:
        return <img src={nsnow} alt="" />

      case 1222:
        return <img src={nsnow} alt="" />

      case 1225:
        return <img src={nsnow} alt="" />

      case 1237:
        return <img src={npellets} alt="" />

      case 1243:
        return <img src={nrain} alt="" />

      case 1246:
        return <img src={nrainHeavy} alt="" />

      case 1249:
        return <img src={nsnowRain} alt="" />

      case 1252:
        return <img src={nsnowRain} alt="" />

      case 1255:
        return <img src={nsnowRain} alt="" />

      case 1258:
        return <img src={nsnowRain} alt="" />

      case 1261:
        return <img src={npellets} alt="" />

      case 1264:
        return <img src={npellets} alt="" />

      case 1273:
        return <img src={nrainThunder} alt="" />

      case 1276:
        return <img src={nrainThunder} alt="" />

      case 1279:
        return <img src={nsnowThunder} alt="" />

      case 1282:
        return <img src={nsnowThunder} alt="" />

      default:
        break;
    }
  }
}

export default weatherImage