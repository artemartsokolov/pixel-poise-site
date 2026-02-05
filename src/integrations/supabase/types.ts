export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          author: string
          canonical_url: string | null
          category: string
          content: string
          created_at: string
          date: string
          excerpt: string
          humanized: boolean | null
          id: string
          IG: boolean | null
          image_url: string
          localized: Json | null
          meta_description: string | null
          meta_title: string | null
          og_image_url: string | null
          publish: boolean | null
          slug: string | null
          sourse_id: string | null
          tags: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          canonical_url?: string | null
          category: string
          content: string
          created_at?: string
          date?: string
          excerpt: string
          humanized?: boolean | null
          id?: string
          IG?: boolean | null
          image_url: string
          localized?: Json | null
          meta_description?: string | null
          meta_title?: string | null
          og_image_url?: string | null
          publish?: boolean | null
          slug?: string | null
          sourse_id?: string | null
          tags?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          canonical_url?: string | null
          category?: string
          content?: string
          created_at?: string
          date?: string
          excerpt?: string
          humanized?: boolean | null
          id?: string
          IG?: boolean | null
          image_url?: string
          localized?: Json | null
          meta_description?: string | null
          meta_title?: string | null
          og_image_url?: string | null
          publish?: boolean | null
          slug?: string | null
          sourse_id?: string | null
          tags?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      cash: {
        Row: {
          created_at: string
          id: number
          postpromt: string | null
          prepromt: string | null
          promt: string | null
          sourse_id: string | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          postpromt?: string | null
          prepromt?: string | null
          promt?: string | null
          sourse_id?: string | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          postpromt?: string | null
          prepromt?: string | null
          promt?: string | null
          sourse_id?: string | null
          url?: string | null
        }
        Relationships: []
      }
      credit_packages: {
        Row: {
          created_at: string
          credits_amount: number
          id: string
          name: string
          price_eur: number
          unit_price: number
          updated_at: string
          validity_days: number
        }
        Insert: {
          created_at?: string
          credits_amount: number
          id?: string
          name: string
          price_eur: number
          unit_price: number
          updated_at?: string
          validity_days: number
        }
        Update: {
          created_at?: string
          credits_amount?: number
          id?: string
          name?: string
          price_eur?: number
          unit_price?: number
          updated_at?: string
          validity_days?: number
        }
        Relationships: []
      }
      credit_purchases: {
        Row: {
          created_at: string
          credits_added: number
          expires_at: string
          id: string
          package_id: string
          profile_id: string
          purchased_at: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          credits_added: number
          expires_at: string
          id?: string
          package_id: string
          profile_id: string
          purchased_at?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          credits_added?: number
          expires_at?: string
          id?: string
          package_id?: string
          profile_id?: string
          purchased_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_purchases_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "credit_packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "credit_purchases_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      experience: {
        Row: {
          company: string
          created_at: string
          description: string
          id: string
          position: string
          sort_order: number
          updated_at: string
          years: string
        }
        Insert: {
          company: string
          created_at?: string
          description: string
          id?: string
          position: string
          sort_order?: number
          updated_at?: string
          years: string
        }
        Update: {
          company?: string
          created_at?: string
          description?: string
          id?: string
          position?: string
          sort_order?: number
          updated_at?: string
          years?: string
        }
        Relationships: []
      }
      images: {
        Row: {
          aspect_ratio: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: string
          likes_count: number | null
          metadata: Json | null
          model: string | null
          private: boolean
          prompt: string | null
          public_url: string | null
          recreates_count: number | null
          storage_path: string | null
          title: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          aspect_ratio?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          likes_count?: number | null
          metadata?: Json | null
          model?: string | null
          private?: boolean
          prompt?: string | null
          public_url?: string | null
          recreates_count?: number | null
          storage_path?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          aspect_ratio?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: string
          likes_count?: number | null
          metadata?: Json | null
          model?: string | null
          private?: boolean
          prompt?: string | null
          public_url?: string | null
          recreates_count?: number | null
          storage_path?: string | null
          title?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      likes: {
        Row: {
          created_at: string
          id: string
          image_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "likes_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          cookie_consent: Json | null
          created_at: string
          credit_balance: number
          credits: number
          followers_count: number
          following_count: number
          id: string
          posts_count: number
          privacy_agreed: boolean
          updated_at: string
          user_email: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          cookie_consent?: Json | null
          created_at?: string
          credit_balance?: number
          credits?: number
          followers_count?: number
          following_count?: number
          id: string
          posts_count?: number
          privacy_agreed?: boolean
          updated_at?: string
          user_email?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          cookie_consent?: Json | null
          created_at?: string
          credit_balance?: number
          credits?: number
          followers_count?: number
          following_count?: number
          id?: string
          posts_count?: number
          privacy_agreed?: boolean
          updated_at?: string
          user_email?: string | null
          username?: string
        }
        Relationships: []
      }
      prompt_hints: {
        Row: {
          created_at: string | null
          id: string
          postfix: string | null
          prefix: string | null
          text: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          postfix?: string | null
          prefix?: string | null
          text: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          postfix?: string | null
          prefix?: string | null
          text?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      selected_works: {
        Row: {
          cover_image_url: string | null
          created_at: string
          description: string
          gradient: string
          id: string
          project_overview: string | null
          role: string
          role_description: string | null
          sort_order: number
          title: string
          updated_at: string
          year: string
        }
        Insert: {
          cover_image_url?: string | null
          created_at?: string
          description: string
          gradient?: string
          id?: string
          project_overview?: string | null
          role: string
          role_description?: string | null
          sort_order?: number
          title: string
          updated_at?: string
          year: string
        }
        Update: {
          cover_image_url?: string | null
          created_at?: string
          description?: string
          gradient?: string
          id?: string
          project_overview?: string | null
          role?: string
          role_description?: string | null
          sort_order?: number
          title?: string
          updated_at?: string
          year?: string
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          created_at: string
          description: string | null
          display_name: string
          features: Json
          id: string
          is_active: boolean
          monthly_credits: number
          name: string
          paddle_price_id_monthly: string | null
          paddle_price_id_yearly: string | null
          paddle_product_id: string | null
          price_monthly: number
          price_yearly: number
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_name: string
          features?: Json
          id?: string
          is_active?: boolean
          monthly_credits?: number
          name: string
          paddle_price_id_monthly?: string | null
          paddle_price_id_yearly?: string | null
          paddle_product_id?: string | null
          price_monthly?: number
          price_yearly?: number
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_name?: string
          features?: Json
          id?: string
          is_active?: boolean
          monthly_credits?: number
          name?: string
          paddle_price_id_monthly?: string | null
          paddle_price_id_yearly?: string | null
          paddle_product_id?: string | null
          price_monthly?: number
          price_yearly?: number
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          billing_cycle: string
          canceled_at: string | null
          created_at: string
          credits_accrued: number
          current_period_end: string | null
          current_period_start: string | null
          id: string
          last_invoice_id: string | null
          payment_provider: string | null
          payment_provider_customer_id: string | null
          payment_provider_subscription_id: string | null
          plan_id: string
          status: string
          trial_end: string | null
          trial_start: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_cycle?: string
          canceled_at?: string | null
          created_at?: string
          credits_accrued?: number
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          last_invoice_id?: string | null
          payment_provider?: string | null
          payment_provider_customer_id?: string | null
          payment_provider_subscription_id?: string | null
          plan_id: string
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_cycle?: string
          canceled_at?: string | null
          created_at?: string
          credits_accrued?: number
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          last_invoice_id?: string | null
          payment_provider?: string | null
          payment_provider_customer_id?: string | null
          payment_provider_subscription_id?: string | null
          plan_id?: string
          status?: string
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          created_at: string | null
          id: string
          image_id: string | null
          profile_id: string
          prompt: string
          status: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_id?: string | null
          profile_id: string
          prompt: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_id?: string | null
          profile_id?: string
          prompt?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "images"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          created_at: string
          duration: number
          error_message: string | null
          id: string
          mode: string | null
          prompt: string
          public_url: string | null
          status: string
          storage_path: string | null
          task_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          duration: number
          error_message?: string | null
          id?: string
          mode?: string | null
          prompt: string
          public_url?: string | null
          status?: string
          storage_path?: string | null
          task_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          duration?: number
          error_message?: string | null
          id?: string
          mode?: string | null
          prompt?: string
          public_url?: string | null
          status?: string
          storage_path?: string | null
          task_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_random_prompt_hints: {
        Args: { limit_count?: number }
        Returns: {
          created_at: string | null
          id: string
          postfix: string | null
          prefix: string | null
          text: string
          updated_at: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "prompt_hints"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_user_subscription: {
        Args: { user_uuid: string }
        Returns: {
          billing_cycle: string
          current_period_end: string
          current_period_start: string
          features: Json
          limits: Json
          plan_display_name: string
          plan_name: string
          status: string
          subscription_id: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
