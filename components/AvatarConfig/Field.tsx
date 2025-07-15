interface FieldProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

export const Field = (props: FieldProps) => {
  return (
    <div className="flex flex-col gap-6 py-6 w-full">
      <label className="text-[#6A0DAD] text-2xl font-bold mb-4">{props.label}</label>
      {props.children}
    </div>
  );
};
