-- Contact Form Database Setup
-- Run this SQL in your Supabase SQL Editor

-- Drop existing table if it exists (to start fresh)
DROP TABLE IF EXISTS contact_us CASCADE;

-- Create the contact_us table
CREATE TABLE contact_us (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_contact_us_email ON contact_us(email);
CREATE INDEX idx_contact_us_created_at ON contact_us(created_at);

-- Disable RLS for now (simpler setup)
ALTER TABLE contact_us DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon users (for form submissions)
GRANT ALL ON contact_us TO anon;
GRANT ALL ON contact_us TO authenticated;
GRANT USAGE ON SEQUENCE contact_us_id_seq TO anon;
GRANT USAGE ON SEQUENCE contact_us_id_seq TO authenticated;

-- Optional: Create a view for admin dashboard
CREATE OR REPLACE VIEW contact_submissions AS
SELECT 
  id,
  name,
  company_name,
  email,
  phone,
  message,
  created_at,
  EXTRACT(DAY FROM NOW() - created_at) as days_ago
FROM contact_us
ORDER BY created_at DESC;

-- Grant view permissions
GRANT ALL ON contact_submissions TO anon;
GRANT ALL ON contact_submissions TO authenticated;

-- ===========================================
-- QUOTATION REQUESTS TABLE
-- ===========================================

-- Create the quotation_requests table
CREATE TABLE quotation_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  city VARCHAR(100),
  state VARCHAR(100),
  project_type VARCHAR(100),
  quantity VARCHAR(255),
  urgency VARCHAR(50),
  budget VARCHAR(100),
  industry VARCHAR(100),
  additional_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_quotation_requests_email ON quotation_requests(email);
CREATE INDEX idx_quotation_requests_created_at ON quotation_requests(created_at);
CREATE INDEX idx_quotation_requests_industry ON quotation_requests(industry);
CREATE INDEX idx_quotation_requests_budget ON quotation_requests(budget);

-- Disable RLS for simpler setup
ALTER TABLE quotation_requests DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon users (for form submissions)
GRANT ALL ON quotation_requests TO anon;
GRANT ALL ON quotation_requests TO authenticated;
GRANT USAGE ON SEQUENCE quotation_requests_id_seq TO anon;
GRANT USAGE ON SEQUENCE quotation_requests_id_seq TO authenticated;

-- Create a view for admin dashboard
CREATE OR REPLACE VIEW quotation_submissions AS
SELECT 
  id,
  name,
  company_name,
  email,
  phone,
  city,
  state,
  project_type,
  quantity,
  urgency,
  budget,
  industry,
  additional_notes,
  created_at,
  EXTRACT(DAY FROM NOW() - created_at) as days_ago
FROM quotation_requests
ORDER BY created_at DESC;

-- Grant view permissions
GRANT ALL ON quotation_submissions TO anon;
GRANT ALL ON quotation_submissions TO authenticated;

-- ===========================================
-- CONSULTANCY REQUESTS TABLE
-- ===========================================

-- Create the consultancy_requests table
CREATE TABLE consultancy_requests (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  consultancy_type VARCHAR(100),
  project_scope VARCHAR(100),
  timeline VARCHAR(255),
  budget VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_consultancy_requests_email ON consultancy_requests(email);
CREATE INDEX idx_consultancy_requests_created_at ON consultancy_requests(created_at);
CREATE INDEX idx_consultancy_requests_consultancy_type ON consultancy_requests(consultancy_type);
CREATE INDEX idx_consultancy_requests_budget ON consultancy_requests(budget);

-- Disable RLS for simpler setup
ALTER TABLE consultancy_requests DISABLE ROW LEVEL SECURITY;

-- Grant permissions to anon users (for form submissions)
GRANT ALL ON consultancy_requests TO anon;
GRANT ALL ON consultancy_requests TO authenticated;
GRANT USAGE ON SEQUENCE consultancy_requests_id_seq TO anon;
GRANT USAGE ON SEQUENCE consultancy_requests_id_seq TO authenticated;

-- Create a view for admin dashboard
CREATE OR REPLACE VIEW consultancy_submissions AS
SELECT
  id,
  name,
  company_name,
  email,
  phone,
  consultancy_type,
  project_scope,
  timeline,
  budget,
  description,
  created_at,
  EXTRACT(DAY FROM NOW() - created_at) as days_ago
FROM consultancy_requests
ORDER BY created_at DESC;

-- Grant view permissions
GRANT ALL ON consultancy_submissions TO anon;
GRANT ALL ON consultancy_submissions TO authenticated;