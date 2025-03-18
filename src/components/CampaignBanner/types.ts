type CampaignBannerProps = {
  title: string;
  description: string;
  media: {
    type: "img" | "video";
    url: string;
  };
};

export default CampaignBannerProps;
