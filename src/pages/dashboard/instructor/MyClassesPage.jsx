import { Helmet } from "react-helmet-async";
import useClassesData from "../../../hooks/useClassesData";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const MyClassesPage = () => {
  const [classesData] = useClassesData();
  return (
    <div className="ml-3">
      <Helmet>
        <title>FashionVerse | MyClassesPage</title>
      </Helmet>
      <div>
        <SectionHeading subHeading={`how many`} heading={`classes`}></SectionHeading>
      </div>
      <p className="text-xl">Total classes :{classesData?.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>name</th>
              <th>seats</th>
              <th>price</th>
              <th>status</th>
              <th>enrolled</th>
              <th>feedback</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classesData?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="http://placehold.it/40x40" alt="class cover photo" />
                    </div>
                  </div>
                </td>

                <td>Sustainable Fashion Design and Ethical Practices</td>
                <td>25</td>
                <td>$ 35</td>
                <td>pending</td>
                <td>12</td>
                <td>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, ratione. Necessitatibus reiciendis possimus voluptates esse
                  explicabo expedita nemo velit, cumque, ducimus vitae ad cum similique, assumenda dicta sint aspernatur voluptatum?
                </td>

                <th className="space-y-2">
                  <button className="btn btn-info btn-xs">update</button>
                  <button className="btn btn-error btn-xs">delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClassesPage;
