
import { FiStar } from "react-icons/fi";

export  function RatingComponent() {
  return (
    <div className="flex bg-white items-center border border-black rounded-md flex-1 p-1">
      
      <div className="flex flex-1 justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex justify-center">
            <FiStar
              size={15}
              strokeWidth={0}
              fill={"gold"}
              cursor="pointer"
              className="star"
            />
          </div>
        ))}
      </div>
    </div>
  );
}