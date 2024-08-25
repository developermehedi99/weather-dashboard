import { useWeather } from "../../hooks";
import AddFavriote from "./AddFavriote";
import WeatherCondition from "./WeatherCondition";
import WeatherHeading from "./WeatherHeading";

const WeatherBoad = () => {
    const { weatherData, error, loading,} = useWeather;
    console.log(weatherData,error,loading);

  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddFavriote></AddFavriote>
          <WeatherHeading></WeatherHeading>
          <WeatherCondition></WeatherCondition>
        </div>
      </div>
    </div>
  );
};

export default WeatherBoad;
