const SectionHeading = ({ subHeading, heading }) => {
  return (
    <div className="max-w-xs mx-auto text-center mb-6">
      <div className="border-b border-success text-secondary pb-2">---{subHeading}---</div>
      <h3 className="border-b border-success py-4 uppercase text-2xl font-semibold">{heading}</h3>
    </div>
  );
};

export default SectionHeading;
