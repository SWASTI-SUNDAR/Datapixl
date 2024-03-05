import Button from "../components/Button";

export function Card({ data, expandedCard, setExpandedCard }) {
  const isExpanded = expandedCard === data.id;

  const toggleExpanded = () => {
    if (isExpanded) {
      setExpandedCard(null); // Close the card if it's already expanded
    } else {
      setExpandedCard(data.id); // Expand the clicked card
    }
  };

  return (
    <div className="card flex pl-5 pr-5 pt-8 pb-8 flex-col border-[3px] rounded-lg border-primary shadow-xl gap-5 justify-center items-center">
      <img src={data.icon} className="w-12 h-12" alt={data.title} />
      <h1 className="text-[24px] text-center font-medium  ">{data.title}</h1>
      <span className="text-secondary  text-[14px] font-medium leading-7 ">
        {data?.Question}
      </span>
      <span className="  text-[16px] font-medium leading-7 ">
        {data.description}{" "}
      </span>
      <div>
        {isExpanded && (
          <div className=" flex flex-col justify-start">
            <span className="text-tertiary text-[20px] font-semibold  ">
              Benifits:
            </span>
            {data.benifits.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <div className="">
                    <ul className="ml-5">
                      <li className="list-disc">
                        <span className="">
                          <span className="text-secondary font-medium ">
                            {item.title}
                          </span>
                          <span className="text-tertiary font-normal">
                            {item.subtext}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Button className="" onClick={toggleExpanded}>
        {isExpanded ? "Hide Details" : "Learn More"}
      </Button>
    </div>
  );
}
