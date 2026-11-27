# Lakomio development context

Lakomio is a dessert marketplace for verified local confectioners. The first market is Volgograd.

## Non-negotiable rules

- Buyer, seller and admin are separate product surfaces sharing one identity.
- Authentication is phone OTP.
- Authorization roles live in Postgres/app metadata controlled by the server, never user metadata.
- Every exposed table is created with RLS and explicit policies.
- One order belongs to one seller.
- Payment, payout, SMS and delivery providers are adapters.
- Never invent product listings, reviews, nutrition values or seller claims.
- AI-generated dessert photos are not allowed.
- Keep secrets server-only and make write operations idempotent.

Read `docs/PHASE_1.md` before implementation. Build the critical order path before secondary features.

