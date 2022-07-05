import { useNavigate } from "react-router-dom";
import PokemonBanner from "../assets/PokemonBanner.jpg";
export default function Banner(params) {
  const navigate = useNavigate();
  const handleBannerClick = ()=>{
    navigate("/");
  };
  return (
    <img
      src={PokemonBanner}
      alt="Poke Ball"
      className="object-cover h-48 w-screen cursor-pointer"
      onClick={handleBannerClick}
    />
  );
}
