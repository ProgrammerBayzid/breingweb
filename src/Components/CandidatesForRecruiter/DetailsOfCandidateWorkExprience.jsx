const DetailsOfCandidateWorkExprience = ({ wken }) => {
  const wesinputDateString = wken?.startdate;
  const weeinputDateStrin = wken?.enddate;
  const wesdate = new Date(wesinputDateString);
  const weeedate = new Date(weeinputDateStrin);
  // Months mapping
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const wesyear = wesdate.getFullYear();
  const wesmonth = wesdate.getMonth(); // Month value is 0-indexed
  const weeeyear = weeedate.getFullYear();
  const weeemonth = weeedate.getMonth(); // Month value is 0-indexed
  const wesformattedMonth = months[wesmonth];
  const weeeformattedMonth = months[weeemonth];
  const wesformattedDate = `${wesyear} ${wesformattedMonth}`;
  const weeformattedDate = `${weeeyear} ${weeeformattedMonth}`;
  return (
    <div>
      <div className="flex justify-between">
        <p> {wken?.companyname}</p>
        <p>
          {wesformattedDate} - {weeformattedDate}
        </p>
      </div>
      <p className="text-[#212427] text-opacity-40">{wken?.designation}</p>
      <p className="text-[#212427] text-opacity-40 my-1">
        {wken?.dutiesandresponsibilities}
      </p>
    </div>
  );
};

export default DetailsOfCandidateWorkExprience;
