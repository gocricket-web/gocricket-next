import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { SHARE_URL, SHARE_TITLE } from "../constants";

const socials = [
  {
    id: "facebook",
    component: FacebookShareButton,
    icon: FacebookIcon,
    props: {
      url: SHARE_URL,
      quote: SHARE_TITLE,
      hashtag: "#GoCricket",
    },
  },
  {
    id: "whatsapp",
    component: WhatsappShareButton,
    icon: WhatsappIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
      separator: " - ",
    },
  },
  {
    id: "twitter",
    component: TwitterShareButton,
    icon: TwitterIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
    },
  },
  {
    id: "telegram",
    component: TelegramShareButton,
    icon: TelegramIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
    },
  },
];
export default socials;