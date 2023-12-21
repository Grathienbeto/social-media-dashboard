import { Card } from "./Card";
import "./followers.css";

export const Followers = () => {
  return (
    <section className="mt-10 flex flex-col md:flex-row justify-around gap-8">
      <Card
        followers={"1987"}
        variance={12}
        svg={
          "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-facebook.svg"
        }
        profile={"@nathanf"}
        subs={"FOLLOWERS"}
        border={"border-facebook"}
      />
      <Card
        followers={"1044"}
        variance={99}
        svg={
          "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-twitter.svg"
        }
        profile={"@nathanf"}
        subs={"FOLLOWERS"}
        border={"border-twitter"}
      />
      <Card
        followers={"11k"}
        variance={1099}
        svg={
          "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-instagram.svg"
        }
        profile={"@realnathanf"}
        subs={"FOLLOWERS"}
        border={"border_insta"}
      />
      <Card
        followers={"8239"}
        variance={-144}
        svg={
          "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-youtube.svg"
        }
        profile={"Nathan F."}
        subs={"SUBSCRIBERS"}
        border={"border-youtube"}
      />
    </section>
  );
};
