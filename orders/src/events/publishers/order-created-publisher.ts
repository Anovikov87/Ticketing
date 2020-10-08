import { Publisher, OrderCreatedEvent, Subjects } from "@ticketsan/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
