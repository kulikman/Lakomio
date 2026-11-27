# Repository instructions

This repository contains Lakomio product code only.

Before changing behavior:

1. Read `docs/PHASE_1.md` and `docs/ARCHITECTURE.md`.
2. Keep buyer, seller and admin boundaries explicit.
3. Add RLS in the same migration as every exposed table.
4. Do not bind domain logic directly to a payment, SMS or delivery vendor.
5. Run `pnpm verify` before shipping.

