/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2rem',
              color: theme('colors.blue.500'), // h1 태그를 파란색으로
              fontWeight: '600',
              marginBottom: '0.5rem',
            },
            h2: {
              fontSize: '1.5rem',
              color: theme('colors.green.500'), // h2 태그를 초록색으로
              fontWeight: '500',
              margin: '0px',
            },
            h3: {
              fontSize: '1rem',
              color: theme('colors.green.500'), // h2 태그를 초록색으로
              fontWeight: '500',
            },
            li: {
              margin: '0rem',
            },
            p: {
              margin: '0rem',
            },
            a: {
              color: theme('colors.red.500'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.red.700'),
              },
            },
            blockquote: {
              fontStyle: 'italic',
              borderLeftWidth: '4px',
              borderLeftColor: theme('colors.gray.300'),
              paddingLeft: '1rem',
              color: theme('colors.gray.600'),
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
