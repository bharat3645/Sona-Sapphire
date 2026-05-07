import Image from "next/image";
import { CONTACT } from "@/data/content";

export function Curtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <div className="curtain__inner">
        <div className="curtain__emblem">
          <Image
            src="/brand/sapphire-emblem.png"
            alt=""
            width={420}
            height={420}
            className="curtain__emblem-img"
            priority
          />
        </div>
        <div className="curtain__name">Cinema · Growth · Code</div>
        <div className="curtain__sub">{CONTACT.est}</div>
      </div>
    </div>
  );
}
