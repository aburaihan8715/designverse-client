import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useClassesData from "../../../hooks/useClassesData";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Card from "../../../components/Card/Card";

const PopularClasses = () => {
  const [classesData, classesLoading, classesError] = useClassesData();
  const sortedClasses = classesData?.sort((a, b) => b.students - a.students);
  const popularSixClasses = sortedClasses?.slice(0, 6);

  if (classesLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (classesError) {
    return <p>something went wrong {classesError.message}</p>;
  }
  return (
    <div className="">
      <SectionHeading subHeading={`connect with`} heading={`popular classes`}></SectionHeading>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {popularSixClasses?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
