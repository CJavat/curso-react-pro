import { BtnMyLocation, MapView, ReactLogo, SearchBar } from "../components"

const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  )
}

export default HomeScreen