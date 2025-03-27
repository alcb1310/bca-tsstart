import { useAppForm } from "@/hooks/demo.form";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
	email: z.string().email({ message: "Ingrese un correo válido" }),
	password: z
		.string()
		.min(3, { message: "La contraseña debe tener al menos 3 caracteres" }),
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
		<div className="flex flex-row min-h-screen justify-center items-center">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				className="w-1/2 flex flex-col gap-4"
			>
				<form.AppField name="email">
					{(field) => <field.TextField label="Email" placeholder="Email" />}
				</form.AppField>

				<form.AppField name="password">
					{(field) => (
						<field.PasswordField label="Password" placeholder="Contraseña" />
					)}
				</form.AppField>

				<form.AppForm>
					<form.SubscribeButton label="Login" />
				</form.AppForm>
			</form>
		</div>
	);
}
