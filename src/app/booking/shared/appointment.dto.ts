import {CustomerDto} from "../../customer/shared/customer-dto";

export interface AppointmentDto {
  treatmentName: string;
  start: string;
  customer: CustomerDto;
}
