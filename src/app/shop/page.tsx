import { Restaurant } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { HomeContainer } from "./components/home";
import { cookies } from "next/headers";

export default async function Home() {
  const fetchRestaurants = async () => {
    try {
      const restaurant = await prisma.restaurant.findMany({
        skip: 0,
        take: 20,
      });
      return restaurant;
    } catch (e) {
      console.log(e);
      return [];
    }
  };
  const nextCookies = cookies(); // Get cookies object
  const userId = nextCookies.get("_qsId");

  const restaurants: Restaurant[] = await fetchRestaurants();

  return (
    <main
     
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <HomeContainer
        restaurant={restaurants}
        isLoadingPage={false}
        userId={userId?.value || ""}
      />
    </main>
  );
}
