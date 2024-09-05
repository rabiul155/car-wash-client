import { ServiceType } from '@/types/service';
import { FaStar } from 'react-icons/fa';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router-dom';

type PropsType = {
  service: ServiceType;
  handleBooking: (service: ServiceType) => void;
};

function ServiceCard(props: PropsType) {
  return (
    <div className="w-full">
      <Card className=" rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <Link className="cursor-pointer" to={`/services/${props.service._id}`}>
          <CardHeader className="p-0 rounded-t-lg overflow-hidden">
            <img
              src={props.service?.image}
              className="h-[280px] w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              alt=""
            />
          </CardHeader>
        </Link>
        <CardContent className="flex flex-col gap-4 p-4">
          <CardTitle className=" text-2xl text-gray-800 font-bold flex justify-between">
            <div className=" text-gray-800 text-xl">
              <span> {props.service?.name}</span>
            </div>
            <div className="font-medium text-gray-800 text-xl">
              <span>{props.service?.price}</span> <small>BDT</small>
            </div>
          </CardTitle>

          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[0, 1, 2, 3].map((i, index) => (
                  <FaStar key={index} className="text-yellow-500 size-5" />
                ))}
              </div>
              <small className=" text-gray-500 mt-[2px] mx-2">
                Ratings : 4324
              </small>
            </div>
          </div>

          <div className="text-gray-800 font-medium">
            <span>Duration : {props.service.duration}</span>
            <small className="text-sm">min</small>
          </div>
        </CardContent>

        <CardFooter className="flex gap-3">
          <button
            onClick={() => props.handleBooking(props.service)}
            type="button"
            className="w-full cursor-pointer text-center py-1.5 font-semibold border  border-gray-800 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            Book Now
          </button>
          <Link
            to={`/services/${props.service._id}`}
            className="w-full cursor-pointer text-center py-1.5 font-semibold border border-gray-800 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white"
          >
            View Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ServiceCard;
