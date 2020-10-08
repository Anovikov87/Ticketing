import { Subjects, Publisher, TicketUpdatedEvent } from "@ticketsan/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
