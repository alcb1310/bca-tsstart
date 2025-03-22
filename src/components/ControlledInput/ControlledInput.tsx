import { Input } from "@/ui/input";

type ControlledInputProps = {
	error?: string;
	"data-testid": string;
};

export default function ControlledInput(props: ControlledInputProps) {
	const { error, ...rest } = props;
	const hasError = !!error;

	return (
		<div>
			<Input {...rest} className={hasError ? "ring-destructive" : ""} />
			{hasError && (
				<p
					className="text-destructive"
					data-testid={`${props["data-testid"]}-error`}
				>
					{error}
				</p>
			)}
		</div>
	);
}
