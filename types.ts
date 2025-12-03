export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  trend?: string;
  positive?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}