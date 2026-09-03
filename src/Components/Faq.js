import "../css/faq.css";

// Keep these Q&As in sync with the FAQPage JSON-LD in public/index.html.
const faqs = [
  {
    q: "How much do I earn for referring a loan officer?",
    a: "Realtors earn $25 for any referral who interviews with First Class Home Mortgage. You earn $695 for a referral who is hired, stays in their position, and closes at least one loan with us. The maximum is 10 referrals per month, or $7,200.",
  },
  {
    q: "Who is eligible to be referred?",
    a: "Currently licensed, active loan officers who have an NMLS number.",
  },
  {
    q: "Which states does the program cover?",
    a: "First Class Home Mortgage is licensed and actively hiring in California, Colorado, Idaho, New Mexico, Texas, Utah, and Florida.",
  },
  {
    q: "How do I submit a referral?",
    a: "Use the online referral form linked on this page — it takes about two minutes. If two or more people refer the same candidate, only the first referrer receives the reward.",
  },
  {
    q: "Is there a cap on how many referrals I can make?",
    a: "Yes. A Realtor can make up to 10 referrals per month, for a maximum of $7,200.",
  },
  {
    q: "What is the loan officer compensation plan?",
    a: "Loan officers have a maximum comp plan of 2% lender-paid per closed loan. A 401(k) is offered to tenured employees.",
  },
  {
    q: "Who runs the program and who do I contact?",
    a: "The Partner/Recruiting Referral Program is run by CEO Troy Warner. Call (801) 597-8832 or email loans@troywarner.com for details.",
  },
];

function Faq() {
  return (
    <section className="faq" aria-labelledby="faqHeading">
      <h2 id="faqHeading" className="faqH2">
        Frequently Asked Questions
      </h2>
      <div className="faqList">
        {faqs.map((item) => (
          <details className="faqItem" key={item.q}>
            <summary className="faqQuestion">{item.q}</summary>
            <p className="faqAnswer">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;
