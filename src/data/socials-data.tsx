import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  XIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";
import { SocialItem } from "../types";
import { SHARE_URL, SHARE_TITLE } from "../constants";

const socials: SocialItem[] = [
  {
    id: "facebook-share",
    component: FacebookShareButton,
    icon: FacebookIcon,
    props: {
      url: SHARE_URL,
      size: 40,
      round: "true",
      "aria-label": "Share on Facebook",
    },
  },
  {
    id: "whatsapp",
    component: WhatsappShareButton,
    icon: WhatsappIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
      size: 40,
      round: "true",
      "aria-label": "Share on WhatsApp",
    },
  },
  {
    id: "twitter",
    component: TwitterShareButton,
    icon: XIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
      size: 40,
      round: "true",
      "aria-label": "Share on X (Twitter)",
    },
  },
  {
    id: "telegram",
    component: TelegramShareButton,
    icon: TelegramIcon,
    props: {
      url: SHARE_URL,
      title: SHARE_TITLE,
      size: 40,
      round: "true",
      "aria-label": "Share on Telegram",
    },
  },
];

export default socials;
