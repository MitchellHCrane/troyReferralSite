import "../css/getStarted.css";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

function GetStarted() {
  return (
    <div className="getStarted-div">
      <div className="getStartedBackground">
        <h2 className="getStartedH2">Who We Are</h2>
        <p className="getStartedP">
          First Class Home Mortgage is a mid-size mortgage company that is
          actively looking to grow our business in these 7 States; California,
          Colorado, Idaho, New Mexico, Texas, Utah & Florida. NMLS #1843 Since
          2006, we have helped 1,000&apos;s of families realizes the joy of
          homeownership. We support our loan officers with amazing technology,
          the best programs & social media marketing & advertising.
        </p>
      </div>
      <div className="incentives-eligibility" id="getStarted">
        <div className="programDetails">
          <div className="programDetailsDiv">
            <span className="heroIconSpan">
              <CurrencyDollarIcon className="heroIcon" />
            </span>
            <h2 className="programDetailsH2">Incentives</h2>
          </div>
          <p>
            <span className="dollarReward">$25</span> reward to any Realtor who
            participates in referring a loan officer. The Loan Officer you
            submit must interview with our company.
          </p>
          <p>
            <span className="dollarReward">$695</span> for any referral
            submitted who is hired by the company & remains in their position &
            closes one loan with First Class Home Mortgage. (Max is 10 per month
            or $7,200)
          </p>
        </div>
        <div className="programDetails topSpacing">
          <div className="programDetailsDiv">
            <span className="heroIconSpan">
              <CurrencyDollarIcon className="heroIcon" />
            </span>
            <h2 className="programDetailsH2">Eligibility</h2>
          </div>
          <p>
            Currently licensed active Loan Officer&apos;s that have an NMLS
            Number
          </p>
        </div>
        <div className="programDetails topSpacing">
          <div className="programDetailsDiv">
            <span className="heroIconSpan">
              <CurrencyDollarIcon className="heroIcon" />
            </span>
            <h2 className="programDetailsH2">Rules</h2>
          </div>
          <p>
            If two or more people refer the same candidate, only the first
            referrer will receive the reward.
          </p>
          <p>
            The max cap on the number of referrals a Realtor can make is 10 per
            month. Loan Officers has a max comp plan of 2% lender paid per
            closed loan. 401-K is offered to tenure employees. Paid Company
            Trips are for loan officers that close more than 33 loans in a
            11-month period.
          </p>
          <p>
            <span className="dollarReward">
              <a href="tel:+18015978832">
                Contact CEO Troy Warner for more details: (801)-597-8832
              </a>
            </span>
          </p>
        </div>
        <div className="formDiv">
          <a
            href="https://fs10.formsite.com/twarner69/kdbphjilaj/index"
            target="_blank"
            rel="noreferrer"
            className="buttonBlue"
          >
            Make a Referral
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
