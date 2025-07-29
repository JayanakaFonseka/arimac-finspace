import type { Customer } from "@/types/customers";
import customers from "@/data/customers.json";

export async function getAllCustomers(): Promise<Customer[]> {
  return customers;
}

export async function getCustomerByName(
  name: string
): Promise<Customer | undefined> {
  return customers.find((customer) => customer.identifier === name);
}
