import { ServiceType } from './service';

export type SlotType = {
  _id: string;
  service: ServiceType;
  startTime: string;
  endTime: string;
  isBooked: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};
