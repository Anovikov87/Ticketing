import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticketsan/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
