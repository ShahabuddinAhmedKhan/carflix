export const formatDateAndTime = (dateAndTime) => {
    const dtObject = new Date(dateAndTime);

  const date = dtObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = dtObject.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (<div className="flex justify-between w-full">
      <h3>{date}</h3>
      <h3>{time}</h3>
    </div>);
  
}