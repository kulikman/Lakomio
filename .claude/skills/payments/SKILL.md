---
name: payments
description: Provider-neutral payment, ledger, refund and payout implementation for Lakomio.
---

# Lakomio payments

Use this skill for payment, refund, commission, seller balance and payout work.

## Rules

1. The internal double-entry ledger is the source of truth.
2. Provider calls go through an adapter interface.
3. Every write is idempotent.
4. Webhook signatures are verified before processing.
5. Provider events are stored before state transitions.
6. One order belongs to one seller.
7. Platform and seller-direct attribution must remain auditable.
8. Never expose provider secrets to clients.
9. Refund and payout state transitions require integration tests.
10. A provider name is selected only after legal and commercial validation.
