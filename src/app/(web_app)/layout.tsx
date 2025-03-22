import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css";
import CMSGlobalService from "@/core/services/CMSGlobalService";
import NavBarFragment from "@/core/page_builder/_partials/NavBarFragment";
import PhoneCallLeadButton from "@/components/PhoneCallLeadButton";
import ChatBotBox from "@/components/ChatBotBox";

const baseFont = Open_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Portals",
    default: "Home",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSettings = await CMSGlobalService.get();

  return (
    <html lang="en">
      <body className={`${baseFont.className}  antialiased bg-slate-50`}>
        {globalSettings.defaultSite?.navBar && (
          <NavBarFragment {...globalSettings.defaultSite?.navBar} />
        )}

        {globalSettings.callBackButton && (
          <PhoneCallLeadButton
            title={globalSettings.callBackButton.title ?? ""}
            subTitle={globalSettings.callBackButton.subTitle ?? ""}
            timeOpen={globalSettings.callBackButton.timeOpen ?? ""}
          />
        )}

        {/*  */}

        {children}
        {globalSettings.chatbotSetting && (
          <ChatBotBox
            title={globalSettings.chatbotSetting?.title ?? ""}
            name={globalSettings.chatbotSetting.botName ?? ""}
            welcomeMessage={globalSettings.chatbotSetting.welcomeMessage ?? ""}
          />
        )}
        {/* <CookiesNotice /> */}
        {/* <Footer />  */}
      </body>
    </html>
  );
}
