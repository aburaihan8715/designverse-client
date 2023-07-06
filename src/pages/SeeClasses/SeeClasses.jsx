import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";

const SeeClasses = () => {
  return (
    <div className="py-8">
      <Container>
        <Helmet>
          <title>FashionVerse | MyClassesPage</title>
        </Helmet>

        <div className="text-center text-2xl">coming soon..........</div>
        {/* <div className="ml-3">
          <Helmet>
            <title>FashionVerse | MyClassesPage</title>
          </Helmet>
          <div>
            <SectionHeading subHeading={`how many`} heading={`classes`}></SectionHeading>
          </div>
          <p className="text-xl">Total classes :{myClassesData?.length}</p>
          <div className="overflow-x-auto">
            <table className="table border border-success">
            
              <thead className="capitalize">
                <tr className="border border-success">
                  <th>#</th>
                  <th>image</th>
                  <th>name</th>
                  <th>seats</th>
                  <th>price</th>

                  <th>enrolled</th>
                </tr>
              </thead>
              <tbody>
                
                {myClassesData?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.classImage} alt="class cover photo" />
                        </div>
                      </div>
                    </td>

                    <td>{item?.className}</td>
                    <td>{item?.seats}</td>
                    <td>$ {item?.price}</td>

                    <td>{item?.enrolled ? item.enrolled : "not enrolled yet"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default SeeClasses;
