import CONSTANTS from '@/lib/constants'
import { z } from 'zod'

export const signUpFormSchema = z.object({
    tos: z.boolean({ required_error: "Please check above checbox to continue." }).default(false)
        .refine(value => value === true, {
            message: "Please check above checbox to continue."
        }),
    name: z.string({ required_error: "This field is required." }),
    email: z.string({ required_error: "This field is required." }).email({ message: "Please enter a valid email address." }),
    phone: z.string({ required_error: "This field is required." }),
    password: z.string({ required_error: "This field is required." }).min(1, {message: "This field is required."}),
})

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export const updateProfileSchema = z.object({
    name: z.string({ required_error: "This field is required." }),
    email: z.string({ required_error: "This field is required." }).email({ message: "Please enter a valid email address." }),
    phone: z.string({ required_error: "This field is required." }),
    website: z.string({ required_error: "This field is required." }).regex(CONSTANTS.REGEX.WEBSITE, { message: "Please enter a valid website url." }),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>

export const loginFormSchema = z.object({
    email: z.string({ required_error: "This field is required." }).email({ message: "Please enter a valid email address." }),
    password: z.string({ required_error: "This field is required." }).min(1, {message: "This field is required."}),
})
export type LoginFormSchema = z.infer<typeof loginFormSchema>

export const newPasswordSchema = z.object({
    password: z.string({ required_error: "This field is required." }).min(1, {message: "This field is required."}),
    confPassword: z.string({ required_error: "This field is required." }),
}).refine((data) => data.password === data.confPassword, {
    message: "Confirm password does not match the password.",
    path: ["confPassword"]
})
export type NewPasswordSchema = z.infer<typeof newPasswordSchema>

export const forgotPasswordSchema = z.object({
    email: z.string({ required_error: "This field is required." }).email({ message: "Please enter a valid email address." }),
})
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>

export const emailLoginSchema = z.object({
    email: z.string({ required_error: "This field is required." }).email({ message: "Please enter a valid email address." }),
})
export type EmailloginSchema = z.infer<typeof emailLoginSchema>


export const customizeSchema = z.object({
    website: z.string().regex(CONSTANTS.REGEX.WEBSITE, { message: "Please enter a valid website url." }).optional().or(z.literal("")),
    industry: z.string({ required_error: "This field is required." }),
    otherIndustry: z.string().optional().default(""),
    filter: z.boolean({ required_error: "This field is required." }),
    keywords: z.array(z.string(), { required_error: "This field is required." })
        .min(1, { message: "This field is required." })
        .max(5, { message: "You can't select more than 5 keywords." }),
})
export type CustomizeSchema = z.infer<typeof customizeSchema>
