-- Create experience table for professional experience entries
CREATE TABLE public.experience (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  years TEXT NOT NULL,
  description TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.experience ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Experience entries are viewable by everyone" 
ON public.experience 
FOR SELECT 
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_experience_updated_at
BEFORE UPDATE ON public.experience
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create selected_works table for portfolio projects
CREATE TABLE public.selected_works (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  year TEXT NOT NULL,
  role TEXT NOT NULL,
  gradient TEXT NOT NULL DEFAULT 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
  project_overview TEXT,
  role_description TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.selected_works ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Selected works are viewable by everyone" 
ON public.selected_works 
FOR SELECT 
USING (true);

-- Create trigger for updated_at
CREATE TRIGGER update_selected_works_updated_at
BEFORE UPDATE ON public.selected_works
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data for experience
INSERT INTO public.experience (company, position, years, description, sort_order) VALUES
  ('Tech Corp', 'Senior Product Designer', '2022 - Present', 'Leading design initiatives for enterprise SaaS products, managing a team of 5 designers, and establishing design systems.', 1),
  ('Design Studio', 'Product Designer', '2020 - 2022', 'Worked on mobile-first designs for various clients, focusing on user research and iterative prototyping.', 2),
  ('Startup Inc', 'UX Designer', '2018 - 2020', 'Created user flows and wireframes for a growing fintech startup, conducting usability testing and design sprints.', 3),
  ('Agency XYZ', 'Junior Designer', '2016 - 2018', 'Assisted in website designs and branding projects, learning the fundamentals of design thinking.', 4);

-- Insert sample data for selected works
INSERT INTO public.selected_works (title, description, year, role, gradient, project_overview, role_description, sort_order) VALUES
  ('E-Commerce Platform', 'Complete redesign of mobile shopping experience', '2024', 'Lead Product Designer', 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)', 'Redesigned the entire mobile shopping experience for a leading e-commerce platform, resulting in a 40% increase in conversion rates and improved user satisfaction scores.', 'Led the design team, conducted user research, created prototypes, and worked closely with developers to ensure pixel-perfect implementation.', 1),
  ('Financial Dashboard', 'Data visualization tool for investment tracking', '2023', 'Product Designer', 'linear-gradient(135deg, #000000 0%, #666666 100%)', 'Developed an intuitive dashboard for tracking investment portfolios with real-time data visualization and predictive analytics.', 'Designed the UI/UX, created interactive data visualizations, and established a scalable design system for future features.', 2),
  ('Healthcare App', 'Patient management system for medical professionals', '2023', 'UX/UI Designer', 'linear-gradient(135deg, #2a2a2a 0%, #5a5a5a 100%)', 'Built a comprehensive patient management system that streamlined workflows for healthcare providers and improved patient engagement.', 'Conducted extensive user research with medical professionals, designed HIPAA-compliant interfaces, and created accessible designs for diverse user groups.', 3),
  ('SaaS Platform', 'B2B collaboration tool for remote teams', '2022', 'Product Designer', 'linear-gradient(135deg, #0a0a0a 0%, #3a3a3a 100%)', 'Created a collaboration platform that helped remote teams stay connected and productive, featuring real-time communication and project management tools.', 'Designed the core user experience, created onboarding flows, and collaborated with product managers to define feature priorities.', 4);