import HomeClient from "@/components/HomeClient";
import HowToJsonLd from "@/components/HowToJsonLd";

export default function HomePage() {
  return (
    <>
      <HowToJsonLd
        name="Calculate housing affordability for your country"
        description="A free, three-step calculator that takes your income, savings and existing debt and returns the maximum home price you can afford in your country, the years to a typical down payment, and the monthly mortgage burden against the country median."
        url="/"
        steps={[
          { name: "Pick your country", text: "Select your country so the calculator can use the right mortgage rate, minimum down-payment fraction, and price-to-income median." },
          { name: "Income, savings and debt", text: "Enter annual after-tax household income, current savings (for a down payment), and existing monthly debt obligations." },
          { name: "See your affordability snapshot", text: "Get the max-affordable price using a 36% debt-to-income ceiling, the monthly mortgage burden on the country median, and years to save the down payment." },
        ]}
      />
      <HomeClient initialCountry="US" />
    </>
  );
}
