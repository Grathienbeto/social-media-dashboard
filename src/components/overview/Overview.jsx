import { OverviewCard } from "./OverviewCard";

export const Overview = () => {
  return (
    <section className="mt-10">
      <h2 className="dark:text-dm_white text-2xl font-bold mb-2 text-lm_darkGrayBlue">
        Overview - Today
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 gap-y-5">
        <OverviewCard
          interactions={"Page Views"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-facebook.svg"
          }
          amount={"87"}
          variance={3}
        />
        <OverviewCard
          interactions={"Likes"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-facebook.svg"
          }
          amount={"52"}
          variance={-2}
        />
        <OverviewCard
          interactions={"Likes"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-instagram.svg"
          }
          amount={"5462"}
          variance={2257}
        />
        <OverviewCard
          interactions={"Profile Views"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-instagram.svg"
          }
          amount={"52k"}
          variance={1375}
        />
        <OverviewCard
          interactions={"Retweets"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-twitter.svg"
          }
          amount={"117"}
          variance={303}
        />
        <OverviewCard
          interactions={"Likes"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-twitter.svg"
          }
          amount={"507"}
          variance={553}
        />
        <OverviewCard
          interactions={"Likes"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-youtube.svg"
          }
          amount={"107"}
          variance={-19}
        />
        <OverviewCard
          interactions={"Total Views"}
          brand={
            "https://raw.githubusercontent.com/Grathienbeto/social-media-dashboard/2d6c71d977e94b22d1f68c441921a4ff6c7c51fc/challenge/images/icon-youtube.svg"
          }
          amount={"1407"}
          variance={-12}
        />
      </div>
    </section>
  );
};
