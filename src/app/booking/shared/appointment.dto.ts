import {CustomerDto} from "../../customer/shared/customer-dto";

export interface AppointmentDto {
  id: number;
  treatmentName: string;
  start: string;
  customer: CustomerDto;
}
