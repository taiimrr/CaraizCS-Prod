import { useRouter } from "next/router";

export default function Layout({ children }) {
  const route = useRouter();
  // header start
  // let header;
  // if (
  //   route.asPath === "/home/home_3" ||
  //   route.asPath === "/home/home_9" ||
  //   route.asPath === "/maintenance" ||
  //   route.asPath === "/home/home_12"
  // ) {
  //   header = <Header02 />;
  // } else if (route.asPath === "/platform_status") {
  //   header = <Header03 />;
  // } else if (route.asPath === "/home/home_8") {
  //   header = <Header04 />;
  // } else {
  //   header = <Header01 />;
  // }
  // // header end

  return (
    <>
      {/* <Wallet_modal />
      <BidsModal />
      <BuyModal /> */}
      <main>{children}</main>
    </>
  );
}
