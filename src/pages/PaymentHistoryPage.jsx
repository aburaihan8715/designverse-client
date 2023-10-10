import PaymentHistoryTable from "../features/student/PaymentHistoryTable";
import SectionHeading from "../ui/SectionHeading";

const PaymentHistoryPage = () => {
  return (
    <div>
      <div>
        <SectionHeading
          heading={`payment history`}
          subHeading={`at a glance`}
        />
      </div>
      <div>
        <PaymentHistoryTable />
      </div>
    </div>
  );
};

export default PaymentHistoryPage;
