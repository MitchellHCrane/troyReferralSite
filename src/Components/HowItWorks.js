import "../css/howItWorks.css";
import { ApplicationIcon, ReviewIcon, PayoutIcon } from "./StepIcons";

const steps = [
  {
    Icon: ApplicationIcon,
    title: "1. Submit the referral",
    body: "Send us a licensed loan officer through the online referral form. It takes about two minutes.",
  },
  {
    Icon: ReviewIcon,
    title: "2. They interview with us",
    body: "The loan officer you referred interviews with First Class Home Mortgage. You earn $25 just for a Realtor referral that interviews.",
  },
  {
    Icon: PayoutIcon,
    title: "3. You get paid",
    body: "When your referral is hired, stays on, and closes a loan with us, you earn $695 — up to 10 per month ($7,200).",
  },
];

function HowItWorks() {
  return (
    <section className="howItWorks" aria-labelledby="howItWorksHeading">
      <h2 id="howItWorksHeading" className="howItWorksH2">
        How the Referral Program Works
      </h2>
      <ol className="howItWorksSteps">
        {steps.map(({ Icon, title, body }) => (
          <li className="howItWorksStep" key={title}>
            <span className="howItWorksIcon">
              <Icon />
            </span>
            <h3 className="howItWorksStepTitle">{title}</h3>
            <p>{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowItWorks;
