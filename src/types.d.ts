declare module 'lucide-react' {
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string
    color?: string
    strokeWidth?: number | string
    absoluteStrokeWidth?: boolean
  }

  export type LucideIcon = React.ComponentType<LucideProps>
  export const ArrowUpRight: LucideIcon
  export const BriefcaseBusiness: LucideIcon
  export const Check: LucideIcon
  export const CheckCircle2: LucideIcon
  export const ChevronDown: LucideIcon
  export const ChevronRight: LucideIcon
  export const Clock3: LucideIcon
  export const ConciergeBell: LucideIcon
  export const Dumbbell: LucideIcon
  export const HeartHandshake: LucideIcon
  export const Home: LucideIcon
  export const MapPin: LucideIcon
  export const Menu: LucideIcon
  export const MessageCircle: LucideIcon
  export const PartyPopper: LucideIcon
  export const Search: LucideIcon
  export const ShieldCheck: LucideIcon
  export const Sparkles: LucideIcon
  export const Star: LucideIcon
  export const Utensils: LucideIcon
  export const X: LucideIcon
}
