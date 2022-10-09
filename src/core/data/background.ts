import DayDesktop from 'assets/images/desktop/bg-image-daytime.jpg'
import NightDesktop from 'assets/images/desktop/bg-image-nighttime.jpg'

import DayTablet from 'assets/images/tablet/bg-image-daytime.jpg'
import NightTablet from 'assets/images/tablet/bg-image-nighttime.jpg'

import DayMobile from 'assets/images/mobile/bg-image-daytime.jpg'
import NightMobile from 'assets/images/mobile/bg-image-nighttime.jpg'

interface IImages {
  [key: string]: string
}

interface IBackgroundData {
  [key: string]: IImages
}

export const backgroundData: IBackgroundData = {
  lg: {
    day: DayDesktop,
    night: NightDesktop,
  },
  md: {
    day: DayTablet,
    night: NightTablet,
  },
  sm: {
    day: DayMobile,
    night: NightMobile,
  },
}
