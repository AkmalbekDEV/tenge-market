import AppleCarousel from '../components/Corusel/AppleCarousel'
import BrandCarousel from '../components/Corusel/BrandCarousel'
import ConditionCarousel from '../components/Corusel/ConditionCarousel'
import HomeCarousel from '../components/Corusel/HomeCarousel'
import KidsCarousel from '../components/Corusel/KidsCarousel'
import SaleCarousel from '../components/Corusel/SaleCarousel'
import WashingCarousel from '../components/Corusel/WashingCarousel'

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />
      <AppleCarousel />
      <ConditionCarousel />
      <BrandCarousel />
      <SaleCarousel />
      <KidsCarousel />
      <WashingCarousel />
    </div>
  )
}

export default HomePage