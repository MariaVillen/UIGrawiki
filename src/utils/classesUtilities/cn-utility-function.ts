import { clsx, ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMergeConfigExtention = {
  prefix: "gwk-",
};

const twMerge = extendTailwindMerge(twMergeConfigExtention);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

// // ↓ Callback passed to `createTailwindMerge()` is called when
// //   `customTwMerge()` gets called the first time.
// const customTwMerge = createTailwindMerge((getDefaultConfig) => {
//   const defaultConfig = getDefaultConfig()

//   return {
//       cacheSize: 0, // ← Disabling cache
//       prefixes: [
//           ...defaultConfig.prefixes,
//           'gwk-', // ← Adding custom prefix
//       ],
//       // ↓ Here you define class groups
//       classGroups: {
//           ...defaultConfig.classGroups,
//           // ↓ The `foo` key here is the class group ID
//           //   ↓ Creates group of classes which have conflicting styles
//           //     Classes here: foo, foo-2, bar-baz, bar-baz-1, bar-baz-2
//           foo: ['foo', 'foo-2', { 'bar-baz': ['', '1', '2'] }],
//           //   ↓ Another group with classes qux-auto, qux-1000, qux-1001, …
//           bar: [{ qux: ['auto', (value) => Number(value) >= 1000] }],
//       },
//       // ↓ Here you can define additional conflicts across different groups
//       conflictingClassGroups: {
//           ...defaultConfig.conflictingClassGroups,
//           // ↓ ID of class group which creates a conflict with …
//           //     ↓ … classes from groups with these IDs
//           foo: ['bar'],
//       },
//   }
// })
