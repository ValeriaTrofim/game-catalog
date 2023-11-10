import { Platform } from "../entities/Platform";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone, MdComputer } from "react-icons/md";
import { SiNintendo, SiSega, SiAtari } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { GiRetroController } from "react-icons/gi";
import Icon from "@mui/material/Icon";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
    atari: SiAtari,
    "commodore-amiga": MdComputer,
    "neo-geo": FaGamepad,
    "3do": GiRetroController,
  };

  return (
    <>
      {platforms?.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];
        return (
          <Icon sx={{ fontSize: 15, paddingRight: 3 }} key={platform.slug}>
            <PlatformIcon />
          </Icon>
        );
      })}
    </>
  );
};
export default PlatformIconList;
