
const DetailsOfCandidateEduction = ({edu}) => {

    const inputDateString = edu?.startdate;
    const inputDateStrin = edu?.enddate;
  // Parse the input date string into a Date object
  const date = new Date(inputDateString);
  const edate = new Date(inputDateStrin);

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
      // Extract year and month
  const year = date.getFullYear();
  const month = date.getMonth(); // Month value is 0-indexed

  const eyear = edate.getFullYear();
  const emonth = edate.getMonth(); // Month value is 0-indexed

    const formattedMonth = months[month];
    const eformattedMonth = months[emonth];
    const formattedDate = `${year} ${formattedMonth}`;
    const eformattedDate = `${eyear} ${eformattedMonth}`;
  
    return (
        <div>
            <div className="flex justify-between">
            <p> {edu?.institutename}</p>
            <p>
              {formattedDate} to {eformattedDate}
            </p>
          </div>
          <p className="text-[#212427] text-opacity-40">
            {edu?.subject?.name}
          </p>
        </div>
    );
};

export default DetailsOfCandidateEduction;