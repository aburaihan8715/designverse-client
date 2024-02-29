import SectionHeading from "../../components/ui/SectionHeading";

const MyPaymentHistoryPage = () => {
  return (
    <div>
      <div>
        <SectionHeading
          heading={`payment history`}
          subHeading={`at a glance`}
        />
      </div>

      <div>
        <div className="text-3xl">
          <div className="">
            <span>Total payments: </span>
            <span>{0}</span>
          </div>

          <div className="">
            <span>Total cost: $ {130} </span>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="table border border-success">
            <thead className="capitalize">
              <tr className="border border-success">
                <th>#</th>
                <th>Email</th>
                <th>Transaction id</th>
                <th>price</th>
                <th>payment date</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6]?.map((item) => (
                <tr key={item}>
                  <th>{item}</th>
                  <td>{`example@gmail.com`}</td>
                  <td>{`215689745865`}</td>
                  <td className="">$ {230}</td>
                  <td className="">{`01 Mar, 2024`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPaymentHistoryPage;
/*

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
*/
