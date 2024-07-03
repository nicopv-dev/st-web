interface FailedProps {
  text: string;
}

export default function Failed({ text }: FailedProps) {
  return <div>{text}</div>;
}
