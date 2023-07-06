import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const MyEnrolledClassesPage = () => {
  return (
    <div className="ml-3">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`classes enrolled`}></SectionHeading>
      </div>
      <h2>Total data :{0}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="capitalize">
            <tr>
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>instructor</th>
              <th>instructor email</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {[...Array(5).keys()].map((index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="http://placehold.it/40x40" alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>Sustainable Fashion Design and Ethical Practices</td>
                <td>Jonson Roy</td>
                <td>jonson@gmail.com</td>
                <td>$ 12</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClassesPage;
