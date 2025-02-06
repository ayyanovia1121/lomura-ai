import OnboardingForm from "./_components/OnboardingForm"
import { industries } from "@/data/industries";

const OnboardingPage = () => {
  return (
    <main>
      <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage