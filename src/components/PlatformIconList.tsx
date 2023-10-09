import { Platform } from "../hooks/useGame";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
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
    "neo-geo": FaGamepad,
  };

  return (
    <>
      {platforms.map((platform) => {
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
