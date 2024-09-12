import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import image1 from '@/assets/customer1.jpg';
import image2 from '@/assets/customer2.jpg';
import image3 from '@/assets/customer3.jpg';
import image4 from '@/assets/customer4.jpg';

const customersData = [
  {
    id: 1,
    name: 'Amir khan',
    image: image1,
    description:
      'Amazing service! They were quick and efficient with the oil change, and the staff explained everything clearly. I’m very satisfied and will return for my next maintenance!',
  },
  {
    id: 2,
    name: 'Mr Basil ',
    image: image2,
    description:
      'The brake pad replacement was done in a timely manner. The staff was helpful, though the waiting time was slightly longer than expected. Overall, a good experience.',
  },
  {
    id: 3,
    name: 'Alex Bean',
    image: image3,
    description:
      'I had a problem with my engine, and they were able to quickly diagnose and fix it. The team was knowledgeable, and their prices were fair. Highly recommend for engine work!',
  },
  {
    id: 4,
    name: 'Mirza Hasan',
    image: image4,
    description:
      'The tire rotation service was efficient, and the technician gave me some helpful advice on maintaining my tires. Overall, I’m happy with the service, although the waiting area could use some improvement.',
  },
];

function CustomerReview() {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full px-16"
    >
      <CarouselContent className="flex">
        {customersData.map((customer) => (
          <CarouselItem
            key={customer.id}
            className="md:basis-1/2 lg:basis-1/3 lg:p-8"
          >
            <Card>
              <CardContent className="relative flex aspect-square items-center justify-center rounded-md bg-slate-100 overflow-hidden">
                <div className="absolute top-8 hidden lg:flex justify-center ">
                  <img
                    src={customer?.image}
                    className="size-36 rounded-full object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="absolute text-gray-800 bottom-2 lg:bottom-4 flex justify-center">
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-center">
                      {customer.name}
                    </h4>
                    <p className="text-sm text-center my-2">
                      {customer.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9664;
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
        &#9654;
      </CarouselNext>
    </Carousel>
  );
}

export default CustomerReview;
