// ============================================================
//  ORDER MANAGEMENT SYSTEM — CENTRAL DESIGN TOKENS
//  All colors, gradients, shadows, typography used here.
//  Import from any component:  import { colors, gradients } from '@/colors'
// ============================================================

export const colors = {
  // ── Backgrounds ──────────────────────────────────────────
  bg: {
    base:    '#07070F',   // deepest background
    surface: '#0F0F1A',   // page / layout bg
    card:    '#161625',   // card / panel bg
    elevated:'#1E1E30',   // modals, dropdowns
    hover:   '#23233A',   // hover state on surfaces
    active:  '#2A2A42',   // active / pressed
  },

  // ── Borders ───────────────────────────────────────────────
  border: {
    subtle:  '#1E1E30',
    default: '#2A2A42',
    focus:   '#FF2D78',
    glow:    'rgba(255,45,120,0.35)',
  },

  // ── Text ─────────────────────────────────────────────────
  text: {
    primary:   '#FFFFFF',
    secondary: '#A8A8C8',
    muted:     '#62627A',
    disabled:  '#3E3E58',
    inverse:   '#07070F',
    accent:    '#FF2D78',
  },

  // ── Brand / Primary ──────────────────────────────────────
  brand: {
    pink:   '#FF2D78',
    rose:   '#FF4D8F',
    fuchsia:'#D946A8',
    purple: '#B026D3',
    violet: '#7C3AED',
  },

  // ── Status Colors ────────────────────────────────────────
  status: {
    success: {
      base:   '#10D97E',
      bg:     'rgba(16,217,126,0.12)',
      border: 'rgba(16,217,126,0.30)',
      text:   '#10D97E',
    },
    warning: {
      base:   '#FFAA00',
      bg:     'rgba(255,170,0,0.12)',
      border: 'rgba(255,170,0,0.30)',
      text:   '#FFAA00',
    },
    error: {
      base:   '#FF4D6A',
      bg:     'rgba(255,77,106,0.12)',
      border: 'rgba(255,77,106,0.30)',
      text:   '#FF4D6A',
    },
    info: {
      base:   '#00B4FF',
      bg:     'rgba(0,180,255,0.12)',
      border: 'rgba(0,180,255,0.30)',
      text:   '#00B4FF',
    },
    pending: {
      base:   '#FFAA00',
      bg:     'rgba(255,170,0,0.12)',
      border: 'rgba(255,170,0,0.30)',
      text:   '#FFAA00',
    },
    inProgress: {
      base:   '#00B4FF',
      bg:     'rgba(0,180,255,0.12)',
      border: 'rgba(0,180,255,0.30)',
      text:   '#00B4FF',
    },
    completed: {
      base:   '#10D97E',
      bg:     'rgba(16,217,126,0.12)',
      border: 'rgba(16,217,126,0.30)',
      text:   '#10D97E',
    },
    cancelled: {
      base:   '#FF4D6A',
      bg:     'rgba(255,77,106,0.12)',
      border: 'rgba(255,77,106,0.30)',
      text:   '#FF4D6A',
    },
  },

  // ── Priority ─────────────────────────────────────────────
  priority: {
    high: {
      base:   '#FF4D6A',
      bg:     'rgba(255,77,106,0.12)',
      text:   '#FF4D6A',
    },
    medium: {
      base:   '#FFAA00',
      bg:     'rgba(255,170,0,0.12)',
      text:   '#FFAA00',
    },
    low: {
      base:   '#10D97E',
      bg:     'rgba(16,217,126,0.12)',
      text:   '#10D97E',
    },
  },
};

