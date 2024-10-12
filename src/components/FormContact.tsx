// "use client";
// import React, { useState } from "react";
// import {
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Input,
//   Textarea,
//   Button,
// } from "@chakra-ui/react";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// const initValues = {
//   name: "",
//   email: "",
//   message: "",
// };
// const initState = { values: initValues };
// export default function FormContact() {
//   const [state, setState] = useState(initState);
//   const [touched, setTouched] = useState({});
//   const { values, isLoading } = state;
//   const handleChange = (target) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value,
//       },
//     }));
//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({
//       ...prev,
//       [target.name]: true,
//     }));
//   const onSubmit = async() => {
//     setState((prev) => ({
//       ...prev,
//       isLoading: true,
//     }));
//   };
//   return (
//     <SheetContent className="bg-gray-900 text-white antialiased font-sans">
//       <SheetHeader>
//         <SheetTitle className="font-serif text-2xl text-gray-800/1 font-bold">
//           <h1>Get In Touch </h1>
//         </SheetTitle>
//         <SheetDescription className="text-white/2">
//           Enter Name,Email And Message To Touch With Me.
//         </SheetDescription>
//       </SheetHeader>
//       <FormControl
//         className="mt-2"
//         isRequired
//         isInvalid={touched.name && !values.name}
//       >
//         <FormLabel>Name</FormLabel>
//         <Input
//           type="text"
//           name="name"
//           errorBorderColor="red.300"
//           value={values.name}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>
//       <FormControl
//         className="mt-2"
//         isRequired
//         isInvalid={touched.email && !values.email}
//       >
//         <FormLabel>Email</FormLabel>
//         <Input
//           type="email"
//           name="email"
//           errorBorderColor="red.300"
//           value={values.email}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>
//       <FormControl
//         className="mt-2"
//         isRequired
//         isInvalid={touched.message && !values.message}
//       >
//         <FormLabel>Message</FormLabel>
//         <Textarea
//           name="message"
//           typeof="text"
//           errorBorderColor="red.300"
//           value={values.message}
//           onChange={handleChange}
//           onBlur={onBlur}
//         />
//         <FormErrorMessage>Required</FormErrorMessage>
//       </FormControl>
//       <Button
//         variant="outline"
//         colorScheme="blue"
//         disabled={!values.name || !values.email || !values.message}
//         isLoading={isLoading}
//         onClick={onSubmit}
//         className="mt-4 flex items-end justify-end"
//       >
//         Send
//       </Button>
//     </SheetContent>
//   );
// }
