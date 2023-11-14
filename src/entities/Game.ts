import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";

export interface Game {
  name: string;
  id: number;
  genres: Genre[];
  publishers: Publishers[];
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  ordering: string;
}
