// // createTextStyle.test.ts

// import { Platform } from 'react-native';
// import { createTextStyle } from './typography';

// // Mocking useTheme hook
// jest.mock('@styles/theming/theme.hook', () => ({
//   __esModule: true,
//   default: () => ({
//     colors: {
//       natural: {
//         natural900: '#000000' // Mocked color value
//       }
//     }
//   })
// }));

// describe('createTextStyle', () => {
//   test('returns correct text style object with default values', () => {
//     const textStyle = createTextStyle(16, 24, 0.5, 'Arial');
//     const expectedStyle = {
//       fontSize: 16,
//       lineHeight: Platform.OS === 'android' ? 24 : undefined,
//       letterSpacing: 0.5,
//       fontFamily: 'Arial',
//       fontWeight: undefined,
//       color: '#000000' // Default color
//     };
//     expect(textStyle()).toEqual(expectedStyle);
//   });

//   test('returns correct text style object with custom values', () => {
//     const textStyle = createTextStyle(16, 24, 0.5, 'Arial', 'bold', '#FF0000', 'underline', 'uppercase');
//     const expectedStyle = {
//       fontSize: 16,
//       lineHeight: Platform.OS === 'android' ? 24 : undefined,
//       letterSpacing: 0.5,
//       fontFamily: 'Arial',
//       fontWeight: 'bold',
//       color: '#FF0000', // Custom color
//       textDecorationLine: 'underline',
//       textTransform: 'uppercase'
//     };
//     expect(textStyle()).toEqual(expectedStyle);
//   });

//   test('overrides default color with custom color', () => {
//     const textStyle = createTextStyle(16, 24, 0.5, 'Arial', undefined, '#00FF00');
//     expect(textStyle('#00FF00')).toHaveProperty('color', '#00FF00');
//   });
// });
