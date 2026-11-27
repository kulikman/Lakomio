export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
export type AppRole = "buyer" | "seller" | "support" | "moderator" | "finance" | "admin";

type Table<Row, Insert = Partial<Row>, Update = Partial<Insert>> = {
  Row: Row;
  Insert: Insert;
  Update: Update;
  Relationships: [];
};

export type Database = {
  public: {
    Tables: {
      cities: Table<{ id: string; name: string; region: string; country_code: string; timezone: string; active: boolean; created_at: string }>;
      profiles: Table<{ id: string; display_name: string | null; avatar_url: string | null; city_id: string | null; created_at: string; updated_at: string }, { id: string; display_name?: string | null; avatar_url?: string | null; city_id?: string | null; created_at?: string; updated_at?: string }>;
      user_roles: Table<{ user_id: string; role: AppRole; granted_at: string }, { user_id: string; role: AppRole; granted_at?: string }>;
      user_consents: Table<{ id: string; user_id: string; consent_type: string; document_version: string; accepted_at: string }, { id?: string; user_id: string; consent_type: string; document_version: string; accepted_at?: string }>;
      devices: Table<{ id: string; user_id: string; platform: "web" | "ios" | "android"; push_token: string | null; last_seen_at: string; created_at: string }, { id?: string; user_id: string; platform: "web" | "ios" | "android"; push_token?: string | null; last_seen_at?: string; created_at?: string }>;
      audit_logs: Table<{ id: number; user_id: string | null; action: string; resource: string | null; metadata: Json; created_at: string }>;
      notifications: Table<{ id: string; user_id: string; title: string; body: string | null; href: string | null; read: boolean; kind: string; created_at: string }>;
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { app_role: AppRole };
    CompositeTypes: { [_ in never]: never };
  };
};

export type Tables<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Row"];
export type TablesInsert<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Insert"];
export type TablesUpdate<T extends keyof Database["public"]["Tables"]> = Database["public"]["Tables"][T]["Update"];
export type Enums<T extends keyof Database["public"]["Enums"]> = Database["public"]["Enums"][T];

export const Constants = { public: { Enums: { app_role: ["buyer", "seller", "support", "moderator", "finance", "admin"] } } } as const;

