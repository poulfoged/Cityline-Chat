import "./PromptDialogElement";

export interface PromptOption {
    id: string;
    title: string;
    intent: "primary" | "secondary";
}