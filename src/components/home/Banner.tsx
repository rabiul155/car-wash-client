import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import sliderImage1 from '@/assets/slider-image-1.jpg';
import sliderImage2 from '@/assets/slider-image-2.jpg';
import sliderImage3 from '@/assets/slider-image-3.jpg';

type SliderDataType = {
  id: number;
  image: string;
  heading: string;
  description: string;
};

function Banner() {
  const sliderData: SliderDataType[] = [
    {
      id: 1,
      image: sliderImage1,
      heading: 'Car Wash Service',
      description:
        'Keep your car looking brand new with our thorough car wash services, featuring hand washing, waxing, and detailing options.',
    },
    {
      id: 2,
      image: sliderImage2,
      heading: 'Brake Inspection & Repair',
      description:
        'Stay safe on the road with our thorough brake inspections and repair services, designed to maintain optimal braking performance.',
    },
    {
      id: 3,
      image: sliderImage3,
      heading: 'Tire Rotation & Alignment',
      description:
        'Extend the life of your tires and improve vehicle handling with our professional tire rotation and alignment services.',
    },
  ];

  return (
    <div className="relative w-full h-[550px] ">
      <Carousel
        className=" overflow-hidden  shadow-lg"
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent className="relative flex items-center justify-center h-[550px] p-0">
                  <div className="relative h-full w-full">
                    <img
                      src={slider?.image}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                  </div>
                  <div className="absolute text-white bottom-16 flex items-center justify-center max-w-lg p-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h4 className="text-3xl font-bold">{slider.heading}</h4>
                      <div className="font-semibold text-center">
                        {slider.description}
                      </div>
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
    </div>
  );
}

export default Banner;
