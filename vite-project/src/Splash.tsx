import { useNavigate } from "react-router-dom";
import heartVideo from "./assets/Animate_heart_logo_VK_202608020829.mp4";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash">
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => navigate("/Login")}
      >
        <source src={heartVideo} type="video/mp4" />
      </video>
    </div>
  );
}