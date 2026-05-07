import Image from "next/image";
import { CONTACT } from "@/data/content";

export function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <div className="curtain__inner">
        <Image
          src="/brand/sapphire-logo.svg"
          alt=""
          width={86}
          height={86}
          className="curtain__mark"
          priority
        />
        <div className="curtain__name">Sona Sapphire</div>
        <div className="curtain__sub">{CONTACT.est}</div>
      </div>
    </div>
  );
}
