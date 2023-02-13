import React from "react";
import Analytics from "../Analytics/Analytics";
import Hero from "../Hero/Hero";
import Newsletter from "../Newsletter/Newsletter";
import PricingTable from "../PricingTable/PricingTable";

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <PricingTable />
    </div>
  );
};

export default Home;
