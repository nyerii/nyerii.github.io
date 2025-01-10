const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                garamond: ['EB Garamond', "serif"],
                inter: ['Inter', 'sans']
            },

            colors: {
                
                'tall-poppy': {
                    '50': '#fef2f2',
                    '100': '#fde3e3',
                    '200': '#fdcbcb',
                    '300': '#faa7a7',
                    '400': '#f57474',
                    '500': '#ec4747',
                    '600': '#d82a2a',
                    '700': '#bb2020', /*  */
                    '800': '#961e1e',
                    '900': '#7d1f1f',
                    '950': '#440b0b',
                },
                'black': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#000000',
                },
                
                
            }
        },
    },
    plugins: [],
});