import { Subjects, Publisher, TicketCreatedEvent } from "@ticketsan/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
