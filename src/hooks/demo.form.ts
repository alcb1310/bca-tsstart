import { createFormHook } from "@tanstack/react-form";

import {
	PasswordField,
	Select,
	SubscribeButton,
	TextArea,
	TextField,
} from "../components/demo.FormComponents";
import { fieldContext, formContext } from "./demo.form-context";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		PasswordField,
		Select,
		TextArea,
		TextField,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
