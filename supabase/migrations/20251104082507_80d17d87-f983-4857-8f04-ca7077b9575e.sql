-- Add cover_image_url column to selected_works table
ALTER TABLE public.selected_works 
ADD COLUMN cover_image_url text;