export const gradients = {
  // Primary brand gradient (pink → purple → violet)
  primary:        'linear-gradient(135deg, #FF2D78 0%, #B026D3 55%, #7C3AED 100%)',
  primaryHover:   'linear-gradient(135deg, #FF4D8F 0%, #C026D3 55%, #8B4CF7 100%)',
  primarySubtle:  'linear-gradient(135deg, rgba(255,45,120,0.15) 0%, rgba(124,58,237,0.15) 100%)',

  // Accent variants
  pinkRose:       'linear-gradient(135deg, #FF2D78 0%, #FF4D8F 100%)',
  violetPurple:   'linear-gradient(135deg, #7C3AED 0%, #B026D3 100%)',

  // Background ambience
  bgGlow:         'radial-gradient(ellipse at 20% 50%, rgba(255,45,120,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.08) 0%, transparent 60%)',
  cardSheen:      'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',

  // Status glows
  successGlow:    'linear-gradient(135deg, rgba(16,217,126,0.20) 0%, rgba(16,217,126,0.05) 100%)',
  warningGlow:    'linear-gradient(135deg, rgba(255,170,0,0.20) 0%, rgba(255,170,0,0.05) 100%)',
  errorGlow:      'linear-gradient(135deg, rgba(255,77,106,0.20) 0%, rgba(255,77,106,0.05) 100%)',
  infoGlow:       'linear-gradient(135deg, rgba(0,180,255,0.20) 0%, rgba(0,180,255,0.05) 100%)',

  // Stat cards
  statPink:       'linear-gradient(135deg, rgba(255,45,120,0.18) 0%, rgba(176,38,211,0.10) 100%)',
  statViolet:     'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(176,38,211,0.10) 100%)',
  statTeal:       'linear-gradient(135deg, rgba(0,180,255,0.18) 0%, rgba(16,217,126,0.10) 100%)',
  statGreen:      'linear-gradient(135deg, rgba(16,217,126,0.18) 0%, rgba(0,180,255,0.10) 100%)',
};

export const shadows = {
  sm:       '0 2px 8px rgba(0,0,0,0.4)',
  md:       '0 4px 16px rgba(0,0,0,0.5)',
  lg:       '0 8px 32px rgba(0,0,0,0.6)',
  xl:       '0 16px 48px rgba(0,0,0,0.7)',

  // Glow shadows
  pinkGlow:   '0 0 20px rgba(255,45,120,0.35), 0 4px 16px rgba(0,0,0,0.4)',
  violetGlow: '0 0 20px rgba(124,58,237,0.35), 0 4px 16px rgba(0,0,0,0.4)',
  card:       '0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
  modal:      '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,45,120,0.15)',
};

export const radius = {
  xs:   '4px',
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  '2xl':'24px',
  full: '9999px',
};

export const transitions = {
  fast:   'all 0.15s ease',
  base:   'all 0.25s ease',
  slow:   'all 0.4s ease',
  spring: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
};

export const typography = {
  fontDisplay: "'Syne', 'Clash Display', sans-serif",
  fontBody:    "'DM Sans', 'Outfit', sans-serif",
  fontMono:    "'JetBrains Mono', 'Fira Code', monospace",

  size: {
    xs:   '11px',
    sm:   '12px',
    base: '14px',
    md:   '15px',
    lg:   '16px',
    xl:   '18px',
    '2xl':'20px',
    '3xl':'24px',
    '4xl':'30px',
    '5xl':'36px',
  },

  weight: {
    normal:   400,
    medium:   500,
    semibold: 600,
    bold:     700,
    extrabold:800,
  },
};

// Convenience: CSS variable injection (call once in App.jsx / index.css)
export const cssVars = `
  :root {
    --bg-base:     ${colors.bg.base};
    --bg-surface:  ${colors.bg.surface};
    --bg-card:     ${colors.bg.card};
    --bg-elevated: ${colors.bg.elevated};
    --bg-hover:    ${colors.bg.hover};

    --border-subtle:  ${colors.border.subtle};
    --border-default: ${colors.border.default};
    --border-focus:   ${colors.border.focus};

    --text-primary:   ${colors.text.primary};
    --text-secondary: ${colors.text.secondary};
    --text-muted:     ${colors.text.muted};
    --text-accent:    ${colors.text.accent};

    --brand-pink:    ${colors.brand.pink};
    --brand-fuchsia: ${colors.brand.fuchsia};
    --brand-purple:  ${colors.brand.purple};
    --brand-violet:  ${colors.brand.violet};

    --gradient-primary: ${gradients.primary};
    --shadow-card:      ${shadows.card};
    --shadow-pink-glow: ${shadows.pinkGlow};

    --radius-sm:   ${radius.sm};
    --radius-md:   ${radius.md};
    --radius-lg:   ${radius.lg};
    --radius-full: ${radius.full};

    --transition-base:   ${transitions.base};
    --transition-spring: ${transitions.spring};

    --font-display: ${typography.fontDisplay};
    --font-body:    ${typography.fontBody};
    --font-mono:    ${typography.fontMono};
  }
`;

export default { colors, gradients, shadows, radius, transitions, typography };
