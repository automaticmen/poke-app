import AutomaticMen from "../assets/AutomaticMenTransparent.png";
export default function Footer({ appName, credits }) {
  return (
    <div className="flex flex-col items-center">
      <img src={AutomaticMen} className="w-20 h-20" alt="Automatic Men Logo" />
      <p>Copyright ©2022 {appName} Designed and Developed by AutomaticMen</p>
      <p>{credits}</p>
    </div>
  );
}
