import { PROFILE } from "@/components/profile/constants/profile.constants"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const FormSchema = z.object({
    language: z.string(),
})

export default function LanguageSelect() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            language: PROFILE.language || "",
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 bg-space-y-6">
                <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                        <FormItem className="w-44">
                            <FormLabel className="font-semibold">Ngôn ngữ</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Vietnamese">Vietnamese</SelectItem>
                                    <SelectItem value="United State">United State</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p className="my-3 text-secondary-foreground text-sm">Chọn ngôn ngữ bạn muốn sử dụng.</p>
                <Button variant="default" type="submit">Cập nhật</Button>
            </form>
        </Form>
    )
}