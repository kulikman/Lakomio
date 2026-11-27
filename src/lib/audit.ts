import "server-only";

import { logger } from "@/lib/logger";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Json } from "@/types/database";

export type AuditAction =
  | "auth.otp_requested"
  | "auth.login"
  | "auth.logout"
  | "profile.updated"
  | "consent.accepted"
  | "role.granted"
  | "role.revoked"
  | "seller.verification_submitted"
  | "seller.verification_reviewed";

interface AuditParams {
  userId: string | null;
  action: AuditAction;
  resource?: string;
  metadata?: Json;
}

export async function writeAuditLog({ userId, action, resource, metadata = {} }: AuditParams): Promise<void> {
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("audit_logs").insert({
      user_id: userId,
      action,
      resource: resource ?? null,
      metadata,
    });
    if (error) throw error;
  } catch (error) {
    logger.error("audit log write failed", error, { action, userId });
  }
}

