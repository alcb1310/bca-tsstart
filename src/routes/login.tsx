import { useAppForm } from "@/hooks/demo.form";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
	email: z.string().email({ message: "Ingrese un correo válido" }),
	password: z.string().min(3),
});

// type _formType = z.infer<typeof schema>;

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: schema,
		},
		onSubmit: ({ value }) => {
			console.log(value);
			// Show success message
			alert("Form submitted successfully!");
		},
	});

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.AppField name="email">
					{(field) => <field.TextField label="Email" />}
				</form.AppField>

				<form.AppField name="password">
					{(field) => <field.PasswordField label="Password" />}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton label="Login" />
				</form.AppForm>
			</form>
		</div>
	);
}
